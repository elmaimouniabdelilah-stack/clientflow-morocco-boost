import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Users, Calendar, BarChart3, Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "الرئيسية", url: "/dashboard", icon: LayoutDashboard },
  { title: "العملاء", url: "/dashboard/clients", icon: Users },
  { title: "الحجوزات", url: "/dashboard/bookings", icon: Calendar },
  { title: "التحليلات", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "الإعدادات", url: "/dashboard/settings", icon: Settings },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-bottom">
      <div className="mx-3 mb-2 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl shadow-lg">
        <div className="flex items-center justify-around h-[60px] px-1">
          {navItems.map((item) => {
            const active = location.pathname === item.url;
            return (
              <button
                key={item.url}
                onClick={() => navigate(item.url)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 w-14 h-12 rounded-xl transition-all",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground"
                )}
              >
                <item.icon className={cn("h-[20px] w-[20px]", active && "stroke-[2.5]")} />
                <span className="text-[9px] font-semibold leading-none">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
