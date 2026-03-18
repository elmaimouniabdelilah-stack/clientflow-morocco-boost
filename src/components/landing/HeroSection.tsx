import { motion } from "framer-motion";
import { ArrowLeft, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-teal-section pt-24 pb-16 lg:pb-0 lg:min-h-[600px]">
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

    <div className="container relative z-10 mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-right order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-white/90 mb-6 border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            +2,500 مشروع يستخدم ClientFlow
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-white leading-[1.2] tracking-tight">
            حوّل رضا الزبناء إلى
            <br />
            <span className="relative inline-block mt-1">
              تقييمات
              <span className="text-yellow-300"> Google </span>
              أكثر
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-yellow-300/40 rounded-full origin-right"
              />
            </span>
          </h1>

          <p className="mt-5 text-base lg:text-lg text-white/75 max-w-lg mx-auto lg:mx-0 lg:mr-0 leading-relaxed">
            نظام ذكي يجمع تقييمات حقيقية من عملائك ويوجّههم مباشرة إلى Google — بسهولة وبدون تعقيد.
          </p>

          {/* Trust points */}
          <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2">
            {["بدون بطاقة ائتمان", "إعداد في 5 دقائق", "إلغاء في أي وقت"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-white/60">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-300" />
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-black/10"
              asChild
            >
              <Link to="/signup">ابدأ تجربتك المجانية <ArrowLeft className="mr-2 h-4 w-4" /></Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white/90 hover:bg-white/10 rounded-full h-12 text-base"
              asChild
            >
              <a href="#steps">شاهد كيف يعمل ←</a>
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-center lg:justify-start gap-10">
            {[
              { value: "+2,500", label: "مشروع نشط" },
              { value: "+50K", label: "تقييم تم جمعه" },
              { value: "94%", label: "نسبة الرضا" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-right">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-[11px] text-white/50 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end order-2 lg:self-end"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-white/5 rounded-full blur-3xl" />

            {/* Phone frame */}
            <div className="relative w-[260px] sm:w-[280px]">
              <div className="bg-foreground rounded-[2.5rem] p-3 shadow-2xl shadow-black/30 border border-white/10">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground rounded-b-2xl z-10" />

                {/* Screen */}
                <div className="bg-gradient-to-b from-primary/90 to-primary rounded-[2rem] overflow-hidden pt-8 pb-6 px-5 min-h-[420px] flex flex-col">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/15 mx-auto flex items-center justify-center mb-3">
                      <Star className="h-6 w-6 text-yellow-300 fill-yellow-300" />
                    </div>
                    <p className="text-white font-semibold text-base">كيف كانت تجربتك؟</p>
                    <p className="text-white/50 text-xs mt-1">نقدّر رأيك</p>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1.5 justify-center mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -30 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                      >
                        <Star className="h-9 w-9 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Options */}
                  <div className="space-y-2.5 flex-1">
                    {[
                      { label: "ممتازة 😍", active: true },
                      { label: "جيدة 😊", active: false },
                      { label: "عادية 😐", active: false },
                    ].map((opt) => (
                      <motion.div
                        key={opt.label}
                        whileHover={{ scale: 1.02 }}
                        className={`rounded-xl py-3 px-4 text-center text-sm font-medium transition-all cursor-pointer ${
                          opt.active
                            ? "bg-white text-primary shadow-md"
                            : "bg-white/10 text-white/80 hover:bg-white/15"
                        }`}
                      >
                        {opt.label}
                      </motion.div>
                    ))}
                  </div>

                  {/* Submit button */}
                  <div className="mt-4 bg-white rounded-xl py-2.5 text-center">
                    <span className="text-primary font-semibold text-sm">إرسال التقييم</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
