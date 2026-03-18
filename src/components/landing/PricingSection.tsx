import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "أساسي",
    price: "0",
    desc: "للتجربة والبداية",
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
    name: "بريميوم",
    price: "499",
    desc: "للفروع المتعددة",
    features: ["كل مميزات الاحترافي", "فروع غير محدودة", "API مخصص", "مدير حساب مخصص"],
    cta: "تواصل معنا",
    featured: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 bg-background" dir="rtl">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/[0.12] rounded-full px-4 py-2 text-sm text-primary font-medium mb-5">
          الأسعار
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground">
          خطط تناسب <span className="gradient-text">حجم عملك</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
              plan.featured
                ? "bg-gradient-to-b from-primary/[0.04] to-secondary/[0.04] border-2 border-primary/25 shadow-[var(--shadow-elevated)] scale-[1.03] z-10"
                : "bg-card border border-border/50 hover:border-primary/15 hover:shadow-sm"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 gradient-primary text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md shadow-primary/20">
                <Sparkles className="h-3.5 w-3.5" />
                الأكثر شعبية
              </div>
            )}
            <h3 className="text-xl font-extrabold text-foreground">{plan.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
            <div className="mt-6 mb-8">
              <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
              <span className="text-sm text-muted-foreground mr-1">درهم/شهر</span>
            </div>
            <ul className="space-y-3.5 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                    plan.featured ? "bg-primary/10" : "bg-muted"
                  }`}>
                    <Check className={`h-3 w-3 ${plan.featured ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className={`w-full rounded-full h-14 text-base font-semibold ${
                plan.featured
                  ? "gradient-primary text-white shadow-md shadow-primary/20"
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
