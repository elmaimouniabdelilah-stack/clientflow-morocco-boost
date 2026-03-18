import { motion } from "framer-motion";
import { Star, Shield, BarChart3, MessageCircle, QrCode, Zap } from "lucide-react";

const features = [
  { icon: Star, title: "تقييمات ذكية", desc: "توجيه تلقائي للعملاء الراضين إلى Google Reviews.", color: "bg-star/10 text-star" },
  { icon: Shield, title: "حماية السمعة", desc: "التقييمات السلبية تبقى خاصة ولا تُنشر.", color: "bg-destructive/10 text-destructive" },
  { icon: BarChart3, title: "تحليلات مفصّلة", desc: "تتبع أداء التقييمات والعملاء بنظرة واحدة.", color: "bg-primary/10 text-primary" },
  { icon: MessageCircle, title: "تكامل واتساب", desc: "أرسل طلبات التقييم مباشرة عبر واتساب.", color: "bg-accent/10 text-accent" },
  { icon: QrCode, title: "رمز QR مخصص", desc: "رمز QR فريد لمشروعك يطبع أو يُعرض.", color: "bg-secondary/10 text-secondary" },
  { icon: Zap, title: "إعداد في دقائق", desc: "لا تحتاج خبرة تقنية — جاهز خلال 5 دقائق.", color: "bg-primary/10 text-primary" },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-secondary/8 border border-secondary/15 rounded-full px-4 py-1.5 text-sm text-secondary font-medium mb-4">
          المميزات
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          كل ما تحتاجه <span className="gradient-text">في مكان واحد</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-2xl bg-card border border-border/60 p-6 transition-all duration-300 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 hover:border-primary/20"
          >
            <div className={`inline-flex items-center justify-center rounded-xl ${f.color} p-3 mb-4`}>
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
