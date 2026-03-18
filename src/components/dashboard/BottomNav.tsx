import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Users, Calendar, BarChart3, Settings, UserCheck, Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "الرئيسية", url: "/dashboard", icon: LayoutDashboard },
  { title: "العملاء", url: "/dashboard/clients", icon: Users },
  { title: "الاسترجاع", url: "/dashboard/reactivation", icon: UserCheck },
  { title: "التقييمات", url: "/dashboard/reviews", icon: Star },
  { title: "الإعدادات", url: "/dashboard/settings", icon: Settings },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md safe-area-bottom md:hidden">
      <div className="flex items-center justify-around h-16 px-1">
        {navItems.map((item) => {
          const active = location.pathname === item.url;
          return (
            <button
              key={item.url}
              onClick={() => navigate(item.url)}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors",
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5", active && "stroke-[2.5]")} />
              <span className="text-[10px] font-medium leading-none">{item.title}</span>
              {active && (
                <div className="w-1 h-1 rounded-full bg-primary mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
