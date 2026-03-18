import { Users, Star, Calendar, TrendingUp } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const stats = [
  { icon: Users, label: "Total Clients", value: "1,247", change: "+12%", changeColor: "text-accent" },
  { icon: Star, label: "Total Reviews", value: "892", change: "+8%", changeColor: "text-accent" },
  { icon: Calendar, label: "Bookings This Month", value: "156", change: "+23%", changeColor: "text-accent" },
  { icon: TrendingUp, label: "Positive Rating", value: "94%", change: "+3%", changeColor: "text-accent" },
];

const recentActivity = [
  { text: "New client added: Ahmed M.", time: "2 min ago" },
  { text: "5-star review from Fatima Z.", time: "15 min ago" },
  { text: "Booking confirmed: Tomorrow 10:00", time: "1 hr ago" },
  { text: "Review request sent to 12 clients", time: "3 hrs ago" },
];

const Dashboard = () => (
  <DashboardLayout>
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between mb-3">
              <s.icon className="h-5 w-5 text-primary" />
              <span className={`text-xs font-semibold ${s.changeColor}`}>{s.change}</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((a, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <p className="text-sm text-foreground">{a.text}</p>
              <p className="text-xs text-muted-foreground whitespace-nowrap ml-4">{a.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Dashboard;
