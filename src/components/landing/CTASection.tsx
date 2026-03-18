import { motion } from "framer-motion";
import { Star, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl blur-2xl" />
        <div className="relative gradient-primary rounded-3xl p-12 text-center overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

          <div className="relative z-10">
            <div className="flex gap-1 justify-center mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-6 w-6 fill-white/90 text-white/90" />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              ابدأ اليوم وحوّل كل زيارة
              <br />
              إلى فرصة نمو
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              تجربة مجانية لمدة 7 أيام. لا حاجة لبطاقة ائتمان.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-13 text-base font-bold shadow-xl"
              asChild
            >
              <Link to="/signup">
                ابدأ تجربتك المجانية
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
