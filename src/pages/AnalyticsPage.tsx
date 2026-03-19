import { TrendingUp, Users, Star, Calendar, ArrowUpLeft } from "lucide-react";
import { motion } from "framer-motion";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const clientGrowth = [
  { month: "يناير", clients: 45 },
  { month: "فبراير", clients: 78 },
  { month: "مارس", clients: 112 },
  { month: "أبريل", clients: 156 },
  { month: "مايو", clients: 203 },
  { month: "يونيو", clients: 267 },
  { month: "يوليوز", clients: 312 },
  { month: "غشت", clients: 389 },
  { month: "شتنبر", clients: 445 },
  { month: "أكتوبر", clients: 534 },
  { month: "نونبر", clients: 621 },
  { month: "دجنبر", clients: 724 },
];

const reviewsData = [
  { month: "يناير", positive: 18, negative: 4 },
  { month: "فبراير", positive: 25, negative: 6 },
  { month: "مارس", positive: 32, negative: 5 },
  { month: "أبريل", positive: 41, negative: 7 },
  { month: "مايو", positive: 38, negative: 3 },
  { month: "يونيو", positive: 52, negative: 8 },
  { month: "يوليوز", positive: 48, negative: 4 },
  { month: "غشت", positive: 61, negative: 6 },
  { month: "شتنبر", positive: 55, negative: 5 },
  { month: "أكتوبر", positive: 67, negative: 7 },
  { month: "نونبر", positive: 72, negative: 4 },
  { month: "دجنبر", positive: 78, negative: 5 },
];

const bookingsData = [
  { month: "يناير", bookings: 32 },
  { month: "فبراير", bookings: 45 },
  { month: "مارس", bookings: 58 },
  { month: "أبريل", bookings: 72 },
  { month: "مايو", bookings: 65 },
  { month: "يونيو", bookings: 89 },
  { month: "يوليوز", bookings: 95 },
  { month: "غشت", bookings: 110 },
  { month: "شتنبر", bookings: 98 },
  { month: "أكتوبر", bookings: 125 },
  { month: "نونبر", bookings: 132 },
  { month: "دجنبر", bookings: 156 },
];

const ratingDistribution = [
  { name: "5 نجوم", value: 412, color: "hsl(217, 91%, 60%)" },
  { name: "4 نجوم", value: 185, color: "hsl(258, 60%, 66%)" },
  { name: "3 نجوم", value: 48, color: "hsl(220, 13%, 70%)" },
  { name: "2 نجوم", value: 22, color: "hsl(0, 60%, 70%)" },
  { name: "1 نجمة", value: 9, color: "hsl(0, 72%, 51%)" },
];

const kpis = [
  { label: "إجمالي العملاء", value: "1,247", change: "+12%", icon: Users, gradient: "from-primary/10 to-primary/5", iconBg: "bg-primary/12", iconColor: "text-primary" },
  { label: "التقييمات هذا الشهر", value: "83", change: "+18%", icon: Star, gradient: "from-secondary/10 to-secondary/5", iconBg: "bg-secondary/12", iconColor: "text-secondary" },
  { label: "الحجوزات هذا الشهر", value: "156", change: "+23%", icon: Calendar, gradient: "from-accent/10 to-accent/5", iconBg: "bg-accent/12", iconColor: "text-accent" },
  { label: "معدل التقييم", value: "4.6", change: "+0.2", icon: TrendingUp, gradient: "from-primary/10 to-secondary/5", iconBg: "bg-primary/12", iconColor: "text-primary" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-border/50 bg-card/95 backdrop-blur-sm px-3 py-2.5 shadow-[var(--shadow-elevated)] text-xs">
      <p className="font-bold text-foreground mb-1.5">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color }} className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full" style={{ background: p.color }} />
          {p.name}: <span className="font-bold">{p.value}</span>
        </p>
      ))}
    </div>
  );
};

const AnalyticsPage = () => (
  <DashboardLayout>
    <div className="max-w-6xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-xl md:text-2xl font-bold text-foreground">التحليلات</h1>
        <p className="text-sm text-muted-foreground mt-0.5">نظرة شاملة على أداء مشروعك خلال السنة</p>
      </motion.div>

      {/* KPIs */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
      >
        {kpis.map((k) => (
          <motion.div
            key={k.label}
            variants={itemVariants}
            className={`rounded-2xl border border-border/50 bg-gradient-to-br ${k.gradient} bg-card p-4 md:p-5 shadow-[var(--shadow-card)] active:scale-[0.97] transition-transform`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl ${k.iconBg} flex items-center justify-center`}>
                <k.icon className={`h-[18px] w-[18px] md:h-5 md:w-5 ${k.iconColor}`} />
              </div>
              <span className="flex items-center gap-0.5 text-[11px] md:text-xs font-bold text-accent">
                <ArrowUpLeft className="h-3 w-3" />
                {k.change}
              </span>
            </div>
            <p className="text-xl md:text-2xl font-black text-foreground tracking-tight">{k.value}</p>
            <p className="text-[11px] md:text-xs text-muted-foreground mt-1 truncate">{k.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Client Growth Chart */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-2xl border border-border/50 bg-card p-5 md:p-6 shadow-[var(--shadow-card)]"
      >
        <h2 className="text-base md:text-lg font-bold text-foreground mb-1">نمو العملاء</h2>
        <p className="text-xs text-muted-foreground mb-6">عدد العملاء المسجلين خلال السنة</p>
        <div className="h-64 md:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={clientGrowth}>
              <defs>
                <linearGradient id="gradClients" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="month" fontSize={10} tick={{ fill: "hsl(220, 9%, 46%)" }} />
              <YAxis fontSize={10} tick={{ fill: "hsl(220, 9%, 46%)" }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="clients" name="العملاء" stroke="hsl(217, 91%, 60%)" fill="url(#gradClients)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
        {/* Reviews Chart */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl border border-border/50 bg-card p-5 md:p-6 shadow-[var(--shadow-card)]"
        >
          <h2 className="text-base md:text-lg font-bold text-foreground mb-1">تطور التقييمات</h2>
          <p className="text-xs text-muted-foreground mb-6">إيجابية مقابل سلبية</p>
          <div className="h-56 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={reviewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                <XAxis dataKey="month" fontSize={9} tick={{ fill: "hsl(220, 9%, 46%)" }} />
                <YAxis fontSize={9} tick={{ fill: "hsl(220, 9%, 46%)" }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="positive" name="إيجابي" fill="hsl(160, 84%, 39%)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="negative" name="سلبي" fill="hsl(0, 72%, 51%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Rating Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="rounded-2xl border border-border/50 bg-card p-5 md:p-6 shadow-[var(--shadow-card)]"
        >
          <h2 className="text-base md:text-lg font-bold text-foreground mb-1">توزيع التقييمات</h2>
          <p className="text-xs text-muted-foreground mb-6">حسب عدد النجوم</p>
          <div className="h-48 md:h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={ratingDistribution} cx="50%" cy="50%" innerRadius={50} outerRadius={85} dataKey="value" strokeWidth={3} stroke="hsl(0, 0%, 100%)">
                  {ratingDistribution.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {ratingDistribution.map((r) => (
              <span key={r.name} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-lg">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: r.color }} />
                {r.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bookings Chart */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="rounded-2xl border border-border/50 bg-card p-5 md:p-6 shadow-[var(--shadow-card)]"
      >
        <h2 className="text-base md:text-lg font-bold text-foreground mb-1">أداء الحجوزات</h2>
        <p className="text-xs text-muted-foreground mb-6">عدد الحجوزات الشهرية</p>
        <div className="h-56 md:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={bookingsData}>
              <defs>
                <linearGradient id="gradBookings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="month" fontSize={10} tick={{ fill: "hsl(220, 9%, 46%)" }} />
              <YAxis fontSize={10} tick={{ fill: "hsl(220, 9%, 46%)" }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="bookings" name="الحجوزات" stroke="hsl(160, 84%, 39%)" fill="url(#gradBookings)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  </DashboardLayout>
);

export default AnalyticsPage;
