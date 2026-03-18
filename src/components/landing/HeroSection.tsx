import { motion } from "framer-motion";
import { ArrowLeft, Star, Users, Calendar, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-restaurant.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-card pt-20 pb-32">
    <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl gradient-primary" />
    <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl gradient-primary" />
    
    <div className="container relative z-10 mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <Star className="h-3.5 w-3.5" />
          مصمّم للمشاريع المغربية
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          أدِر عملاءك،{" "}
          <span className="gradient-text">عزّز تقييماتك</span>،{" "}
          نمّي مشروعك
        </h1>
        
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          نظام متكامل للمطاعم، الصالونات، العيادات والمستقلين في المغرب.
          اجمع التقييمات، أدِر الحجوزات، وتابع نمو مشروعك — بكل سهولة.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gradient-primary text-primary-foreground px-8 h-12 text-base" asChild>
            <Link to="/signup">ابدأ تجربتك المجانية <ArrowLeft className="mr-2 h-4 w-4" /></Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 text-base" asChild>
            <a href="#features">اكتشف كيف يعمل</a>
          </Button>
        </div>
      </motion.div>

      {/* Hero image with glassmorphism overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
          <img src={heroImage} alt="مطعم مغربي عصري" className="w-full h-64 sm:h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-6">
            <div className="glass-strong rounded-xl p-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: Users, label: "إجمالي العملاء", value: "1,247", color: "text-primary" },
                  { icon: Star, label: "التقييمات", value: "892", color: "text-secondary" },
                  { icon: Calendar, label: "الحجوزات", value: "156", color: "text-accent" },
                  { icon: BarChart3, label: "النمو", value: "+23%", color: "text-accent" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className={`h-4 w-4 ${stat.color} mx-auto mb-1`} />
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
