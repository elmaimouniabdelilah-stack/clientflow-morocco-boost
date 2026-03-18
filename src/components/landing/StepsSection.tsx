import { motion } from "framer-motion";
import { QrCode, MessageCircle, Star, ArrowLeft } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: QrCode,
    title: "يمسح الكود",
    desc: "العميل يمسح رمز QR أو يضغط على الرابط بعد الخدمة.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    num: "02",
    icon: MessageCircle,
    title: "يقيّم التجربة",
    desc: "يختار تقييمه بسهولة. إذا كان راضيًا يُوجَّه لـ Google تلقائيًا.",
    gradient: "from-secondary/10 to-secondary/5",
  },
  {
    num: "03",
    icon: Star,
    title: "تحصل على تقييمات",
    desc: "التقييمات الإيجابية تُنشر على Google، والسلبية تبقى خاصة.",
    gradient: "from-accent/10 to-accent/5",
  },
];

const StepsSection = () => (
  <section id="steps" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-4">
          كيف يعمل؟
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          ثلاث خطوات <span className="gradient-text">بسيطة</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">
          نظام بسيط وفعّال يحوّل كل عميل راضٍ إلى تقييم حقيقي
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative group"
          >
            <div className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-8 border border-border/50 h-full transition-all duration-300 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1`}>
              <span className="text-5xl font-extrabold text-foreground/5 absolute top-4 left-4">
                {step.num}
              </span>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-card shadow-sm border border-border/60 flex items-center justify-center mb-5">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
            {i < 2 && (
              <div className="hidden md:flex absolute top-1/2 -left-3 -translate-y-1/2 z-20">
                <ArrowLeft className="h-5 w-5 text-border" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
