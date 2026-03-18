import { motion } from "framer-motion";
import { Monitor, Smartphone, Star, Users, Calendar, TrendingUp } from "lucide-react";

const stats = [
  { label: "العملاء", value: "1,247", change: "+12%", icon: Users },
  { label: "التقييمات", value: "892", change: "+23%", icon: Star },
  { label: "الحجوزات", value: "156", change: "+8%", icon: Calendar },
  { label: "النمو", value: "34%", change: "+18%", icon: TrendingUp },
];

const DashboardPreview = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-4">
          لوحة التحكم
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          كل شيء <span className="gradient-text">في نظرة واحدة</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">
          تابع العملاء، التقييمات، الحجوزات والتحليلات من مكان واحد
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl blur-2xl" />
          <div className="relative bg-card rounded-2xl border border-border/60 p-5 shadow-[var(--shadow-elevated)]">
            {/* Browser bar */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border/60">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-star/50" />
                <div className="w-3 h-3 rounded-full bg-accent/50" />
              </div>
              <div className="flex-1 h-7 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-[10px] text-muted-foreground">app.clientflow.ma/dashboard</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-muted/40 rounded-xl p-4 text-center border border-border/40">
                  <stat.icon className="h-4 w-4 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-extrabold text-foreground mt-1">{stat.value}</p>
                  <p className="text-xs text-accent font-semibold mt-0.5">{stat.change}</p>
                </div>
              ))}
            </div>

            {/* Chart placeholder */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 bg-muted/30 rounded-xl h-36 border border-border/40 flex items-end p-4 gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 95, 75, 88, 92].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 gradient-primary rounded-t-sm opacity-60"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="bg-muted/30 rounded-xl h-36 border border-border/40 p-4 flex flex-col justify-center items-center">
                <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary flex items-center justify-center">
                  <span className="text-sm font-extrabold text-foreground">94%</span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-2">رضا العملاء</p>
              </div>
            </div>
          </div>

          {/* Floating mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -left-4 w-28 h-48 bg-foreground rounded-2xl border-4 border-foreground/80 shadow-xl overflow-hidden hidden lg:block"
          >
            <div className="gradient-primary h-full p-2 flex flex-col gap-1.5">
              <div className="bg-white/80 rounded-md h-6 w-full" />
              <div className="bg-white/60 rounded-md h-4 w-3/4" />
              <div className="bg-white/40 rounded-md h-4 w-1/2" />
              <div className="flex-1" />
              <div className="bg-white rounded-md h-6 w-full" />
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Monitor className="h-4 w-4" />
            <span>يعمل على الحاسوب</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Smartphone className="h-4 w-4" />
            <span>يعمل على الهاتف</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DashboardPreview;
