import {
  LayoutDashboard, Users, Star, Calendar, BarChart3, Settings, LogOut,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "لوحة التحكم", url: "/dashboard", icon: LayoutDashboard },
  { title: "العملاء", url: "/dashboard/clients", icon: Users },
  { title: "التقييمات", url: "/dashboard/reviews", icon: Star },
  { title: "الحجوزات", url: "/dashboard/bookings", icon: Calendar },
  { title: "التحليلات", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "الإعدادات", url: "/dashboard/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar collapsible="icon" side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>القائمة</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink to={item.url} end className="hover:bg-sidebar-accent/50" activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium">
                      <item.icon className="ml-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/" className="text-muted-foreground hover:text-foreground">
                <LogOut className="ml-2 h-4 w-4" />
                {!collapsed && <span>تسجيل الخروج</span>}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
