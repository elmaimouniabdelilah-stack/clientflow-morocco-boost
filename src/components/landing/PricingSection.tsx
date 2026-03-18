import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "مجاني",
    price: "0",
    desc: "للتجربة",
    features: ["50 تقييم/شهر", "رمز QR واحد", "لوحة تحكم أساسية"],
    cta: "ابدأ مجاناً",
    featured: false,
  },
  {
    name: "احترافي",
    price: "199",
    desc: "للمشاريع النشطة",
    features: ["تقييمات غير محدودة", "رموز QR متعددة", "تكامل واتساب", "تحليلات متقدمة", "دعم أولوي"],
    cta: "ابدأ تجربتك",
    featured: true,
  },
  {
    name: "مؤسسة",
    price: "499",
    desc: "للفروع المتعددة",
    features: ["كل مميزات الاحترافي", "فروع غير محدودة", "API مخصص", "مدير حساب مخصص"],
    cta: "تواصل معنا",
    featured: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold text-primary mb-2">الأسعار</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          خطط تناسب حجم عملك
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl border p-6 ${
              plan.featured
                ? "border-primary bg-primary/5 shadow-[var(--shadow-elevated)] scale-105"
                : "border-border bg-card"
            }`}
          >
            {plan.featured && (
              <div className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                الأكثر شعبية
              </div>
            )}
            <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold text-foreground">{plan.price}</span>
              <span className="text-sm text-muted-foreground mr-1">درهم/شهر</span>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              className={`w-full rounded-full ${
                plan.featured
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              }`}
              asChild
            >
              <Link to="/signup">{plan.cta}</Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
