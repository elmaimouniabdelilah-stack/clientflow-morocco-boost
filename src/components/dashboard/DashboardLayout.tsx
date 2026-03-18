import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import BottomNav from "@/components/dashboard/BottomNav";

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
        <header className="h-14 flex items-center border-b border-border px-4">
          <div className="hidden md:block">
            <SidebarTrigger />
          </div>
          <span className="ml-3 text-sm font-semibold font-display gradient-text">ClientFlow</span>
        </header>
        <main className="flex-1 p-4 md:p-6 bg-background overflow-auto pb-20 md:pb-6">
          {children}
        </main>
      </div>
    </div>
    <BottomNav />
  </SidebarProvider>
);

export default DashboardLayout;
