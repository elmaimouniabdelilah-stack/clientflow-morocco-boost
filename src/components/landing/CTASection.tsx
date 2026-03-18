import { motion } from "framer-motion";
import { Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-20 bg-teal-section">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="flex gap-1 justify-center mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-6 w-6 fill-star text-star" />
          ))}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          ابدأ اليوم وحوّل كل زيارة إلى فرصة نمو
        </h2>
        <p className="text-white/70 mb-8">
          تجربة مجانية لمدة 7 أيام. لا حاجة لبطاقة ائتمان.
        </p>
        <Button
          size="lg"
          className="gradient-primary text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg"
          asChild
        >
          <Link to="/signup">ابدأ تجربتك المجانية <ArrowLeft className="mr-2 h-4 w-4" /></Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
