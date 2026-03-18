import { motion } from "framer-motion";
import { Star, Shield, TrendingUp, Smartphone, BarChart3, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "نظام فلترة التقييمات",
    desc: "التقييمات السلبية تبقى خاصة تُرسل لك فقط، والإيجابية تُنشر على Google.",
    color: "bg-destructive/8 text-destructive",
  },
  {
    icon: Star,
    title: "تحسين سمعة Google",
    desc: "زيّد تقييماتك الإيجابية على Google بشكل تلقائي ومستمر.",
    color: "bg-star/10 text-star",
  },
  {
    icon: TrendingUp,
    title: "زيادة عدد العملاء",
    desc: "تقييمات أكثر = ثقة أكبر = عملاء جدد كل يوم.",
    color: "bg-accent/8 text-accent",
  },
  {
    icon: Smartphone,
    title: "واجهة سهلة الاستخدام",
    desc: "لوحة تحكم بسيطة وواضحة تعمل على جميع الأجهزة.",
    color: "bg-primary/8 text-primary",
  },
  {
    icon: BarChart3,
    title: "تحليلات متقدمة",
    desc: "تتبع أداء تقييماتك ونمو عملائك بأرقام دقيقة.",
    color: "bg-secondary/8 text-secondary",
  },
  {
    icon: Zap,
    title: "إعداد في دقائق",
    desc: "سجّل حسابك واحصل على رمز QR جاهز خلال 5 دقائق.",
    color: "bg-primary/8 text-primary",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-background" dir="rtl">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-secondary/[0.06] border border-secondary/[0.12] rounded-full px-4 py-2 text-sm text-secondary font-medium mb-5">
          المميزات
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground">
          مميزات <span className="gradient-text">تجعل عملك يتفوق</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="group rounded-2xl bg-card border border-border/50 p-7 transition-all duration-300 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 hover:border-primary/15"
          >
            <div className={`inline-flex items-center justify-center rounded-xl ${f.color} w-12 h-12 mb-5`}>
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
