import { motion } from "framer-motion";
import { QrCode, MessageCircle, Star } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: QrCode,
    title: "يمسح الكود",
    desc: "العميل يمسح رمز QR أو يضغط على الرابط بعد الخدمة.",
  },
  {
    num: "2",
    icon: MessageCircle,
    title: "يقيّم التجربة",
    desc: "يختار تقييمه بسهولة. إذا كان راضيًا يُوجَّه لـ Google تلقائيًا.",
  },
  {
    num: "3",
    icon: Star,
    title: "تحصل على تقييمات",
    desc: "التقييمات الإيجابية تُنشر على Google، والسلبية تبقى خاصة.",
  },
];

const StepsSection = () => (
  <section id="steps" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold text-primary mb-2">كيف يعمل؟</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          ثلاث خطوات فقط
        </h2>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm">
          نظام بسيط وفعّال يحوّل كل عميل راضٍ إلى تقييم حقيقي
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-5">
              <step.icon className="h-7 w-7 text-primary" />
            </div>
            <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-3">
              {step.num}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
