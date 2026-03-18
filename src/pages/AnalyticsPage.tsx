import { TrendingUp, Users, Star, Calendar, ArrowUp, ArrowDown } from "lucide-react";
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
  { name: "5 نجوم", value: 412, color: "hsl(239, 84%, 67%)" },
  { name: "4 نجوم", value: 185, color: "hsl(258, 90%, 66%)" },
  { name: "3 نجوم", value: 48, color: "hsl(220, 13%, 70%)" },
  { name: "2 نجوم", value: 22, color: "hsl(0, 60%, 70%)" },
  { name: "1 نجمة", value: 9, color: "hsl(0, 84%, 60%)" },
];

const kpis = [
  { label: "إجمالي العملاء", value: "1,247", change: "+12%", up: true, icon: Users },
  { label: "التقييمات هذا الشهر", value: "83", change: "+18%", up: true, icon: Star },
  { label: "الحجوزات هذا الشهر", value: "156", change: "+23%", up: true, icon: Calendar },
  { label: "معدل التقييم", value: "4.6", change: "+0.2", up: true, icon: TrendingUp },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-[var(--shadow-elevated)] text-xs">
      <p className="font-semibold text-foreground mb-1">{label}</p>
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
      <div>
        <h1 className="text-2xl font-bold text-foreground">التحليلات</h1>
        <p className="text-sm text-muted-foreground mt-1">نظرة شاملة على أداء مشروعك خلال السنة</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between mb-3">
              <k.icon className="h-5 w-5 text-primary" />
              <span className={`inline-flex items-center gap-0.5 text-xs font-semibold ${k.up ? "text-accent" : "text-destructive"}`}>
                {k.up ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                {k.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-foreground">{k.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{k.label}</p>
          </div>
        ))}
      </div>

      {/* Client Growth Chart */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
        <h2 className="text-lg font-semibold text-foreground mb-1">نمو العملاء</h2>
        <p className="text-xs text-muted-foreground mb-6">عدد العملاء المسجلين خلال السنة</p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={clientGrowth}>
              <defs>
                <linearGradient id="gradClients" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(239, 84%, 67%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(239, 84%, 67%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="month" fontSize={11} tick={{ fill: "hsl(220, 9%, 46%)" }} />
              <YAxis fontSize={11} tick={{ fill: "hsl(220, 9%, 46%)" }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="clients" name="العملاء" stroke="hsl(239, 84%, 67%)" fill="url(#gradClients)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Reviews Chart */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-semibold text-foreground mb-1">تطور التقييمات</h2>
          <p className="text-xs text-muted-foreground mb-6">إيجابية مقابل سلبية</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={reviewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                <XAxis dataKey="month" fontSize={10} tick={{ fill: "hsl(220, 9%, 46%)" }} />
                <YAxis fontSize={10} tick={{ fill: "hsl(220, 9%, 46%)" }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="positive" name="إيجابي" fill="hsl(160, 84%, 39%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="negative" name="سلبي" fill="hsl(0, 84%, 60%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-semibold text-foreground mb-1">توزيع التقييمات</h2>
          <p className="text-xs text-muted-foreground mb-6">حسب عدد النجوم</p>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={ratingDistribution} cx="50%" cy="50%" innerRadius={55} outerRadius={90} dataKey="value" strokeWidth={2} stroke="hsl(0, 0%, 100%)">
                  {ratingDistribution.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {ratingDistribution.map((r) => (
              <span key={r.name} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: r.color }} />
                {r.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bookings Chart */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
        <h2 className="text-lg font-semibold text-foreground mb-1">أداء الحجوزات</h2>
        <p className="text-xs text-muted-foreground mb-6">عدد الحجوزات الشهرية</p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={bookingsData}>
              <defs>
                <linearGradient id="gradBookings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="month" fontSize={11} tick={{ fill: "hsl(220, 9%, 46%)" }} />
              <YAxis fontSize={11} tick={{ fill: "hsl(220, 9%, 46%)" }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="bookings" name="الحجوزات" stroke="hsl(160, 84%, 39%)" fill="url(#gradBookings)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default AnalyticsPage;
