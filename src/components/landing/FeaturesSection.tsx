import { motion } from "framer-motion";
import { Star, Shield, BarChart3, MessageCircle, QrCode, Zap } from "lucide-react";

const features = [
  { icon: Star, title: "تقييمات ذكية", desc: "توجيه تلقائي للعملاء الراضين إلى Google Reviews." },
  { icon: Shield, title: "حماية السمعة", desc: "التقييمات السلبية تبقى خاصة ولا تُنشر." },
  { icon: BarChart3, title: "تحليلات مفصّلة", desc: "تتبع أداء التقييمات والعملاء بنظرة واحدة." },
  { icon: MessageCircle, title: "تكامل واتساب", desc: "أرسل طلبات التقييم مباشرة عبر واتساب." },
  { icon: QrCode, title: "رمز QR مخصص", desc: "رمز QR فريد لمشروعك يطبع أو يُعرض." },
  { icon: Zap, title: "إعداد في دقائق", desc: "لا تحتاج خبرة تقنية — جاهز خلال 5 دقائق." },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold text-primary mb-2">المميزات</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          مميزات تجعلك تتفوق
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 mb-4">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
