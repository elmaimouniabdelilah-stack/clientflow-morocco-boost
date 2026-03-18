import { motion } from "framer-motion";
import { Monitor, Smartphone } from "lucide-react";

const DashboardPreview = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-sm font-semibold text-primary mb-2">لوحة التحكم</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          لوحة تحكم قوية وبسيطة
        </h2>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm">
          تابع كل شيء من مكان واحد — العملاء، التقييمات، الحجوزات والتحليلات
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative">
          {/* Laptop mockup */}
          <div className="bg-foreground/5 rounded-2xl border border-border p-4 shadow-[var(--shadow-elevated)]">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <div className="flex-1 h-6 bg-muted rounded-md" />
            </div>
            <div className="bg-card rounded-lg p-6 min-h-[300px]">
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: "العملاء", value: "1,247", change: "+12%" },
                  { label: "التقييمات", value: "892", change: "+23%" },
                  { label: "الحجوزات", value: "156", change: "+8%" },
                  { label: "الإيرادات", value: "34K", change: "+18%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-muted/50 rounded-xl p-4 text-center">
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-xl font-bold text-foreground mt-1">{stat.value}</p>
                    <p className="text-xs text-primary font-medium mt-0.5">{stat.change}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-muted/30 rounded-xl h-32 border border-border/50" />
                <div className="bg-muted/30 rounded-xl h-32 border border-border/50" />
              </div>
            </div>
          </div>

          {/* Floating phone */}
          <div className="absolute -bottom-6 -left-4 w-28 h-48 bg-foreground rounded-2xl border-4 border-foreground/80 shadow-lg overflow-hidden hidden md:block">
            <div className="bg-primary/20 h-full p-2 flex flex-col gap-1.5">
              <div className="bg-card/80 rounded-md h-6 w-full" />
              <div className="bg-card/60 rounded-md h-4 w-3/4" />
              <div className="bg-card/40 rounded-md h-4 w-1/2" />
              <div className="flex-1" />
              <div className="bg-primary rounded-md h-6 w-full" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
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
