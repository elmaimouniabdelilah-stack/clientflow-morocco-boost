import { motion } from "framer-motion";
import { Star, ArrowUp, ArrowDown, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";

const SmartReviewSection = () => {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(5);

  const currentRating = hoveredStar || selectedStar;
  const isPositive = currentRating >= 4;

  return (
    <section className="py-24 bg-card" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual - interactive star card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/[0.04] to-secondary/[0.04] rounded-full blur-3xl" />
              <div className="relative bg-card rounded-3xl border border-border/50 p-8 shadow-[var(--shadow-elevated)]">
                <p className="text-center text-foreground font-bold text-lg mb-2">قيّم تجربتك</p>
                <p className="text-center text-muted-foreground text-sm mb-6">اختر عدد النجوم</p>

                {/* Interactive stars */}
                <div className="flex gap-2 justify-center mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={() => setHoveredStar(i)}
                      onMouseLeave={() => setHoveredStar(0)}
                      onClick={() => setSelectedStar(i)}
                      className="cursor-pointer focus:outline-none"
                    >
                      <Star
                        className={`h-11 w-11 transition-all duration-200 ${
                          i <= currentRating
                            ? "fill-star text-star drop-shadow-sm"
                            : "text-border fill-transparent"
                        }`}
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border/60 mb-6" />

                {/* Result */}
                <motion.div
                  key={isPositive ? "positive" : "negative"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <p className="text-xs text-muted-foreground mb-3">النتيجة:</p>
                  {isPositive ? (
                    <div className="inline-flex items-center gap-2 bg-accent/8 border border-accent/15 text-accent rounded-full px-5 py-2.5 text-sm font-bold">
                      <ThumbsUp className="h-4 w-4" />
                      يُوجَّه إلى Google Reviews ✓
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 bg-destructive/8 border border-destructive/15 text-destructive rounded-full px-5 py-2.5 text-sm font-bold">
                      <ThumbsDown className="h-4 w-4" />
                      يبقى خاصاً + إشعار لك
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-accent/[0.06] border border-accent/[0.12] rounded-full px-4 py-2 text-sm text-accent font-medium mb-5">
              المعالجة الذكية
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-5">
              المعالجة الذكية <span className="gradient-text">للتقييمات</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              العميل يقيّم تجربته، والنظام يوجّه التقييمات الإيجابية إلى Google تلقائيًا ويحتفظ بالسلبية داخليًا لمساعدتك على التحسين.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-accent/[0.04] border border-accent/10">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowUp className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground">⭐ 4-5 نجوم</p>
                  <p className="text-sm text-muted-foreground mt-1">يُوجَّه العميل مباشرة إلى Google Reviews</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-destructive/[0.04] border border-destructive/10">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowDown className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <p className="font-bold text-foreground">⭐ 1-3 نجوم</p>
                  <p className="text-sm text-muted-foreground mt-1">يبقى التقييم خاصاً وتتلقى إشعاراً فورياً</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartReviewSection;
