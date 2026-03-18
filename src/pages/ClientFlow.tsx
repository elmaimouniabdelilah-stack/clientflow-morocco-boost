import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, Star } from "lucide-react";

const ClientFlow = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get("type");

  useEffect(() => {
    if (type === "booking") {
      navigate("/book", { replace: true });
    } else if (type === "review") {
      navigate("/review", { replace: true });
    }
  }, [type, navigate]);

  if (type === "booking" || type === "review") {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
            className="text-5xl mb-3"
          >
            👋
          </motion.div>
          <h1 className="text-2xl font-bold text-foreground">مرحبًا بك!</h1>
          <p className="text-sm text-muted-foreground mt-1">كيف يمكننا مساعدتك؟</p>
        </div>

        <div className="flex flex-col gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/book")}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elevated)] text-right"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl gradient-primary">
                <CalendarDays className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-foreground">حجز موعد</h2>
                <p className="text-xs text-muted-foreground mt-0.5">احجز موعدك بسهولة وسرعة</p>
              </div>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/review")}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elevated)] text-right"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10">
                <Star className="h-7 w-7 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-foreground">قيّم تجربتك</h2>
                <p className="text-xs text-muted-foreground mt-0.5">رأيك يهمنا لتحسين خدماتنا</p>
              </div>
            </div>
          </motion.button>
        </div>

        <p className="text-center text-[10px] text-muted-foreground/50 mt-10">
          مدعوم من <span className="font-semibold">ClientFlow</span>
        </p>
      </motion.div>
    </div>
  );
};

export default ClientFlow;
