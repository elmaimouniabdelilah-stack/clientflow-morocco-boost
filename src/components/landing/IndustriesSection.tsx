import { motion } from "framer-motion";
import { Utensils, Scissors, Stethoscope, Store, Star } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import salonImage from "@/assets/testimonial-salon.jpg";

const industries = [
  { icon: Utensils, title: "مطاعم ومقاهي", desc: "اجمع تقييمات من كل زبون بعد الوجبة", color: "bg-star/10 text-star" },
  { icon: Scissors, title: "صالونات تجميل", desc: "حوّل كل عميلة راضية إلى تقييم 5 نجوم", color: "bg-secondary/10 text-secondary" },
  { icon: Stethoscope, title: "عيادات ومراكز", desc: "عزّز سمعتك على الإنترنت بتقييمات حقيقية", color: "bg-accent/10 text-accent" },
  { icon: Store, title: "متاجر ومحلات", desc: "ابنِ ثقة عملائك الجدد بتقييمات سابقة", color: "bg-primary/10 text-primary" },
];

const IndustriesSection = () => (
  <section className="py-24 bg-card" dir="rtl">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-secondary/[0.06] border border-secondary/[0.12] rounded-full px-4 py-2 text-sm text-secondary font-medium mb-5">
          مصمّم لك
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground">
          لكل <span className="gradient-text">نشاط تجاري</span>
        </h2>
      </motion.div>

      {/* Image cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
        {[
          { img: heroImage, alt: "مطعم مغربي", title: "مطاعم ومقاهي", desc: "اجمع تقييمات بعد كل وجبة بكل سهولة", stars: 5 },
          { img: salonImage, alt: "صالون تجميل", title: "صالونات تجميل", desc: "حوّل كل عميلة راضية إلى تقييم 5 نجوم", stars: 5 },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="group rounded-2xl overflow-hidden bg-background border border-border/50 shadow-sm hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
          >
            <div className="overflow-hidden relative">
              <img src={card.img} alt={card.alt} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-3 right-3 flex gap-0.5 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                {Array.from({ length: card.stars }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-star text-star" />
                ))}
              </div>
            </div>
            <div className="p-6">
              <p className="font-bold text-foreground text-lg">{card.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Industry cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center bg-background rounded-2xl border border-border/50 p-6 hover:border-primary/15 hover:shadow-sm transition-all"
          >
            <div className={`w-14 h-14 rounded-2xl ${ind.color} flex items-center justify-center mx-auto mb-4`}>
              <ind.icon className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold text-foreground">{ind.title}</p>
            <p className="text-xs text-muted-foreground mt-1">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
