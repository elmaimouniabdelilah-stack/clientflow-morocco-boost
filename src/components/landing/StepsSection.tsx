import { motion } from "framer-motion";
import { Send, Filter, Star, ArrowLeft } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Send,
    title: "أرسل رابط التقييم",
    desc: "أرسل رابط أو رمز QR لعملائك بعد كل خدمة — عبر واتساب أو مباشرة.",
    color: "from-primary/10 to-primary/5",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    num: "02",
    icon: Filter,
    title: "النظام يفلتر تلقائياً",
    desc: "التقييمات الإيجابية (4-5 نجوم) تُوجَّه لـ Google، والسلبية تبقى خاصة.",
    color: "from-secondary/10 to-secondary/5",
    iconBg: "bg-secondary/10 text-secondary",
  },
  {
    num: "03",
    icon: Star,
    title: "تقييمات إيجابية على Google",
    desc: "شاهد تقييماتك تنمو على Google وسمعتك تتحسن تلقائياً.",
    color: "from-accent/10 to-accent/5",
    iconBg: "bg-accent/10 text-accent",
  },
];

const StepsSection = () => (
  <section id="steps" className="py-24 bg-card" dir="rtl">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/[0.12] rounded-full px-4 py-2 text-sm text-primary font-medium mb-5">
          كيف يعمل؟
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground">
          ثلاث خطوات <span className="gradient-text">فقط</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-base">
          نظام بسيط وفعّال يحوّل كل عميل راضٍ إلى تقييم حقيقي على Google
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
            <div className={`relative bg-gradient-to-br ${step.color} rounded-2xl p-8 border border-border/40 h-full transition-all duration-300 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1`}>
              {/* Step number watermark */}
              <span className="absolute top-4 left-4 text-6xl font-black text-foreground/[0.03] leading-none select-none">
                {step.num}
              </span>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center mb-6 shadow-sm`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>

            {/* Connector arrow */}
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
