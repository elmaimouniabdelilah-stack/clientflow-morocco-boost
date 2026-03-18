import { motion } from "framer-motion";
import { Utensils, Scissors, Stethoscope, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import salonImage from "@/assets/testimonial-salon.jpg";

const industries = [
  { icon: Utensils, title: "مطاعم ومقاهي", desc: "اجمع تقييمات من كل زبون بعد الوجبة." },
  { icon: Scissors, title: "صالونات تجميل", desc: "حوّل كل عميلة راضية إلى تقييم 5 نجوم." },
  { icon: Stethoscope, title: "عيادات ومراكز", desc: "عزّز سمعتك على الإنترنت بتقييمات حقيقية." },
  { icon: Briefcase, title: "مستشارون", desc: "ابنِ ثقة عملائك الجدد بتقييمات سابقة." },
];

const IndustriesSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-secondary/8 border border-secondary/15 rounded-full px-4 py-1.5 text-sm text-secondary font-medium mb-4">
          مصمّم لك
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          لكل <span className="gradient-text">نشاط تجاري</span>
        </h2>
      </motion.div>

      {/* Image cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
        {[
          { img: heroImage, alt: "مطعم مغربي", title: "مطاعم ومقاهي", desc: "اجمع تقييمات من كل زبون بعد الوجبة" },
          { img: salonImage, alt: "صالون تجميل", title: "صالونات تجميل", desc: "حوّل كل عميلة راضية إلى تقييم 5 نجوم" },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-2xl overflow-hidden bg-card border border-border/60 shadow-sm hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img src={card.img} alt={card.alt} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <p className="font-bold text-foreground">{card.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Small cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 bg-background rounded-xl border border-border/60 p-4 hover:border-primary/20 hover:shadow-sm transition-all"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <ind.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">{ind.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
