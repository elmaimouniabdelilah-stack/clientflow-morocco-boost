import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold font-display text-primary">
        ClientFlow
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#steps" className="hover:text-primary transition-colors">كيف يعمل</a>
        <a href="#features" className="hover:text-primary transition-colors">المميزات</a>
        <a href="#pricing" className="hover:text-primary transition-colors">الأسعار</a>
        <a href="#faq" className="hover:text-primary transition-colors">الأسئلة</a>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
          <Link to="/login">تسجيل الدخول</Link>
        </Button>
        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5" asChild>
          <Link to="/signup">ابدأ مجاناً</Link>
        </Button>
      </div>
    </div>
  </nav>
);

export default Navbar;
