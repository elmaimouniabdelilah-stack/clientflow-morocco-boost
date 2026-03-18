import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
          Ready to grow your business?
        </h2>
        <p className="text-primary-foreground/80 mb-8">
          Start your 7-day free trial. No credit card required. Cancel anytime.
        </p>
        <Button size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90 h-12 px-8 text-base" asChild>
          <Link to="/signup">Start Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
