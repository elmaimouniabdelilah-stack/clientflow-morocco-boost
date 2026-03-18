import { Users, Star, Calendar, TrendingUp, ArrowUpLeft } from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const stats = [
  { icon: Users, label: "إجمالي العملاء", value: "1,247", change: "+12%", gradient: "from-primary/10 to-primary/5", iconBg: "bg-primary/12", iconColor: "text-primary" },
  { icon: Star, label: "إجمالي التقييمات", value: "892", change: "+8%", gradient: "from-secondary/10 to-secondary/5", iconBg: "bg-secondary/12", iconColor: "text-secondary" },
  { icon: Calendar, label: "حجوزات هذا الشهر", value: "156", change: "+23%", gradient: "from-accent/10 to-accent/5", iconBg: "bg-accent/12", iconColor: "text-accent" },
  { icon: TrendingUp, label: "التقييم الإيجابي", value: "94%", change: "+3%", gradient: "from-primary/10 to-secondary/5", iconBg: "bg-primary/12", iconColor: "text-primary" },
];

const recentActivity = [
  { text: "تمت إضافة عميل جديد: أحمد م.", time: "منذ 2 دقيقة", dot: "bg-accent" },
  { text: "تقييم 5 نجوم من فاطمة ز.", time: "منذ 15 دقيقة", dot: "bg-star" },
  { text: "تم تأكيد حجز: غدًا الساعة 10:00", time: "منذ ساعة", dot: "bg-primary" },
  { text: "تم إرسال طلب تقييم لـ 12 عميل", time: "منذ 3 ساعات", dot: "bg-secondary" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

const Dashboard = () => (
  <DashboardLayout>
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-xl md:text-2xl font-bold text-foreground">مرحبًا بك 👋</h1>
        <p className="text-sm text-muted-foreground mt-0.5">إليك ملخص نشاطك اليوم</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={item}
            className={`rounded-2xl border border-border/50 bg-gradient-to-br ${s.gradient} bg-card p-4 md:p-5 shadow-[var(--shadow-card)] active:scale-[0.97] transition-transform`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl ${s.iconBg} flex items-center justify-center`}>
                <s.icon className={`h-[18px] w-[18px] md:h-5 md:w-5 ${s.iconColor}`} />
              </div>
              <span className="flex items-center gap-0.5 text-[11px] md:text-xs font-bold text-accent">
                <ArrowUpLeft className="h-3 w-3" />
                {s.change}
              </span>
            </div>
            <p className="text-xl md:text-2xl font-black text-foreground tracking-tight">{s.value}</p>
            <p className="text-[11px] md:text-xs text-muted-foreground mt-1 truncate">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-2xl border border-border/50 bg-card p-5 md:p-6 shadow-[var(--shadow-card)]"
      >
        <h2 className="text-base md:text-lg font-bold text-foreground mb-4">النشاط الأخير</h2>
        <div className="space-y-1">
          {recentActivity.map((a, i) => (
            <div key={i} className="flex items-center gap-3 py-3 border-b border-border/40 last:border-0 active:bg-muted/40 rounded-xl px-2 -mx-2 transition-colors">
              <div className={`w-2 h-2 rounded-full ${a.dot} shrink-0`} />
              <p className="text-sm text-foreground flex-1">{a.text}</p>
              <p className="text-[11px] text-muted-foreground whitespace-nowrap">{a.time}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </DashboardLayout>
);

export default Dashboard;
