import { motion } from "framer-motion";
import { ArrowLeft, Star, CheckCircle2, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative overflow-hidden pt-28 pb-8 lg:pt-36 lg:pb-16" dir="rtl">
    {/* Background effects */}
    <div className="absolute inset-0 bg-background" />
    <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[100px]" />
    <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-secondary/[0.04] rounded-full blur-[100px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-br from-primary/[0.02] to-secondary/[0.02] rounded-full blur-[80px]" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text content - Right side (RTL) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-right"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/[0.12] rounded-full px-4 py-2 text-sm font-medium text-primary mb-7"
          >
            <Sparkles className="h-4 w-4" />
            <span>+2,500 مشروع يثق بـ ClientFlow</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold text-foreground leading-[1.12] tracking-tight">
            حوّل رضا الزبناء إلى{" "}
            <span className="gradient-text">تقييمات أكثر</span>{" "}
            على Google ⭐
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            نظام ذكي يساعدك على جمع التقييمات، تحسين سمعتك، وزيادة عدد العملاء بسهولة
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button
              size="lg"
              className="gradient-primary text-white rounded-full px-10 h-14 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              asChild
            >
              <Link to="/signup">
                ابدأ الآن مجاناً
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base border-border/60 gap-2"
              asChild
            >
              <a href="#steps">
                <Play className="h-4 w-4 fill-primary text-primary" />
                شاهد كيف يعمل
              </a>
            </Button>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2">
            {["بدون بطاقة ائتمان", "إعداد في 5 دقائق", "إلغاء في أي وقت"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Phone Mockup - Left side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative">
            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 80 }}
              className="absolute -right-6 top-12 bg-card rounded-xl border border-border/60 px-4 py-3 shadow-[var(--shadow-elevated)] z-20 hidden lg:flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-star/10 flex items-center justify-center">
                <Star className="h-4 w-4 text-star fill-star" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">تقييم 5 نجوم جديد!</p>
                <p className="text-[10px] text-muted-foreground">منذ لحظات</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, type: "spring", stiffness: 80 }}
              className="absolute -left-10 bottom-28 bg-card rounded-xl border border-border/60 px-4 py-3 shadow-[var(--shadow-elevated)] z-20 hidden lg:flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">+23% هذا الشهر</p>
                <p className="text-[10px] text-muted-foreground">نمو التقييمات</p>
              </div>
            </motion.div>

            {/* Phone glow */}
            <div className="absolute -inset-12 bg-gradient-to-b from-primary/[0.06] to-secondary/[0.06] rounded-full blur-3xl" />

            {/* Phone */}
            <div className="relative w-[280px] sm:w-[300px]">
              <div className="bg-foreground rounded-[2.5rem] p-3 shadow-2xl shadow-black/15 ring-1 ring-white/10">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-b-2xl z-10" />
                <div className="gradient-primary rounded-[2rem] overflow-hidden pt-8 pb-6 px-5 min-h-[450px] flex flex-col">
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm mx-auto flex items-center justify-center mb-3 ring-1 ring-white/20">
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
                        className={`rounded-xl py-3 px-4 text-center text-sm font-semibold transition-all ${
                          opt.active
                            ? "bg-white text-primary shadow-lg shadow-black/10"
                            : "bg-white/10 text-white/80"
                        }`}
                      >
                        {opt.label}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 bg-white rounded-xl py-3 text-center shadow-sm">
                    <span className="text-primary font-bold text-sm">إرسال التقييم ←</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-20 max-w-2xl mx-auto"
      >
        <div className="bg-card rounded-2xl border border-border/50 shadow-sm p-2">
          <div className="grid grid-cols-3 divide-x divide-border/50" dir="rtl">
            {[
              { value: "94%", label: "رضا العملاء", icon: "⭐" },
              { value: "+50K", label: "تقييم تم جمعه", icon: "📊" },
              { value: "+2,500", label: "مستخدم نشط", icon: "👥" },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-4 px-3">
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
