import { motion } from "framer-motion";
import { Monitor, Smartphone, Star, Users, Calendar, TrendingUp } from "lucide-react";

const stats = [
  { label: "العملاء", value: "1,247", change: "+12%", icon: Users },
  { label: "التقييمات", value: "892", change: "+23%", icon: Star },
  { label: "الحجوزات", value: "156", change: "+8%", icon: Calendar },
  { label: "النمو", value: "34%", change: "+18%", icon: TrendingUp },
];

const DashboardPreview = () => (
  <section className="py-24 bg-background" dir="rtl">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/[0.12] rounded-full px-4 py-2 text-sm text-primary font-medium mb-5">
          لوحة التحكم
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground">
          لوحة تحكم <span className="gradient-text">قوية وبسيطة</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-base">
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
          <div className="absolute -inset-6 bg-gradient-to-b from-primary/[0.04] to-transparent rounded-3xl blur-2xl" />
          <div className="relative bg-card rounded-2xl border border-border/50 p-5 shadow-[var(--shadow-elevated)]">
            {/* Browser bar */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/40" />
                <div className="w-3 h-3 rounded-full bg-star/40" />
                <div className="w-3 h-3 rounded-full bg-accent/40" />
              </div>
              <div className="flex-1 h-8 bg-muted/60 rounded-lg flex items-center justify-center">
                <span className="text-[11px] text-muted-foreground font-medium">app.clientflow.ma/dashboard</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-background rounded-xl p-4 text-center border border-border/40">
                  <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-[11px] text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-extrabold text-foreground mt-1">{stat.value}</p>
                  <p className="text-xs text-accent font-bold mt-0.5">{stat.change}</p>
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 bg-background rounded-xl h-40 border border-border/40 flex items-end p-4 gap-1.5">
                {[40, 55, 45, 70, 60, 85, 65, 80, 90, 72, 85, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className="flex-1 gradient-primary rounded-t opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  />
                ))}
              </div>
              <div className="bg-background rounded-xl h-40 border border-border/40 p-4 flex flex-col justify-center items-center">
                <div className="w-20 h-20 rounded-full border-[5px] border-muted border-t-primary border-r-primary flex items-center justify-center">
                  <span className="text-lg font-extrabold text-foreground">94%</span>
                </div>
                <p className="text-xs text-muted-foreground mt-3 font-medium">رضا العملاء</p>
              </div>
            </div>
          </div>

          {/* Floating mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -left-4 w-28 h-52 bg-foreground rounded-2xl shadow-xl overflow-hidden hidden lg:block ring-1 ring-white/10"
          >
            <div className="gradient-primary h-full p-2.5 flex flex-col gap-1.5">
              <div className="bg-white/80 rounded-md h-6 w-full" />
              <div className="bg-white/60 rounded-md h-4 w-3/4" />
              <div className="bg-white/40 rounded-md h-4 w-1/2" />
              <div className="flex-1" />
              <div className="bg-white rounded-lg h-7 w-full flex items-center justify-center">
                <span className="text-[8px] font-bold text-primary">تقييم ←</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-8 mt-14">
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <div className="w-8 h-8 rounded-lg bg-muted/60 flex items-center justify-center">
              <Monitor className="h-4 w-4" />
            </div>
            <span>يعمل على الحاسوب</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <div className="w-8 h-8 rounded-lg bg-muted/60 flex items-center justify-center">
              <Smartphone className="h-4 w-4" />
            </div>
            <span>يعمل على الهاتف</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DashboardPreview;
