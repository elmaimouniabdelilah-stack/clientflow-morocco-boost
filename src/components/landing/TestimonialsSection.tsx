import { motion } from "framer-motion";
import { Star } from "lucide-react";
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
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold text-primary mb-2">آراء عملائنا</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          ماذا يقول عملاؤنا؟
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-elevated)] transition-shadow"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-5">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
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
