import { useState } from "react";
import { Users, Plus, Search, Phone, Mail, StickyNote, Pencil, Trash2, X, Check } from "lucide-react";
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

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">إدارة العملاء</h1>
            <p className="text-sm text-muted-foreground mt-1">{clients.length} عميل مسجّل</p>
          </div>
          <Button onClick={openAdd} className="gradient-primary text-primary-foreground">
            <Plus className="ml-2 h-4 w-4" />
            إضافة عميل
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="بحث بالاسم أو الهاتف أو البريد..."
            className="pr-9"
          />
        </div>

        {/* Client List Cards */}
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-12 text-center">
            <Users className="h-10 w-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">لا يوجد عملاء</p>
          </div>
        ) : (
          <div className="grid gap-3">
            {filtered.map((client) => (
              <div
                key={client.id}
                className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                        <span className="text-sm font-bold text-primary-foreground">{client.name.charAt(0)}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground truncate">{client.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {client.totalVisits} زيارة · آخر زيارة: {client.lastVisit}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5" />
                        <span dir="ltr">{client.phone}</span>
                      </span>
                      {client.email && (
                        <span className="inline-flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5" />
                          <span dir="ltr">{client.email}</span>
                        </span>
                      )}
                      {client.notes && (
                        <span className="inline-flex items-center gap-1.5">
                          <StickyNote className="h-3.5 w-3.5" />
                          <span className="truncate max-w-[200px]">{client.notes}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(client)}>
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    {deleteConfirm === client.id ? (
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => handleDelete(client.id)}>
                          <Check className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setDeleteConfirm(null)}>
                          <X className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    ) : (
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => setDeleteConfirm(client.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
