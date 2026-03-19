import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isSameMonth, addMonths, subMonths, isToday, startOfWeek, endOfWeek } from "date-fns";
import { ar } from "date-fns/locale";
import { Calendar as CalendarIcon, Plus, Clock, User, Phone, ChevronRight, ChevronLeft, X, Check, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface Booking {
  id: string;
  clientName: string;
  clientPhone: string;
  date: Date;
  time: string;
  service: string;
  status: "confirmed" | "pending" | "cancelled";
  notes: string;
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

const services = ["استشارة", "حلاقة", "تنظيف", "علاج", "فحص", "أخرى"];

const initialBookings: Booking[] = [
  { id: "1", clientName: "أحمد المنصوري", clientPhone: "0612345678", date: new Date(), time: "10:00", service: "استشارة", status: "confirmed", notes: "" },
  { id: "2", clientName: "فاطمة الزهراء", clientPhone: "0698765432", date: new Date(), time: "14:30", service: "علاج", status: "confirmed", notes: "الجلسة الثالثة" },
  { id: "3", clientName: "سارة الإدريسي", clientPhone: "0677889900", date: new Date(), time: "16:00", service: "فحص", status: "pending", notes: "" },
  { id: "4", clientName: "كريم العلوي", clientPhone: "0633221100", date: addMonths(new Date(), 0), time: "11:00", service: "حلاقة", status: "confirmed", notes: "" },
  { id: "5", clientName: "يوسف بنعلي", clientPhone: "0655443322", date: new Date(Date.now() + 86400000), time: "09:30", service: "استشارة", status: "pending", notes: "عميل جديد" },
];

const statusConfig = {
  confirmed: { label: "مؤكد", icon: CheckCircle2, className: "text-accent bg-accent/10 border-accent/20" },
  pending: { label: "في الانتظار", icon: AlertCircle, className: "text-primary bg-primary/10 border-primary/20" },
  cancelled: { label: "ملغي", icon: X, className: "text-destructive bg-destructive/10 border-destructive/20" },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

const BookingsPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ clientName: "", clientPhone: "", time: "", service: "", notes: "" });

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calStart = startOfWeek(monthStart, { weekStartsOn: 6 });
  const calEnd = endOfWeek(monthEnd, { weekStartsOn: 6 });
  const calDays = eachDayOfInterval({ start: calStart, end: calEnd });

  const dayBookings = bookings.filter((b) => isSameDay(b.date, selectedDate)).sort((a, b) => a.time.localeCompare(b.time));

  const getBookingCount = (day: Date) => bookings.filter((b) => isSameDay(b.date, day) && b.status !== "cancelled").length;

  const openNewBooking = () => {
    setForm({ clientName: "", clientPhone: "", time: "", service: "", notes: "" });
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (!form.clientName.trim() || !form.clientPhone.trim() || !form.time || !form.service) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }
    const newBooking: Booking = {
      id: Date.now().toString(),
      clientName: form.clientName,
      clientPhone: form.clientPhone,
      date: selectedDate,
      time: form.time,
      service: form.service,
      status: "confirmed",
      notes: form.notes,
    };
    setBookings([...bookings, newBooking]);
    setDialogOpen(false);
    toast.success("تم تأكيد الحجز تلقائيًا ✓");
  };

  const updateStatus = (id: string, status: Booking["status"]) => {
    setBookings(bookings.map((b) => b.id === id ? { ...b, status } : b));
    toast.success(status === "confirmed" ? "تم تأكيد الحجز" : status === "cancelled" ? "تم إلغاء الحجز" : "تم التحديث");
  };

  const weekDays = ["س", "أ", "إ", "ث", "أ", "خ", "ج"];

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">الحجوزات</h1>
            <p className="text-sm text-muted-foreground mt-0.5">إدارة المواعيد والحجوزات</p>
          </div>
          <Button onClick={openNewBooking} className="gradient-primary text-primary-foreground shadow-md active:scale-95 transition-transform">
            <Plus className="ml-2 h-4 w-4" />
            حجز جديد
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-6">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border/50 bg-card p-5 shadow-[var(--shadow-card)] h-fit"
          >
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <h3 className="text-sm font-bold text-foreground">
                {format(currentMonth, "MMMM yyyy", { locale: ar })}
              </h3>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-1">
              {weekDays.map((d, i) => (
                <div key={i} className="text-center text-[10px] font-semibold text-muted-foreground py-1">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {calDays.map((day) => {
                const count = getBookingCount(day);
                const selected = isSameDay(day, selectedDate);
                const today = isToday(day);
                const inMonth = isSameMonth(day, currentMonth);

                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => setSelectedDate(day)}
                    className={`relative h-10 rounded-xl text-sm font-medium transition-all duration-200 active:scale-90
                      ${!inMonth ? "text-muted-foreground/30" : "text-foreground"}
                      ${selected ? "gradient-primary text-primary-foreground shadow-md" : "hover:bg-muted/80"}
                      ${today && !selected ? "ring-2 ring-primary/40" : ""}
                    `}
                  >
                    {format(day, "d")}
                    {count > 0 && !selected && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                    {count > 0 && selected && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-foreground/80" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Stats */}
            <div className="mt-5 pt-4 border-t border-border/50 grid grid-cols-3 gap-2 text-center">
              {[
                { value: bookings.filter(b => b.status === "confirmed").length, label: "مؤكد", color: "text-accent" },
                { value: bookings.filter(b => b.status === "pending").length, label: "في الانتظار", color: "text-primary" },
                { value: bookings.filter(b => b.status === "cancelled").length, label: "ملغي", color: "text-destructive" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-muted/50 py-2">
                  <p className={`text-lg font-black ${s.color}`}>{s.value}</p>
                  <p className="text-[10px] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Day Bookings */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="flex items-center justify-between"
            >
              <h2 className="text-base md:text-lg font-bold text-foreground">
                {format(selectedDate, "EEEE d MMMM", { locale: ar })}
              </h2>
              <span className="text-xs text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-lg">{dayBookings.length} حجز</span>
            </motion.div>

            {dayBookings.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-border/50 bg-card p-12 text-center"
              >
                <CalendarIcon className="h-10 w-10 text-muted-foreground/20 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">لا توجد حجوزات لهذا اليوم</p>
                <Button variant="outline" size="sm" className="mt-3 rounded-xl" onClick={openNewBooking}>
                  <Plus className="ml-1 h-3.5 w-3.5" />
                  إضافة حجز
                </Button>
              </motion.div>
            ) : (
              <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
                {dayBookings.map((booking) => {
                  const sc = statusConfig[booking.status];
                  const StatusIcon = sc.icon;

                  return (
                    <motion.div
                      key={booking.id}
                      variants={item}
                      className="rounded-2xl border border-border/50 bg-card p-4 md:p-5 shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-elevated)] active:scale-[0.99]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center gap-1.5 bg-primary/10 px-2.5 py-1 rounded-lg">
                              <Clock className="h-3.5 w-3.5 text-primary" />
                              <span className="text-sm font-bold text-primary" dir="ltr">{booking.time}</span>
                            </div>
                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${sc.className}`}>
                              <StatusIcon className="h-3 w-3" />
                              {sc.label}
                            </span>
                          </div>

                          <div className="space-y-1.5 text-sm text-muted-foreground">
                            <p className="flex items-center gap-2">
                              <User className="h-3.5 w-3.5 shrink-0" />
                              <span className="text-foreground font-semibold">{booking.clientName}</span>
                            </p>
                            <p className="flex items-center gap-2">
                              <Phone className="h-3.5 w-3.5 shrink-0" />
                              <span dir="ltr">{booking.clientPhone}</span>
                            </p>
                            <p className="flex items-center gap-2">
                              <CalendarIcon className="h-3.5 w-3.5 shrink-0" />
                              {booking.service}
                            </p>
                            {booking.notes && (
                              <p className="text-xs text-muted-foreground mt-2 bg-muted/60 px-3 py-1.5 rounded-lg">
                                {booking.notes}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-1 flex-shrink-0">
                          {booking.status === "pending" && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl text-accent hover:text-accent hover:bg-accent/10" onClick={() => updateStatus(booking.id, "confirmed")}>
                              <Check className="h-4 w-4" />
                            </Button>
                          )}
                          {booking.status !== "cancelled" && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10" onClick={() => updateStatus(booking.id, "cancelled")}>
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>

        {/* New Booking Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>حجز جديد — {format(selectedDate, "d MMMM yyyy", { locale: ar })}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label>اسم العميل *</Label>
                <Input value={form.clientName} onChange={(e) => setForm({ ...form, clientName: e.target.value })} placeholder="اسم العميل" />
              </div>
              <div>
                <Label>رقم الهاتف *</Label>
                <Input value={form.clientPhone} onChange={(e) => setForm({ ...form, clientPhone: e.target.value })} placeholder="06XXXXXXXX" dir="ltr" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>الوقت *</Label>
                  <Select value={form.time} onValueChange={(v) => setForm({ ...form, time: v })}>
                    <SelectTrigger><SelectValue placeholder="اختر الوقت" /></SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((t) => {
                        const taken = dayBookings.some((b) => b.time === t && b.status !== "cancelled");
                        return (
                          <SelectItem key={t} value={t} disabled={taken}>
                            <span dir="ltr">{t}</span>
                            {taken && " (محجوز)"}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>الخدمة *</Label>
                  <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                    <SelectTrigger><SelectValue placeholder="اختر الخدمة" /></SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>ملاحظات</Label>
                <Input value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="ملاحظات إضافية..." />
              </div>
              <Button onClick={handleSave} className="w-full gradient-primary text-primary-foreground">
                <CheckCircle2 className="ml-2 h-4 w-4" />
                تأكيد الحجز تلقائيًا
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default BookingsPage;
