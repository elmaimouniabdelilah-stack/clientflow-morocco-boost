import { motion } from "framer-motion";
import { ArrowLeft, Star, CheckCircle2, Sparkles, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const floatingCards = [
  { icon: Star, text: "تقييم 5 نجوم جديد!", color: "text-star", delay: 1.2 },
  { icon: TrendingUp, text: "+23% هذا الشهر", color: "text-accent", delay: 1.6 },
  { icon: Users, text: "1,247 عميل نشط", color: "text-primary", delay: 2.0 },
];

const HeroSection = () => (
  <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
    {/* Background */}
    <div className="absolute inset-0 bg-background" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

    <div className="container relative z-10 mx-auto px-4">
      {/* Centered content */}
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-8"
          >
            <Sparkles className="h-4 w-4" />
            +2,500 مشروع يستخدم ClientFlow
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
            حوّل رضا عملائك إلى
            <br />
            <span className="gradient-text">تقييمات Google</span>
            {" "}أكثر
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            نظام ذكي يجمع تقييمات حقيقية من عملائك ويوجّههم مباشرة إلى Google — بسهولة وبدون تعقيد.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="gradient-primary text-white rounded-full px-8 h-13 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              asChild
            >
              <Link to="/signup">
                ابدأ تجربتك المجانية
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-13 text-base border-border/60"
              asChild
            >
              <a href="#steps">شاهد كيف يعمل ←</a>
            </Button>
          </div>

          {/* Trust */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {["بدون بطاقة ائتمان", "إعداد في 5 دقائق", "إلغاء في أي وقت"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Phone mockup - centered below */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative flex justify-center"
        >
          {/* Floating notification cards */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.text}
              initial={{ opacity: 0, x: i === 1 ? 30 : -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: card.delay, type: "spring", stiffness: 100 }}
              className={`absolute hidden lg:flex items-center gap-2 bg-card rounded-xl border border-border px-4 py-2.5 shadow-[var(--shadow-elevated)] z-20 ${
                i === 0 ? "-right-12 top-8" : i === 1 ? "-left-16 top-24" : "-right-8 bottom-16"
              }`}
            >
              <card.icon className={`h-4 w-4 ${card.color} ${i === 0 ? "fill-star" : ""}`} />
              <span className="text-xs font-semibold text-foreground whitespace-nowrap">{card.text}</span>
            </motion.div>
          ))}

          {/* Phone */}
          <div className="relative w-[280px] sm:w-[300px]">
            <div className="absolute -inset-12 bg-gradient-to-b from-primary/8 to-secondary/8 rounded-full blur-3xl" />
            <div className="relative bg-foreground rounded-[2.5rem] p-3 shadow-2xl shadow-black/20">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-b-2xl z-10" />
              <div className="gradient-primary rounded-[2rem] overflow-hidden pt-8 pb-6 px-5 min-h-[440px] flex flex-col">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 mx-auto flex items-center justify-center mb-3">
                    <Star className="h-7 w-7 text-star fill-star" />
                  </div>
                  <p className="text-white font-bold text-lg">كيف كانت تجربتك؟</p>
                  <p className="text-white/50 text-xs mt-1">نقدّر رأيك</p>
                </div>

                <div className="flex gap-2 justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                    >
                      <Star className="h-9 w-9 fill-star text-star drop-shadow-sm" />
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-2.5 flex-1">
                  {[
                    { label: "ممتازة 😍", active: true },
                    { label: "جيدة 😊", active: false },
                    { label: "عادية 😐", active: false },
                  ].map((opt) => (
                    <div
                      key={opt.label}
                      className={`rounded-xl py-3 px-4 text-center text-sm font-medium transition-all ${
                        opt.active
                          ? "bg-white text-primary shadow-md"
                          : "bg-white/10 text-white/80"
                      }`}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>

                <div className="mt-4 bg-white rounded-xl py-2.5 text-center">
                  <span className="text-primary font-semibold text-sm">إرسال التقييم</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-3 max-w-lg mx-auto"
        >
          {[
            { value: "+2,500", label: "مشروع نشط" },
            { value: "+50K", label: "تقييم تم جمعه" },
            { value: "94%", label: "نسبة الرضا" },
          ].map((stat, i) => (
            <div key={stat.label} className={`text-center py-3 ${i !== 2 ? "border-l border-border" : ""}`}>
              <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
