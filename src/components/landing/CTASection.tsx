import { motion } from "framer-motion";
import { Star, ArrowLeft, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-24 bg-card" dir="rtl">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto"
      >
        <div className="absolute -inset-6 bg-gradient-to-r from-primary/8 via-secondary/8 to-primary/8 rounded-[2rem] blur-2xl" />
        <div className="relative gradient-primary rounded-3xl p-10 sm:p-14 text-center overflow-hidden">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm mx-auto flex items-center justify-center mb-6 ring-1 ring-white/20"
            >
              <Rocket className="h-8 w-8 text-white" />
            </motion.div>

            <div className="flex gap-1 justify-center mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-white/80 text-white/80" />
              ))}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              ابدأ اليوم وحوّل تقييماتك
              <br />
              إلى فرصة نمو 🚀
            </h2>
            <p className="text-white/75 mb-10 text-lg max-w-md mx-auto">
              تجربة مجانية لمدة 7 أيام. لا حاجة لبطاقة ائتمان.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-14 text-base font-bold shadow-xl shadow-black/10"
              asChild
            >
              <Link to="/signup">
                ابدأ مجاناً
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
