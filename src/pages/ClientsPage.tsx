import { useState } from "react";
import { Users, Plus, Search, Phone, Mail, StickyNote, Pencil, Trash2, X, Check, ArrowUpLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
  createdAt: string;
  totalVisits: number;
  lastVisit: string;
}

const initialClients: Client[] = [
  { id: "1", name: "أحمد المنصوري", phone: "0612345678", email: "ahmed@example.com", notes: "عميل VIP، يفضل الطاولة رقم 5", createdAt: "2025-01-15", totalVisits: 12, lastVisit: "منذ يومين" },
  { id: "2", name: "فاطمة الزهراء", phone: "0698765432", email: "fatima@example.com", notes: "حساسية من الغلوتين", createdAt: "2025-02-20", totalVisits: 8, lastVisit: "منذ أسبوع" },
  { id: "3", name: "يوسف بنعلي", phone: "0655443322", email: "youssef@example.com", notes: "", createdAt: "2025-03-01", totalVisits: 3, lastVisit: "منذ 3 أيام" },
  { id: "4", name: "سارة الإدريسي", phone: "0677889900", email: "", notes: "تفضل المواعيد الصباحية", createdAt: "2025-03-10", totalVisits: 5, lastVisit: "أمس" },
  { id: "5", name: "كريم العلوي", phone: "0633221100", email: "karim@example.com", notes: "مهتم بالعروض الشهرية", createdAt: "2025-03-12", totalVisits: 2, lastVisit: "منذ أسبوعين" },
];

const emptyClient = { name: "", phone: "", email: "", notes: "" };

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

const ClientsPage = () => {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [searchQuery, setSearchQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [form, setForm] = useState(emptyClient);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const filtered = clients.filter(
    (c) => c.name.includes(searchQuery) || c.phone.includes(searchQuery) || c.email.includes(searchQuery)
  );

  const openAdd = () => {
    setEditingClient(null);
    setForm(emptyClient);
    setDialogOpen(true);
  };

  const openEdit = (client: Client) => {
    setEditingClient(client);
    setForm({ name: client.name, phone: client.phone, email: client.email, notes: client.notes });
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("الاسم ورقم الهاتف مطلوبان");
      return;
    }

    if (editingClient) {
      setClients(clients.map((c) => c.id === editingClient.id ? { ...c, ...form } : c));
      toast.success("تم تحديث بيانات العميل");
    } else {
      const newClient: Client = {
        id: Date.now().toString(),
        ...form,
        createdAt: new Date().toISOString().split("T")[0],
        totalVisits: 0,
        lastVisit: "جديد",
      };
      setClients([newClient, ...clients]);
      toast.success("تمت إضافة العميل بنجاح");
    }
    setDialogOpen(false);
  };

  const handleDelete = (id: string) => {
    setClients(clients.filter((c) => c.id !== id));
    setDeleteConfirm(null);
    toast.success("تم حذف العميل");
  };

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const totalVisits = clients.reduce((sum, c) => sum + c.totalVisits, 0);

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">إدارة العملاء</h1>
            <p className="text-sm text-muted-foreground mt-0.5">{clients.length} عميل مسجّل</p>
          </div>
          <Button onClick={openAdd} className="gradient-primary text-primary-foreground shadow-md active:scale-95 transition-transform">
            <Plus className="ml-2 h-4 w-4" />
            إضافة عميل
          </Button>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-3"
        >
          {[
            { label: "إجمالي العملاء", value: clients.length, gradient: "from-primary/10 to-primary/5", iconColor: "text-primary" },
            { label: "إجمالي الزيارات", value: totalVisits, gradient: "from-secondary/10 to-secondary/5", iconColor: "text-secondary" },
            { label: "عملاء جدد", value: clients.filter(c => c.lastVisit === "جديد" || c.totalVisits <= 2).length, gradient: "from-accent/10 to-accent/5", iconColor: "text-accent" },
          ].map((s) => (
            <div key={s.label} className={`rounded-2xl border border-border/50 bg-gradient-to-br ${s.gradient} bg-card p-4 shadow-[var(--shadow-card)]`}>
              <p className="text-xl md:text-2xl font-black text-foreground tracking-tight">{s.value}</p>
              <p className="text-[11px] md:text-xs text-muted-foreground mt-1 truncate">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="relative"
        >
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="بحث بالاسم أو الهاتف أو البريد..."
            className="pr-9"
          />
        </motion.div>

        {/* Client List Cards */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-border/50 bg-card p-12 text-center"
          >
            <Users className="h-10 w-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">لا يوجد عملاء</p>
          </motion.div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-3"
          >
            {filtered.map((client) => (
              <motion.div
                key={client.id}
                variants={item}
                className="rounded-2xl border border-border/50 bg-card p-4 md:p-5 shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-elevated)] active:scale-[0.99]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-primary-foreground">{client.name.charAt(0)}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground truncate">{client.name}</h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[11px] text-muted-foreground">
                            {client.totalVisits} زيارة
                          </span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="text-[11px] text-muted-foreground">
                            {client.lastVisit}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 rounded-lg px-2.5 py-1">
                        <Phone className="h-3 w-3" />
                        <span dir="ltr">{client.phone}</span>
                      </span>
                      {client.email && (
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 rounded-lg px-2.5 py-1">
                          <Mail className="h-3 w-3" />
                          <span dir="ltr" className="truncate max-w-[150px]">{client.email}</span>
                        </span>
                      )}
                      {client.notes && (
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 rounded-lg px-2.5 py-1">
                          <StickyNote className="h-3 w-3" />
                          <span className="truncate max-w-[160px]">{client.notes}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl" onClick={() => openEdit(client)}>
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    {deleteConfirm === client.id ? (
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl text-destructive" onClick={() => handleDelete(client.id)}>
                          <Check className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl" onClick={() => setDeleteConfirm(null)}>
                          <X className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    ) : (
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl text-muted-foreground hover:text-destructive" onClick={() => setDeleteConfirm(client.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Add/Edit Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingClient ? "تعديل بيانات العميل" : "إضافة عميل جديد"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label>الاسم الكامل *</Label>
                <Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="اسم العميل" />
              </div>
              <div>
                <Label>رقم الهاتف *</Label>
                <Input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="06XXXXXXXX" dir="ltr" />
              </div>
              <div>
                <Label>البريد الإلكتروني</Label>
                <Input value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="email@example.com" dir="ltr" />
              </div>
              <div>
                <Label>ملاحظات</Label>
                <Textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="ملاحظات خاصة بالعميل..." rows={3} />
              </div>
              <Button onClick={handleSave} className="w-full gradient-primary text-primary-foreground">
                {editingClient ? "حفظ التعديلات" : "إضافة العميل"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default ClientsPage;
