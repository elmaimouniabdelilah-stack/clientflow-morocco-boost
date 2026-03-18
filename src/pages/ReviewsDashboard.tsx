import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Link2, Copy, Check, MessageCircle, ThumbsUp, ThumbsDown, ExternalLink, Plus, Search, TrendingUp, Eye, MousePointerClick, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

interface ReviewLink {
  id: string;
  name: string;
  googleUrl: string;
  link: string;
  totalReviews: number;
  positiveCount: number;
  negativeCount: number;
  views: number;
  googleClicks: number;
}

interface FeedbackItem {
  id: string;
  rating: number;
  name: string;
  phone: string;
  text: string;
  linkName: string;
  date: string;
}

const mockLinks: ReviewLink[] = [
  {
    id: "1",
    name: "المطعم الرئيسي",
    googleUrl: "https://g.page/my-restaurant/review",
    link: `${window.location.origin}/review?biz=المطعم الرئيسي&google=https://g.page/my-restaurant/review`,
    totalReviews: 47,
    positiveCount: 38,
    negativeCount: 9,
    views: 124,
    googleClicks: 31,
  },
  {
    id: "2",
    name: "فرع مراكش",
    googleUrl: "https://g.page/my-restaurant-marrakech/review",
    link: `${window.location.origin}/review?biz=فرع مراكش&google=https://g.page/my-restaurant-marrakech/review`,
    totalReviews: 23,
    positiveCount: 20,
    negativeCount: 3,
    views: 58,
    googleClicks: 17,
  },
];

const mockFeedback: FeedbackItem[] = [
  { id: "1", rating: 2, name: "سعيد م.", phone: "0612345678", text: "الخدمة كانت بطيئة جدًا، انتظرنا أكثر من 30 دقيقة.", linkName: "المطعم الرئيسي", date: "منذ ساعتين" },
  { id: "2", rating: 1, name: "ليلى ك.", phone: "0698765432", text: "الطعام كان باردًا عند الوصول. يحتاج تحسين.", linkName: "المطعم الرئيسي", date: "منذ يوم" },
  { id: "3", rating: 3, name: "عمر ب.", phone: "", text: "تجربة مقبولة لكن الأسعار مرتفعة مقارنة بالجودة.", linkName: "فرع مراكش", date: "منذ 3 أيام" },
];

const mockWeeklyData = [
  { day: "الإثنين", views: 18, ratings: 8, googleClicks: 5 },
  { day: "الثلاثاء", views: 22, ratings: 12, googleClicks: 9 },
  { day: "الأربعاء", views: 15, ratings: 7, googleClicks: 4 },
  { day: "الخميس", views: 28, ratings: 15, googleClicks: 11 },
  { day: "الجمعة", views: 35, ratings: 20, googleClicks: 16 },
  { day: "السبت", views: 42, ratings: 25, googleClicks: 19 },
  { day: "الأحد", views: 22, ratings: 10, googleClicks: 7 },
];

const mockFunnelData = [
  { stage: "زيارة الرابط", count: 182 },
  { stage: "بدء التقييم", count: 97 },
  { stage: "تقييم إيجابي", count: 58 },
  { stage: "نقر Google", count: 48 },
];

const ReviewsDashboard = () => {
  const [links, setLinks] = useState<ReviewLink[]>(mockLinks);
  const [feedback] = useState<FeedbackItem[]>(mockFeedback);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [newName, setNewName] = useState("");
  const [newGoogleUrl, setNewGoogleUrl] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const totalViews = links.reduce((s, l) => s + l.views, 0);
  const totalReviews = links.reduce((s, l) => s + l.totalReviews, 0);
  const totalPositive = links.reduce((s, l) => s + l.positiveCount, 0);
  const totalGoogleClicks = links.reduce((s, l) => s + l.googleClicks, 0);
  const completionRate = totalViews > 0 ? Math.round((totalGoogleClicks / totalViews) * 100) : 0;
  const positiveRate = totalReviews > 0 ? Math.round((totalPositive / totalReviews) * 100) : 0;

  const copyLink = (link: string, id: string) => {
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    toast.success("تم نسخ الرابط!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const createLink = () => {
    if (!newName.trim() || !newGoogleUrl.trim()) return;
    const newLink: ReviewLink = {
      id: Date.now().toString(),
      name: newName,
      googleUrl: newGoogleUrl,
      link: `${window.location.origin}/review?biz=${encodeURIComponent(newName)}&google=${encodeURIComponent(newGoogleUrl)}`,
      totalReviews: 0,
      positiveCount: 0,
      negativeCount: 0,
      views: 0,
      googleClicks: 0,
    };
    setLinks([...links, newLink]);
    setNewName("");
    setNewGoogleUrl("");
    setDialogOpen(false);
    toast.success("تم إنشاء رابط التقييم!");
  };

  const shareWhatsApp = (link: string, bizName: string) => {
    const msg = encodeURIComponent(`مرحبًا! نتمنى أنك استمتعت بتجربتك مع ${bizName}. يسعدنا تقييمك: ${link}`);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile ? `https://wa.me/?text=${msg}` : `https://web.whatsapp.com/send?text=${msg}`;
    window.open(url, "_blank");
  };

  const filteredFeedback = feedback.filter(
    (f) => f.text.includes(searchQuery) || f.name.includes(searchQuery) || f.linkName.includes(searchQuery)
  );

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">نظام التقييمات</h1>
            <p className="text-sm text-muted-foreground mt-1">تتبع التقييمات وتحليل معدل الإتمام على Google</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="ml-2 h-4 w-4" />
                رابط جديد
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>إنشاء رابط تقييم جديد</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label>اسم المشروع / الفرع</Label>
                  <Input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="مثال: مطعمي - فرع الدار البيضاء" />
                </div>
                <div>
                  <Label>رابط Google Reviews</Label>
                  <Input value={newGoogleUrl} onChange={(e) => setNewGoogleUrl(e.target.value)} placeholder="https://g.page/your-business/review" dir="ltr" />
                </div>
                <Button onClick={createLink} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  إنشاء الرابط
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Analytics Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "زيارات الرابط", value: totalViews, icon: Eye, color: "text-primary", bg: "bg-primary/10" },
            { label: "إجمالي التقييمات", value: totalReviews, icon: Star, color: "text-primary", bg: "bg-primary/10" },
            { label: "نقرات Google", value: totalGoogleClicks, icon: MousePointerClick, color: "text-primary", bg: "bg-primary/10" },
            { label: "معدل الإتمام", value: `${completionRate}%`, icon: TrendingUp, color: "text-primary", bg: "bg-primary/10" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weekly trend */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">النشاط الأسبوعي</h3>
            </div>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockWeeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Area type="monotone" dataKey="views" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.1)" strokeWidth={2} name="زيارات" />
                  <Area type="monotone" dataKey="googleClicks" stroke="hsl(174 62% 28%)" fill="hsl(174 62% 28% / 0.1)" strokeWidth={2} name="نقرات Google" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Funnel */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">مسار التقييم (Funnel)</h3>
            </div>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockFunnelData} layout="vertical" barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis dataKey="stage" type="category" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} width={90} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 6, 6, 0]} name="العدد" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
              <span>معدل التحويل الكلي</span>
              <span className="font-bold text-primary text-sm">{completionRate}%</span>
            </div>
          </div>
        </div>

        {/* Completion rate per link */}
        <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <h3 className="text-sm font-semibold text-foreground mb-4">معدل الإتمام حسب الرابط</h3>
          <div className="space-y-4">
            {links.map((rl) => {
              const rate = rl.views > 0 ? Math.round((rl.googleClicks / rl.views) * 100) : 0;
              const posRate = rl.totalReviews > 0 ? Math.round((rl.positiveCount / rl.totalReviews) * 100) : 0;
              return (
                <div key={rl.id} className="flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-foreground truncate">{rl.name}</span>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{rl.views} زيارة</span>
                        <span>{rl.googleClicks} نقرة</span>
                        <span className="font-bold text-primary">{rate}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${rate}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                    <div className="flex items-center gap-4 mt-1.5 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3 text-primary" /> {posRate}% إيجابي
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsDown className="h-3 w-3 text-destructive" /> {100 - posRate}% سلبي
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Review Links */}
        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((rl) => (
            <div key={rl.id} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground">{rl.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{rl.totalReviews} تقييم · {rl.views} زيارة</p>
                </div>
                <Link2 className="h-5 w-5 text-primary" />
              </div>

              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-1.5 text-sm">
                  <ThumbsUp className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">{rl.positiveCount}</span>
                  <span className="text-muted-foreground text-xs">إيجابي</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <ThumbsDown className="h-4 w-4 text-destructive" />
                  <span className="font-medium text-foreground">{rl.negativeCount}</span>
                  <span className="text-muted-foreground text-xs">سلبي</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <MousePointerClick className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">{rl.googleClicks}</span>
                  <span className="text-muted-foreground text-xs">Google</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" onClick={() => copyLink(rl.link, rl.id)}>
                  {copiedId === rl.id ? (
                    <><Check className="ml-1 h-3.5 w-3.5" /> تم النسخ</>
                  ) : (
                    <><Copy className="ml-1 h-3.5 w-3.5" /> نسخ الرابط</>
                  )}
                </Button>
                <Button variant="outline" size="sm" onClick={() => shareWhatsApp(rl.link, rl.name)}>
                  <MessageCircle className="h-3.5 w-3.5" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.open(rl.link, "_blank")}>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Negative Feedback */}
        <div className="rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="p-5 border-b border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-foreground">الملاحظات الداخلية</h2>
              <p className="text-xs text-muted-foreground">التعليقات التي لم تُنشر على Google (تقييم 1-3)</p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="بحث..." className="pr-9" />
            </div>
          </div>

          <div className="divide-y divide-border">
            {filteredFeedback.length === 0 ? (
              <div className="p-8 text-center text-sm text-muted-foreground">لا توجد ملاحظات بعد</div>
            ) : (
              filteredFeedback.map((f) => (
                <div key={f.id} className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((v) => (
                          <Star key={v} className={`h-3.5 w-3.5 ${v <= f.rating ? "fill-primary text-primary" : "text-border"}`} />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-foreground">{f.name || "مجهول"}</span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{f.linkName}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{f.date}</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{f.text}</p>
                  {f.phone && (
                    <a
                      href={`https://web.whatsapp.com/send?phone=${f.phone.replace(/^0/, "212")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline"
                    >
                      <MessageCircle className="h-3 w-3" />
                      الرد عبر واتساب
                    </a>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <p className="text-[10px] text-muted-foreground/50 text-center pb-4">
          البيانات حاليًا تجريبية — فعّل Lovable Cloud لربط النظام بقاعدة بيانات حقيقية
        </p>
      </div>
    </DashboardLayout>
  );
};

export default ReviewsDashboard;
