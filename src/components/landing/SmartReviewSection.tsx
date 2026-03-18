import { motion } from "framer-motion";
import { Star } from "lucide-react";

const SmartReviewSection = () => (
  <section className="py-20 bg-teal-light">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-sm font-semibold text-primary mb-2">كيف يعمل النظام؟</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          المساعدة الذكية للتقييمات
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-card rounded-2xl border border-border p-8 shadow-[var(--shadow-elevated)]">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground text-sm">العميل يقيّم تجربته:</p>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-10 w-10 fill-yellow-400 text-yellow-400 cursor-pointer hover:scale-110 transition-transform" />
              ))}
            </div>
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-sm text-foreground">⭐ 4-5 نجوم → يُوجَّه إلى Google Reviews تلقائيًا</p>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-destructive/5 border border-destructive/10">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <p className="text-sm text-foreground">⭐ 1-3 نجوم → يبقى التقييم خاصًا + إشعار لك</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SmartReviewSection;
