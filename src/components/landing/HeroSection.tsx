import { motion } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-teal-section pt-28 pb-20 min-h-[520px]">
    {/* Decorative shapes */}
    <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/5" />
    <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/5" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-right"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            حوّل رضا الزبناء إلى{" "}
            <span className="text-yellow-300">تقييمات Google</span>{" "}
            أكثر
          </h1>

          <p className="mt-5 text-base text-white/80 max-w-lg mx-auto lg:mx-0 lg:mr-0">
            نظام ذكي يجمع تقييمات حقيقية من عملائك ويوجّههم مباشرة إلى Google — بسهولة وبدون تعقيد.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold"
              asChild
            >
              <Link to="/signup">ابدأ تجربتك المجانية <ArrowLeft className="mr-2 h-4 w-4" /></Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 rounded-full h-12 text-base"
              asChild
            >
              <a href="#steps">اكتشف كيف يعمل</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-8">
            {[
              { value: "+2,500", label: "مشروع نشط" },
              { value: "+50K", label: "تقييم تم جمعه" },
              { value: "94%", label: "نسبة الرضا" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-[500px]">
            <div className="absolute inset-0 bg-white/10 rounded-[2.5rem] border border-white/20 backdrop-blur-sm" />
            <div className="absolute inset-3 bg-foreground rounded-[2rem] overflow-hidden flex flex-col items-center justify-center p-6">
              <div className="w-full space-y-4">
                <div className="flex gap-1 justify-center mb-2">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white text-center text-sm">كيف كانت تجربتك؟</p>
                <div className="space-y-2">
                  {["ممتازة 😍", "جيدة 😊", "عادية 😐"].map((label) => (
                    <div key={label} className="bg-white/10 rounded-xl py-3 px-4 text-center text-white/90 text-sm">
                      {label}
                    </div>
                  ))}
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
