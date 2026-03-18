import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "كيف يعمل", href: "#steps" },
  { label: "المميزات", href: "#features" },
  { label: "الأسعار", href: "#pricing" },
  { label: "الأسئلة", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-3">
        <div className="max-w-6xl mx-auto bg-card/80 backdrop-blur-xl rounded-2xl border border-border/60 shadow-sm px-5 h-14 flex items-center justify-between">
          <Link to="/" className="text-lg font-extrabold gradient-text tracking-tight">
            ClientFlow
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-all"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">تسجيل الدخول</Link>
            </Button>
            <Button size="sm" className="gradient-primary text-white rounded-full px-5 shadow-md" asChild>
              <Link to="/signup">ابدأ مجاناً</Link>
            </Button>
          </div>

          <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2"
          >
            <div className="bg-card/95 backdrop-blur-xl rounded-2xl border border-border/60 shadow-lg p-4 space-y-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-foreground rounded-xl hover:bg-muted transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 border-t border-border flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link to="/login">تسجيل الدخول</Link>
                </Button>
                <Button size="sm" className="flex-1 gradient-primary text-white" asChild>
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
