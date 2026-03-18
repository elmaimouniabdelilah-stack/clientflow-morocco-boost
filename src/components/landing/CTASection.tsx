import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-24 gradient-primary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          مستعد لتنمية مشروعك؟
        </h2>
        <p className="text-primary-foreground/80 mb-8">
          ابدأ تجربتك المجانية لمدة 7 أيام. لا حاجة لبطاقة ائتمان. ألغِ في أي وقت.
        </p>
        <Button size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90 h-12 px-8 text-base" asChild>
          <Link to="/signup">ابدأ تجربتك المجانية <ArrowLeft className="mr-2 h-4 w-4" /></Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
