import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import BottomNav from "@/components/dashboard/BottomNav";
import { Bell } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => (
  <SidebarProvider>
    <div className="min-h-screen flex w-full">
      <div className="hidden md:block">
        <AppSidebar />
      </div>
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="h-14 md:h-14 flex items-center justify-between border-b border-border/60 px-4 bg-card/80 backdrop-blur-xl sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <SidebarTrigger />
            </div>
            <div className="md:hidden w-8 h-8 rounded-xl gradient-primary flex items-center justify-center shadow-md">
              <span className="text-primary-foreground text-xs font-black">CF</span>
            </div>
            <span className="text-sm font-bold gradient-text">ClientFlow</span>
          </div>
          <button className="md:hidden relative w-9 h-9 rounded-xl bg-muted/60 flex items-center justify-center transition-colors active:bg-muted">
            <Bell className="h-[18px] w-[18px] text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent border-2 border-card" />
          </button>
        </header>
        <main className="flex-1 p-4 md:p-6 bg-background overflow-auto pb-24 md:pb-6">
          {children}
        </main>
      </div>
    </div>
    <BottomNav />
  </SidebarProvider>
);

export default DashboardLayout;
