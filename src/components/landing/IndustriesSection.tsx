import { motion } from "framer-motion";
import { Utensils, Scissors, Stethoscope, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import salonImage from "@/assets/testimonial-salon.jpg";

const industries = [
  { icon: Utensils, title: "مطاعم ومقاهي", desc: "اجمع تقييمات من كل زبون بعد الوجبة." },
  { icon: Scissors, title: "صالونات تجميل", desc: "حوّل كل عميلة راضية إلى تقييم 5 نجوم." },
  { icon: Stethoscope, title: "عيادات ومراكز طبية", desc: "عزّز سمعتك على الإنترنت بتقييمات حقيقية." },
  { icon: Briefcase, title: "مستشارون ومستقلون", desc: "ابنِ ثقة عملائك الجدد بتقييمات سابقة." },
];

const IndustriesSection = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold text-primary mb-2">مصمّم لك</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          لكل نشاط تجاري
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        {/* Image cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]"
        >
          <img src={heroImage} alt="مطعم مغربي" className="w-full h-48 object-cover" />
          <div className="bg-card p-5 border border-border border-t-0 rounded-b-2xl">
            <p className="font-semibold text-foreground">مطاعم ومقاهي</p>
            <p className="text-sm text-muted-foreground mt-1">اجمع تقييمات من كل زبون بعد الوجبة</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]"
        >
          <img src={salonImage} alt="صالون تجميل" className="w-full h-48 object-cover" />
          <div className="bg-card p-5 border border-border border-t-0 rounded-b-2xl">
            <p className="font-semibold text-foreground">صالونات تجميل</p>
            <p className="text-sm text-muted-foreground mt-1">حوّل كل عميلة راضية إلى تقييم 5 نجوم</p>
          </div>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 bg-card rounded-xl border border-border p-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <ind.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium text-foreground">{ind.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
