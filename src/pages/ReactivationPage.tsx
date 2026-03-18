import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck, UserX, Send, CheckCircle2, Clock, AlertCircle,
  TrendingUp, Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface InactiveCustomer {
  id: string;
  name: string;
  phone: string;
  lastBooking: string;
  daysSince: number;
  totalBookings: number;
  status: "inactive" | "reminded" | "reactivated";
}

const mockCustomers: InactiveCustomer[] = [
  { id: "1", name: "أحمد بنعلي", phone: "0661234567", lastBooking: "2026-03-01", daysSince: 17, totalBookings: 5, status: "inactive" },
  { id: "2", name: "فاطمة الزهراء", phone: "0672345678", lastBooking: "2026-02-18", daysSince: 28, totalBookings: 3, status: "inactive" },
  { id: "3", name: "يوسف العلوي", phone: "0653456789", lastBooking: "2026-03-11", daysSince: 7, totalBookings: 8, status: "reminded" },
  { id: "4", name: "سارة المنصوري", phone: "0644567890", lastBooking: "2026-02-16", daysSince: 30, totalBookings: 2, status: "inactive" },
  { id: "5", name: "كريم الحسني", phone: "0635678901", lastBooking: "2026-03-03", daysSince: 15, totalBookings: 12, status: "reactivated" },
  { id: "6", name: "نورة البكري", phone: "0626789012", lastBooking: "2026-02-20", daysSince: 26, totalBookings: 4, status: "inactive" },
  { id: "7", name: "عمر التازي", phone: "0617890123", lastBooking: "2026-03-08", daysSince: 10, totalBookings: 6, status: "reminded" },
];

const ReactivationPage = () => {
  const [customers, setCustomers] = useState(mockCustomers);
  const [selected, setSelected] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [sending, setSending] = useState(false);

  const inactiveCount = customers.filter((c) => c.status === "inactive").length;
  const remindedCount = customers.filter((c) => c.status === "reminded").length;
  const reactivatedCount = customers.filter((c) => c.status === "reactivated").length;

  const filteredCustomers = customers.filter((c) => {
    if (filter === "all") return true;
    if (filter === "7") return c.daysSince >= 7 && c.daysSince < 15;
    if (filter === "15") return c.daysSince >= 15 && c.daysSince < 30;
    if (filter === "30") return c.daysSince >= 30;
    if (filter === "inactive") return c.status === "inactive";
    if (filter === "reminded") return c.status === "reminded";
    if (filter === "reactivated") return c.status === "reactivated";
    return true;
  });

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    const selectableIds = filteredCustomers
      .filter((c) => c.status === "inactive")
      .map((c) => c.id);
    if (selectableIds.every((id) => selected.includes(id))) {
      setSelected((prev) => prev.filter((id) => !selectableIds.includes(id)));
    } else {
      setSelected((prev) => [...new Set([...prev, ...selectableIds])]);
    }
  };

  const handleSendReminders = async () => {
    if (selected.length === 0) {
      toast.error("اختر عميلًا واحدًا على الأقل");
      return;
    }
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    setCustomers((prev) =>
      prev.map((c) =>
        selected.includes(c.id) ? { ...c, status: "reminded" as const } : c
      )
    );
    toast.success(`تم إرسال تذكير لـ ${selected.length} عميل`);
    setSelected([]);
    setSending(false);
  };

  const getInactivityBadge = (days: number) => {
    if (days >= 30) return <Badge variant="destructive" className="text-[10px] px-2">+30 يوم</Badge>;
    if (days >= 15) return <Badge className="bg-orange-500/10 text-orange-600 border-orange-200 text-[10px] px-2">+15 يوم</Badge>;
    return <Badge variant="secondary" className="text-[10px] px-2">+7 أيام</Badge>;
  };

  const getStatusBadge = (status: InactiveCustomer["status"]) => {
    switch (status) {
      case "inactive":
        return <Badge variant="outline" className="text-[10px] border-destructive/30 text-destructive"><AlertCircle className="h-3 w-3 ml-1" />غير نشط</Badge>;
      case "reminded":
        return <Badge variant="outline" className="text-[10px] border-primary/30 text-primary"><Clock className="h-3 w-3 ml-1" />تم التذكير</Badge>;
      case "reactivated":
        return <Badge variant="outline" className="text-[10px] border-accent/30 text-accent"><CheckCircle2 className="h-3 w-3 ml-1" />عاد</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">استرجاع العملاء</h1>
          <p className="text-sm text-muted-foreground mt-1">تتبّع العملاء غير النشطين وأعدهم بعروض مخصّصة</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "عملاء غير نشطين", value: inactiveCount, icon: UserX, color: "text-destructive", bg: "bg-destructive/10" },
            { label: "تم تذكيرهم", value: remindedCount, icon: Send, color: "text-primary", bg: "bg-primary/10" },
            { label: "تمت إعادتهم", value: reactivatedCount, icon: TrendingUp, color: "text-accent", bg: "bg-accent/10" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-black text-foreground mt-1">{stat.value}</p>
                </div>
                <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reactivation Message Preview */}
        <div className="rounded-xl border border-dashed border-primary/20 bg-primary/5 p-4">
          <p className="text-[10px] text-muted-foreground mb-1.5">رسالة التذكير التلقائية</p>
          <p className="text-sm text-foreground">
            👋 وحشتينا! ارجع واستمتع بخصم 10% على حجزك القادم 🎁
          </p>
        </div>

        {/* Filters + Actions */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-40 h-9 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">الكل</SelectItem>
                <SelectItem value="7">غياب +7 أيام</SelectItem>
                <SelectItem value="15">غياب +15 يوم</SelectItem>
                <SelectItem value="30">غياب +30 يوم</SelectItem>
                <SelectItem value="inactive">غير نشط</SelectItem>
                <SelectItem value="reminded">تم التذكير</SelectItem>
                <SelectItem value="reactivated">عاد</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <AnimatePresence>
            {selected.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <Button
                  onClick={handleSendReminders}
                  disabled={sending}
                  className="gradient-primary text-primary-foreground h-9 text-xs"
                >
                  <Send className="ml-2 h-3.5 w-3.5" />
                  {sending ? "جاري الإرسال..." : `إرسال تذكير (${selected.length})`}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Customer List */}
        <div className="rounded-xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden">
          {/* Table Header */}
          <div className="flex items-center gap-3 p-3 border-b border-border bg-muted/50 text-[11px] font-medium text-muted-foreground">
            <div className="w-8 flex justify-center">
              <Checkbox
                checked={
                  filteredCustomers.filter((c) => c.status === "inactive").length > 0 &&
                  filteredCustomers
                    .filter((c) => c.status === "inactive")
                    .every((c) => selected.includes(c.id))
                }
                onCheckedChange={toggleSelectAll}
              />
            </div>
            <div className="flex-1">العميل</div>
            <div className="w-24 text-center hidden sm:block">الحجوزات</div>
            <div className="w-28 text-center">مدة الغياب</div>
            <div className="w-28 text-center">الحالة</div>
          </div>

          {/* Rows */}
          {filteredCustomers.map((customer, i) => (
            <motion.div
              key={customer.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.03 }}
              className={`flex items-center gap-3 p-3 border-b border-border last:border-0 transition-colors ${
                selected.includes(customer.id) ? "bg-primary/5" : "hover:bg-muted/30"
              }`}
            >
              <div className="w-8 flex justify-center">
                <Checkbox
                  checked={selected.includes(customer.id)}
                  onCheckedChange={() => toggleSelect(customer.id)}
                  disabled={customer.status !== "inactive"}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{customer.name}</p>
                <p className="text-[11px] text-muted-foreground" dir="ltr">{customer.phone}</p>
              </div>
              <div className="w-24 text-center hidden sm:block">
                <span className="text-sm font-semibold text-foreground">{customer.totalBookings}</span>
              </div>
              <div className="w-28 flex justify-center">
                {getInactivityBadge(customer.daysSince)}
              </div>
              <div className="w-28 flex justify-center">
                {getStatusBadge(customer.status)}
              </div>
            </motion.div>
          ))}

          {filteredCustomers.length === 0 && (
            <div className="p-8 text-center">
              <UserCheck className="h-8 w-8 text-accent mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">لا يوجد عملاء في هذه الفئة</p>
            </div>
          )}
        </div>

        <p className="text-[10px] text-muted-foreground/50 text-center pb-4">
          البيانات حاليًا تجريبية — فعّل Lovable Cloud لربط النظام بقاعدة بيانات حقيقية
        </p>
      </div>
    </DashboardLayout>
  );
};

export default ReactivationPage;
