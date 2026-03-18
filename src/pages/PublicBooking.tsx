import { useState } from "react";
import { format, addDays, isBefore, startOfDay, isToday } from "date-fns";
import { ar } from "date-fns/locale";
import { CalendarIcon, Clock, CheckCircle2, User, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { getIconComponent } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

const services = [
  { id: "consultation", name: "استشارة", duration: "30 دقيقة", price: "100", iconId: "briefcase", description: "جلسة استشارية مع متخصص" },
  { id: "haircut", name: "حلاقة", duration: "45 دقيقة", price: "80", iconId: "scissors", description: "حلاقة شعر رجالية" },
  { id: "cleaning", name: "تنظيف", duration: "60 دقيقة", price: "150", iconId: "sparkles", description: "تنظيف بشرة عميق" },
  { id: "treatment", name: "علاج", duration: "45 دقيقة", price: "200", iconId: "heart", description: "جلسة علاج طبيعي" },
  { id: "checkup", name: "فحص", duration: "30 دقيقة", price: "120", iconId: "stethoscope", description: "فحص طبي شامل" },
];

// Simulate some taken slots
const takenSlots: Record<string, string[]> = {};
const todayStr = format(new Date(), "yyyy-MM-dd");
takenSlots[todayStr] = ["10:00", "14:30", "16:00"];
const tomorrowStr = format(addDays(new Date(), 1), "yyyy-MM-dd");
takenSlots[tomorrowStr] = ["09:30", "11:00"];

type Step = "service" | "date" | "time" | "info" | "confirmed";

const PublicBooking = () => {
  const [searchParams] = useSearchParams();
  const bizName = searchParams.get("biz") || "ClientFlow";

  const [step, setStep] = useState<Step>("service");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [weekStart, setWeekStart] = useState(0); // offset in days from today

  const next7Days = Array.from({ length: 7 }, (_, i) => addDays(new Date(), weekStart + i))
    .filter(d => !isBefore(d, startOfDay(new Date())));

  const getAvailableSlots = (date: Date) => {
    const key = format(date, "yyyy-MM-dd");
    const taken = takenSlots[key] || [];
    // If today, filter out past times
    if (isToday(date)) {
      const nowH = new Date().getHours();
      const nowM = new Date().getMinutes();
      return timeSlots.filter(t => {
        const [h, m] = t.split(":").map(Number);
        return (h > nowH || (h === nowH && m > nowM)) && !taken.includes(t);
      });
    }
    return timeSlots.filter(t => !taken.includes(t));
  };

  const handleConfirm = () => {
    // TODO: Save to database
    console.log("Booking confirmed:", { service: selectedService, date: selectedDate, time: selectedTime, name, phone });
    setStep("confirmed");
  };

  const stepTitle: Record<Step, string> = {
    service: "اختر الخدمة",
    date: "اختر اليوم",
    time: "اختر الوقت",
    info: "معلوماتك",
    confirmed: "تم التأكيد",
  };

  const currentStepIndex = ["service", "date", "time", "info", "confirmed"].indexOf(step);

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold font-display gradient-text">{bizName}</h1>
          <p className="text-sm text-muted-foreground mt-1">احجز موعدك بكل سهولة</p>
        </div>

        {/* Progress */}
        {step !== "confirmed" && (
          <div className="flex items-center justify-center gap-2 mb-8">
            {["service", "date", "time", "info"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  i <= currentStepIndex ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {i + 1}
                </div>
                {i < 3 && <div className={`w-8 h-0.5 ${i < currentStepIndex ? "gradient-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* Step 1: Service */}
          {step === "service" && (
            <motion.div key="service" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
            >
              <h2 className="text-lg font-semibold text-foreground mb-1">{stepTitle.service}</h2>
              <p className="text-xs text-muted-foreground mb-5">ما هي الخدمة التي تريدها؟</p>
              <div className="space-y-2">
                {services.map((s) => {
                  const IconComp = getIconComponent(s.iconId);
                  return (
                    <button
                      key={s.id}
                      onClick={() => { setSelectedService(s.id); setStep("date"); }}
                      className={`w-full flex items-center gap-4 rounded-xl border p-4 text-right transition-all duration-150 hover:shadow-[var(--shadow-card)] ${
                        selectedService === s.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                      }`}
                    >
                      <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <IconComp className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{s.name}</p>
                        <p className="text-xs text-muted-foreground">{s.duration}</p>
                      </div>
                      <ChevronLeft className="h-4 w-4 text-muted-foreground" />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 2: Date */}
          {step === "date" && (
            <motion.div key="date" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
            >
              <h2 className="text-lg font-semibold text-foreground mb-1">{stepTitle.date}</h2>
              <p className="text-xs text-muted-foreground mb-5">اختر اليوم المناسب لك</p>

              <div className="flex items-center justify-between mb-3">
                <Button variant="ghost" size="icon" className="h-8 w-8" disabled={weekStart <= 0}
                  onClick={() => setWeekStart(Math.max(0, weekStart - 7))}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <span className="text-xs text-muted-foreground">الأيام المتاحة</span>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setWeekStart(weekStart + 7)}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {next7Days.map((day) => {
                  const available = getAvailableSlots(day).length;
                  const selected = selectedDate && format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
                  return (
                    <button
                      key={day.toISOString()}
                      onClick={() => { setSelectedDate(day); setStep("time"); }}
                      disabled={available === 0}
                      className={`flex flex-col items-center rounded-xl p-3 transition-all duration-150 ${
                        selected ? "gradient-primary text-primary-foreground" :
                        available === 0 ? "bg-muted/50 text-muted-foreground/40 cursor-not-allowed" :
                        "border border-border hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
                      }`}
                    >
                      <span className="text-[10px] font-medium">{format(day, "EEE", { locale: ar })}</span>
                      <span className="text-lg font-bold mt-0.5">{format(day, "d")}</span>
                      <span className="text-[10px] mt-0.5">{format(day, "MMM", { locale: ar })}</span>
                    </button>
                  );
                })}
              </div>

              <Button variant="ghost" size="sm" className="mt-4" onClick={() => setStep("service")}>
                <ChevronRight className="ml-1 h-3.5 w-3.5" />
                رجوع
              </Button>
            </motion.div>
          )}

          {/* Step 3: Time */}
          {step === "time" && selectedDate && (
            <motion.div key="time" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
            >
              <h2 className="text-lg font-semibold text-foreground mb-1">{stepTitle.time}</h2>
              <p className="text-xs text-muted-foreground mb-5">
                <CalendarIcon className="inline h-3.5 w-3.5 ml-1" />
                {format(selectedDate, "EEEE d MMMM", { locale: ar })}
              </p>

              <div className="grid grid-cols-3 gap-2">
                {getAvailableSlots(selectedDate).map((t) => (
                  <button
                    key={t}
                    onClick={() => { setSelectedTime(t); setStep("info"); }}
                    className={`rounded-lg border p-3 text-sm font-medium transition-all duration-150 ${
                      selectedTime === t ? "gradient-primary text-primary-foreground border-transparent" :
                      "border-border text-foreground hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
                    }`}
                  >
                    <Clock className="h-3.5 w-3.5 mx-auto mb-1 opacity-60" />
                    <span dir="ltr">{t}</span>
                  </button>
                ))}
              </div>

              {getAvailableSlots(selectedDate).length === 0 && (
                <p className="text-center text-sm text-muted-foreground py-8">لا توجد أوقات متاحة في هذا اليوم</p>
              )}

              <Button variant="ghost" size="sm" className="mt-4" onClick={() => setStep("date")}>
                <ChevronRight className="ml-1 h-3.5 w-3.5" />
                رجوع
              </Button>
            </motion.div>
          )}

          {/* Step 4: Client Info */}
          {step === "info" && (
            <motion.div key="info" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
            >
              <h2 className="text-lg font-semibold text-foreground mb-1">{stepTitle.info}</h2>
              <p className="text-xs text-muted-foreground mb-5">أدخل معلوماتك لتأكيد الحجز</p>

              {/* Summary */}
              <div className="rounded-lg bg-muted p-3 mb-5 text-sm space-y-1">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">{services.find(s => s.id === selectedService)?.name}</span>
                </p>
                <p className="text-muted-foreground">
                  📅 {selectedDate && format(selectedDate, "EEEE d MMMM", { locale: ar })} — <span dir="ltr">🕐 {selectedTime}</span>
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> الاسم الكامل</Label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="اسمك الكامل" />
                </div>
                <div>
                  <Label className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> رقم الهاتف</Label>
                  <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="06XXXXXXXX" dir="ltr" />
                </div>

                <Button
                  onClick={handleConfirm}
                  disabled={!name.trim() || !phone.trim()}
                  className="w-full gradient-primary text-primary-foreground h-12"
                >
                  <CheckCircle2 className="ml-2 h-4 w-4" />
                  تأكيد الحجز
                </Button>
              </div>

              <Button variant="ghost" size="sm" className="mt-4" onClick={() => setStep("time")}>
                <ChevronRight className="ml-1 h-3.5 w-3.5" />
                رجوع
              </Button>
            </motion.div>
          )}

          {/* Step 5: Confirmed */}
          {step === "confirmed" && (
            <motion.div key="confirmed" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)] text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">تم تأكيد حجزك! 🎉</h2>
              <p className="text-sm text-muted-foreground mb-6">سنتواصل معك قريبًا لتأكيد الموعد</p>

              <div className="rounded-lg bg-muted p-4 text-sm space-y-2 text-right">
                <p><span className="text-muted-foreground">الخدمة:</span> <span className="font-medium text-foreground">{services.find(s => s.id === selectedService)?.name}</span></p>
                <p><span className="text-muted-foreground">التاريخ:</span> <span className="font-medium text-foreground">{selectedDate && format(selectedDate, "EEEE d MMMM yyyy", { locale: ar })}</span></p>
                <p><span className="text-muted-foreground">الوقت:</span> <span className="font-medium text-foreground" dir="ltr">{selectedTime}</span></p>
                <p><span className="text-muted-foreground">الاسم:</span> <span className="font-medium text-foreground">{name}</span></p>
              </div>

              <Button
                variant="outline"
                className="mt-6"
                onClick={() => { setStep("service"); setSelectedService(""); setSelectedDate(null); setSelectedTime(""); setName(""); setPhone(""); }}
              >
                حجز موعد آخر
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-[10px] text-muted-foreground/50 mt-8">
          مدعوم من <span className="font-semibold">ClientFlow</span>
        </p>
      </div>
    </div>
  );
};

export default PublicBooking;
