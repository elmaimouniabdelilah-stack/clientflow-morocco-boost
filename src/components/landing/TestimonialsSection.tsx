import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import owner1 from "@/assets/testimonial-owner1.jpg";
import owner2 from "@/assets/testimonial-owner2.jpg";
import owner3 from "@/assets/testimonial-owner3.jpg";

const testimonials = [
  {
    name: "يوسف ب.",
    role: "صاحب مطعم، الدار البيضاء",
    text: "ClientFlow ضاعف تقييماتنا على Google في شهرين فقط. نظام التقييمات الذكي عبقري!",
    rating: 5,
    avatar: owner1,
  },
  {
    name: "فاطمة ز.",
    role: "صاحبة صالون، مراكش",
    text: "كنت أفقد تتبّع المواعيد يوميًا. الآن كل شيء منظم وعملائي يتلقون تذكيرات تلقائية.",
    rating: 5,
    avatar: owner2,
  },
  {
    name: "أمين ك.",
    role: "مستشار مستقل، الرباط",
    text: "لوحة التحليلات تريني بالضبط أين ينمو مشروعي. كأن معي مدرب أعمال في جيبي.",
    rating: 5,
    avatar: owner3,
  },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-background" dir="rtl">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-star/10 border border-star/15 rounded-full px-4 py-2 text-sm text-star font-medium mb-5">
          <Star className="h-3.5 w-3.5 fill-current" />
          آراء عملائنا
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground">
          ماذا يقول <span className="gradient-text">عملاؤنا</span>؟
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-2xl bg-card border border-border/50 p-7 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all duration-300"
          >
            <Quote className="h-10 w-10 text-primary/[0.06] absolute top-5 left-5" />
            <div className="flex gap-0.5 mb-5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-star text-star" />
              ))}
            </div>
            <p className="text-[15px] text-foreground leading-relaxed mb-6 relative z-10">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-5 border-t border-border/50">
              <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/10" />
              <div>
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
