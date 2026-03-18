import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "خسارة العملاء", desc: "لا يوجد نظام لتتبع عملائك والحفاظ عليهم — يذهبون ولا يعودون أبدًا." },
  { icon: TrendingDown, title: "تقييمات سلبية", desc: "التقييمات السلبية تُنشر علنيًا بينما العملاء السعداء لا يتركون أي تقييم." },
  { icon: Clock, title: "فوضى المواعيد", desc: "مواعيد ضائعة، حجوزات مزدوجة، وعدم حضور — تكلفك أموالًا كل يوم." },
];

const ProblemSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-destructive mb-2">المشكلة</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          إدارة مشروعك لا ينبغي أن تكون بهذه الصعوبة
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-destructive/10 bg-destructive/5 p-6"
          >
            <p.icon className="h-8 w-8 text-destructive mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
