import { motion } from "framer-motion";
import { QrCode, Smartphone, Store, ScanLine } from "lucide-react";

const useCases = [
  { icon: Store, title: "على الطاولة", desc: "ضعه على طاولات المطعم أو المقهى" },
  { icon: Smartphone, title: "عبر واتساب", desc: "أرسل الرابط مباشرة للعميل" },
  { icon: ScanLine, title: "عند الدفع", desc: "العميل يمسح الكود عند المغادرة" },
];

const QRCodeSection = () => (
  <section className="py-24 bg-card" dir="rtl">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/[0.12] rounded-full px-4 py-2 text-sm text-primary font-medium mb-5">
            <QrCode className="h-4 w-4" />
            رمز QR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-5">
            كود QR <span className="gradient-text">في كل مكان</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-base">
            احصل على رمز QR فريد لمشروعك. العميل يمسح الكود → يقيّم التجربة → أو يحجز موعد. كل شيء بمسحة واحدة.
          </p>

          <div className="space-y-4">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/15 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                  <uc.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{uc.title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{uc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* QR Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-br from-primary/[0.04] to-secondary/[0.04] rounded-full blur-3xl" />
            <div className="relative">
              {/* Table/surface simulation */}
              <div className="bg-gradient-to-b from-muted/40 to-muted/80 rounded-3xl p-8 border border-border/50 shadow-[var(--shadow-elevated)]">
                {/* QR card on table */}
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/40 max-w-[260px] mx-auto">
                  <div className="text-center mb-4">
                    <p className="font-extrabold text-foreground text-sm">قيّمنا على Google ⭐</p>
                    <p className="text-xs text-muted-foreground mt-1">امسح الكود</p>
                  </div>
                  {/* QR placeholder */}
                  <div className="bg-foreground rounded-xl p-4 mb-4">
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 49 }).map((_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-[2px] ${
                            Math.random() > 0.4 ? "bg-white" : "bg-transparent"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-muted-foreground">ClientFlow.ma/review/cafe123</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="mt-4 flex justify-center gap-6">
                  <div className="w-16 h-2 bg-border/40 rounded-full" />
                  <div className="w-10 h-2 bg-border/40 rounded-full" />
                </div>
              </div>

              {/* Scan indicator */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-accent text-white rounded-full px-4 py-2 text-xs font-bold shadow-lg flex items-center gap-1.5"
              >
                <ScanLine className="h-3.5 w-3.5" />
                امسح هنا!
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default QRCodeSection;
