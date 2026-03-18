import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ReviewFunnel from "./pages/ReviewFunnel";
import ClientFlow from "./pages/ClientFlow";
import ReviewsDashboard from "./pages/ReviewsDashboard";
import ClientsPage from "./pages/ClientsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import BookingsPage from "./pages/BookingsPage";
import PublicBooking from "./pages/PublicBooking";
import SettingsPage from "./pages/SettingsPage";
import ReactivationPage from "./pages/ReactivationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/reviews" element={<ReviewsDashboard />} />
          <Route path="/dashboard/clients" element={<ClientsPage />} />
          <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
          <Route path="/dashboard/bookings" element={<BookingsPage />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
          <Route path="/dashboard/reactivation" element={<ReactivationPage />} />
          <Route path="/review" element={<ReviewFunnel />} />
          <Route path="/client-flow" element={<ClientFlow />} />
          <Route path="/book" element={<PublicBooking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
