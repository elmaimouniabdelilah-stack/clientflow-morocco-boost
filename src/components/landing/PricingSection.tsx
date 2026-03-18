import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
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
  <section id="pricing" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-4">
          الأسعار
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          خطط تناسب <span className="gradient-text">حجم عملك</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
              plan.featured
                ? "bg-gradient-to-b from-primary/5 to-secondary/5 border-2 border-primary/30 shadow-[var(--shadow-elevated)] scale-[1.03] z-10"
                : "bg-background border border-border/60 hover:border-primary/20 hover:shadow-sm"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 gradient-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                <Sparkles className="h-3 w-3" />
                الأكثر شعبية
              </div>
            )}
            <h3 className="text-xl font-extrabold text-foreground">{plan.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
            <div className="mt-5 mb-6">
              <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
              <span className="text-sm text-muted-foreground mr-1">درهم/شهر</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? "bg-primary/10" : "bg-muted"}`}>
                    <Check className={`h-3 w-3 ${plan.featured ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <Button
              className={`w-full rounded-xl h-11 font-semibold ${
                plan.featured
                  ? "gradient-primary text-white shadow-md"
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
