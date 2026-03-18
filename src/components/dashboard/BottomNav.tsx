import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Users, Calendar, BarChart3, Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
      <div className="mx-3 mb-3 rounded-[20px] bg-card/90 backdrop-blur-2xl shadow-[0_-4px_30px_rgba(0,0,0,0.08)] border border-border/40">
        <div className="flex items-center justify-evenly h-[68px] px-1">
          {navItems.map((item) => {
            const active = location.pathname === item.url;
            return (
              <button
                key={item.url}
                onClick={() => navigate(item.url)}
                className={cn(
                  "relative flex flex-col items-center justify-center gap-1.5 flex-1 min-w-0 h-[52px] rounded-2xl transition-all duration-300 active:scale-90",
                  active
                    ? "text-primary"
                    : "text-muted-foreground active:text-foreground"
                )}
              >
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-2xl gradient-primary opacity-[0.08]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {active && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -top-0.5 w-5 h-1 rounded-full gradient-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <motion.div
                  animate={active ? { scale: 1.15, y: -1 } : { scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <item.icon className={cn(
                    "h-[21px] w-[21px] shrink-0 transition-all duration-300",
                    active ? "stroke-[2.5] drop-shadow-[0_0_6px_hsl(var(--primary)/0.4)]" : "stroke-[1.8]"
                  )} />
                </motion.div>
                <span className={cn(
                  "text-[10px] leading-none truncate max-w-full px-0.5 transition-all duration-300",
                  active ? "font-bold" : "font-medium"
                )}>
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
