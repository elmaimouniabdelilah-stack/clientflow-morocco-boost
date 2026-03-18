import { useState } from "react";
import { Star, Link2, Copy, Check, MessageCircle, ThumbsUp, ThumbsDown, ExternalLink, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface ReviewLink {
  id: string;
  name: string;
  googleUrl: string;
  link: string;
  totalReviews: number;
  positiveCount: number;
  negativeCount: number;
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

// Mock data
const mockLinks: ReviewLink[] = [
  {
    id: "1",
    name: "المطعم الرئيسي",
    googleUrl: "https://g.page/my-restaurant/review",
    link: `${window.location.origin}/review?biz=المطعم الرئيسي&google=https://g.page/my-restaurant/review`,
    totalReviews: 47,
    positiveCount: 38,
    negativeCount: 9,
  },
  {
    id: "2",
    name: "فرع مراكش",
    googleUrl: "https://g.page/my-restaurant-marrakech/review",
    link: `${window.location.origin}/review?biz=فرع مراكش&google=https://g.page/my-restaurant-marrakech/review`,
    totalReviews: 23,
    positiveCount: 20,
    negativeCount: 3,
  },
];

const mockFeedback: FeedbackItem[] = [
  { id: "1", rating: 2, name: "سعيد م.", phone: "0612345678", text: "الخدمة كانت بطيئة جدًا، انتظرنا أكثر من 30 دقيقة.", linkName: "المطعم الرئيسي", date: "منذ ساعتين" },
  { id: "2", rating: 1, name: "ليلى ك.", phone: "0698765432", text: "الطعام كان باردًا عند الوصول. يحتاج تحسين.", linkName: "المطعم الرئيسي", date: "منذ يوم" },
  { id: "3", rating: 3, name: "عمر ب.", phone: "", text: "تجربة مقبولة لكن الأسعار مرتفعة مقارنة بالجودة.", linkName: "فرع مراكش", date: "منذ 3 أيام" },
];

const ReviewsDashboard = () => {
  const [links, setLinks] = useState<ReviewLink[]>(mockLinks);
  const [feedback] = useState<FeedbackItem[]>(mockFeedback);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [newName, setNewName] = useState("");
  const [newGoogleUrl, setNewGoogleUrl] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    };
    setLinks([...links, newLink]);
    setNewName("");
    setNewGoogleUrl("");
    setDialogOpen(false);
    toast.success("تم إنشاء رابط التقييم!");
  };

  const shareWhatsApp = (link: string, bizName: string) => {
    const msg = encodeURIComponent(`مرحبًا! نتمنى أنك استمتعت بتجربتك مع ${bizName}. يسعدنا تقييمك: ${link}`);
    window.open(`https://wa.me/?text=${msg}`, "_blank");
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
            <p className="text-sm text-muted-foreground mt-1">أنشئ روابط تقييم ذكية وتابع ملاحظات العملاء</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary text-primary-foreground">
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
                <Button onClick={createLink} className="w-full gradient-primary text-primary-foreground">
                  إنشاء الرابط
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Review Links */}
        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((rl) => (
            <div key={rl.id} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground">{rl.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{rl.totalReviews} تقييم</p>
                </div>
                <Link2 className="h-5 w-5 text-primary" />
              </div>

              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-1.5 text-sm">
                  <ThumbsUp className="h-4 w-4 text-accent" />
                  <span className="font-medium text-foreground">{rl.positiveCount}</span>
                  <span className="text-muted-foreground text-xs">إيجابي</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <ThumbsDown className="h-4 w-4 text-destructive" />
                  <span className="font-medium text-foreground">{rl.negativeCount}</span>
                  <span className="text-muted-foreground text-xs">سلبي</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => copyLink(rl.link, rl.id)}
                >
                  {copiedId === rl.id ? (
                    <><Check className="ml-1 h-3.5 w-3.5" /> تم النسخ</>
                  ) : (
                    <><Copy className="ml-1 h-3.5 w-3.5" /> نسخ الرابط</>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => shareWhatsApp(rl.link, rl.name)}
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(rl.link, "_blank")}
                >
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
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="بحث..."
                className="pr-9"
              />
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
                      href={`https://wa.me/${f.phone.replace(/^0/, "212")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs text-accent hover:underline"
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
      </div>
    </DashboardLayout>
  );
};

export default ReviewsDashboard;
