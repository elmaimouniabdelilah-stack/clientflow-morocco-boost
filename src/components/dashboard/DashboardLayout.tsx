import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => (
  <SidebarProvider>
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-14 flex items-center border-b border-border px-4">
          <SidebarTrigger />
          <span className="ml-3 text-sm font-semibold font-display gradient-text">ClientFlow</span>
        </header>
        <main className="flex-1 p-6 bg-background overflow-auto">
          {children}
        </main>
      </div>
    </div>
  </SidebarProvider>
);

export default DashboardLayout;
