import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold font-display gradient-text">
        ClientFlow
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#features" className="hover:text-foreground transition-colors">المميزات</a>
        <a href="#" className="hover:text-foreground transition-colors">الأسعار</a>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/login">تسجيل الدخول</Link>
        </Button>
        <Button size="sm" className="gradient-primary text-primary-foreground" asChild>
          <Link to="/signup">ابدأ الآن</Link>
        </Button>
      </div>
    </div>
  </nav>
);

export default Navbar;
