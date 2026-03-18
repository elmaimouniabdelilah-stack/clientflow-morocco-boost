import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "كيف يعمل", href: "#steps" },
  { label: "المميزات", href: "#features" },
  { label: "الأسعار", href: "#pricing" },
  { label: "الأسئلة", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={`mx-auto transition-all duration-300 ${scrolled ? "px-0" : "px-4 pt-3"}`}>
        <div className={`max-w-6xl mx-auto transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-sm px-6 rounded-none max-w-full"
            : "bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 shadow-sm px-5"
        } h-14 flex items-center justify-between`}>
          <Link to="/" className="text-lg font-extrabold gradient-text tracking-tight">
            ClientFlow
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/60 transition-all"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2.5">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
              <Link to="/login">تسجيل الدخول</Link>
            </Button>
            <Button size="sm" className="gradient-primary text-white rounded-full px-6 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-all" asChild>
              <Link to="/signup">ابدأ مجاناً</Link>
            </Button>
          </div>

          <button className="md:hidden p-1.5 rounded-lg hover:bg-muted transition-colors" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2"
          >
            <div className="bg-card/98 backdrop-blur-xl rounded-2xl border border-border/50 shadow-xl p-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-foreground rounded-xl hover:bg-muted/60 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-border/50 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 rounded-xl h-11" asChild>
                  <Link to="/login">تسجيل الدخول</Link>
                </Button>
                <Button size="sm" className="flex-1 gradient-primary text-white rounded-xl h-11" asChild>
                  <Link to="/signup">ابدأ مجاناً</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
