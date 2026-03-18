import { motion } from "framer-motion";
import { Star, ArrowUp, ArrowDown } from "lucide-react";

const SmartReviewSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1"
        >
          <div className="inline-flex items-center gap-2 bg-accent/8 border border-accent/15 rounded-full px-4 py-1.5 text-sm text-accent font-medium mb-4">
            النظام الذكي
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-4">
            فلترة <span className="gradient-text">تلقائية</span> للتقييمات
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            العميل يقيّم تجربته، والنظام يوجّه التقييمات الإيجابية إلى Google تلقائيًا ويحتفظ بالسلبية داخليًا لمساعدتك على التحسين.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/5 border border-accent/15">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <ArrowUp className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">⭐ 4-5 نجوم</p>
                <p className="text-sm text-muted-foreground">يُوجَّه إلى Google Reviews تلقائيًا</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/15">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <ArrowDown className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">⭐ 1-3 نجوم</p>
                <p className="text-sm text-muted-foreground">يبقى خاصًا + تتلقى إشعار فوري</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative bg-card rounded-3xl border border-border p-8 shadow-[var(--shadow-elevated)] max-w-xs">
              <p className="text-center text-muted-foreground text-sm mb-4">قيّم تجربتك</p>
              <div className="flex gap-2 justify-center mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    className="cursor-pointer"
                  >
                    <Star className="h-10 w-10 fill-star text-star transition-transform" />
                  </motion.div>
                ))}
              </div>
              <div className="h-px bg-border my-4" />
              <div className="space-y-2 text-center">
                <p className="text-xs text-muted-foreground">نتيجة التقييم</p>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-semibold">
                  <ArrowUp className="h-4 w-4" />
                  تم التوجيه إلى Google
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SmartReviewSection;
