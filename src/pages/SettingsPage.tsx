import { useState } from "react";
import { Save, Building2, Clock, Wrench, Plus, Trash2, Link2, Copy, Check, Globe, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { iconLibrary, getIconComponent } from "@/lib/icons";


interface WorkDay {
  day: string;
  enabled: boolean;
  from: string;
  to: string;
}

interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
  enabled: boolean;
  iconId: string;
}

const SettingsPage = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const [bizName, setBizName] = useState("مطعمي");
  const [bizType, setBizType] = useState("مطعم");
  const [bizPhone, setBizPhone] = useState("0522334455");
  const [bizEmail, setBizEmail] = useState("contact@myrestaurant.ma");
  const [bizAddress, setBizAddress] = useState("شارع محمد الخامس، الدار البيضاء");
  const [bizDescription, setBizDescription] = useState("مطعم مغربي عصري يقدم أشهى الأطباق التقليدية والعصرية");
  const [googleUrl, setGoogleUrl] = useState("https://g.page/my-restaurant/review");

  const [workDays, setWorkDays] = useState<WorkDay[]>([
    { day: "الإثنين", enabled: true, from: "09:00", to: "18:00" },
    { day: "الثلاثاء", enabled: true, from: "09:00", to: "18:00" },
    { day: "الأربعاء", enabled: true, from: "09:00", to: "18:00" },
    { day: "الخميس", enabled: true, from: "09:00", to: "18:00" },
    { day: "الجمعة", enabled: true, from: "09:00", to: "13:00" },
    { day: "السبت", enabled: true, from: "10:00", to: "16:00" },
    { day: "الأحد", enabled: false, from: "09:00", to: "18:00" },
  ]);

  const [services, setServices] = useState<Service[]>([
    { id: "1", name: "استشارة", duration: "30", price: "100", enabled: true, iconId: "briefcase" },
    { id: "2", name: "حلاقة", duration: "45", price: "80", enabled: true, iconId: "scissors" },
    { id: "3", name: "تنظيف", duration: "60", price: "150", enabled: true, iconId: "sparkles" },
    { id: "4", name: "علاج", duration: "45", price: "200", enabled: true, iconId: "heart" },
    { id: "5", name: "فحص", duration: "30", price: "120", enabled: true, iconId: "stethoscope" },
  ]);

  const [iconSearch, setIconSearch] = useState("");

  const updateWorkDay = (index: number, field: keyof WorkDay, value: any) => {
    setWorkDays(workDays.map((d, i) => i === index ? { ...d, [field]: value } : d));
  };

  const updateService = (id: string, field: keyof Service, value: any) => {
    setServices(services.map((s) => s.id === id ? { ...s, [field]: value } : s));
  };

  const addService = () => {
    setServices([...services, { id: Date.now().toString(), name: "", duration: "30", price: "", enabled: true, iconId: "sparkles" }]);
  };

  const removeService = (id: string) => {
    setServices(services.filter((s) => s.id !== id));
  };

  const handleSave = () => {
    toast.success("تم حفظ الإعدادات بنجاح ✓");
  };

  const copyLink = (link: string, id: string) => {
    navigator.clipboard.writeText(link);
    setCopied(id);
    toast.success("تم نسخ الرابط!");
    setTimeout(() => setCopied(null), 2000);
  };

  const filteredIcons = iconLibrary.filter((i) =>
    i.label.includes(iconSearch) || i.id.includes(iconSearch)
  );

  const bookingLink = `${window.location.origin}/book?biz=${encodeURIComponent(bizName)}`;
  const reviewLink = `${window.location.origin}/review?biz=${encodeURIComponent(bizName)}&google=${encodeURIComponent(googleUrl)}`;

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">الإعدادات</h1>
            <p className="text-sm text-muted-foreground mt-1">إعدادات المشروع والخدمات وساعات العمل</p>
          </div>
          <Button onClick={handleSave} className="gradient-primary text-primary-foreground">
            <Save className="ml-2 h-4 w-4" />
            حفظ التغييرات
          </Button>
        </div>

        {/* Business Info */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-2 mb-5">
            <Building2 className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">معلومات المشروع</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label>اسم المشروع</Label>
              <Input value={bizName} onChange={(e) => setBizName(e.target.value)} />
            </div>
            <div>
              <Label>نوع النشاط</Label>
              <Input value={bizType} onChange={(e) => setBizType(e.target.value)} placeholder="مطعم، صالون، عيادة..." />
            </div>
            <div>
              <Label>رقم الهاتف</Label>
              <Input value={bizPhone} onChange={(e) => setBizPhone(e.target.value)} dir="ltr" />
            </div>
            <div>
              <Label>البريد الإلكتروني</Label>
              <Input value={bizEmail} onChange={(e) => setBizEmail(e.target.value)} dir="ltr" />
            </div>
            <div className="sm:col-span-2">
              <Label>العنوان</Label>
              <Input value={bizAddress} onChange={(e) => setBizAddress(e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <Label>وصف المشروع</Label>
              <Textarea value={bizDescription} onChange={(e) => setBizDescription(e.target.value)} rows={2} />
            </div>
            <div className="sm:col-span-2">
              <Label>رابط Google Reviews</Label>
              <Input value={googleUrl} onChange={(e) => setGoogleUrl(e.target.value)} dir="ltr" />
            </div>
          </div>
        </div>

        {/* Public Links */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-2 mb-5">
            <Globe className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">الروابط العامة</h2>
          </div>
          <div className="space-y-3">
            {[
              { id: "booking", label: "رابط الحجز", link: bookingLink, color: "text-primary" },
              { id: "review", label: "رابط التقييم", link: reviewLink, color: "text-secondary" },
            ].map((l) => (
              <div key={l.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <Link2 className={`h-4 w-4 ${l.color} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground">{l.label}</p>
                  <p className="text-[11px] text-muted-foreground truncate" dir="ltr">{l.link}</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => copyLink(l.link, l.id)}>
                  {copied === l.id ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Work Hours */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-2 mb-5">
            <Clock className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">ساعات العمل</h2>
          </div>
          <div className="space-y-3">
            {workDays.map((wd, i) => (
              <div key={wd.day} className="flex items-center gap-3">
                <Switch checked={wd.enabled} onCheckedChange={(v) => updateWorkDay(i, "enabled", v)} />
                <span className={`w-20 text-sm font-medium ${wd.enabled ? "text-foreground" : "text-muted-foreground"}`}>{wd.day}</span>
                {wd.enabled ? (
                  <div className="flex items-center gap-2 flex-1">
                    <Input type="time" value={wd.from} onChange={(e) => updateWorkDay(i, "from", e.target.value)} className="w-28 text-center text-sm" dir="ltr" />
                    <span className="text-muted-foreground text-sm">—</span>
                    <Input type="time" value={wd.to} onChange={(e) => updateWorkDay(i, "to", e.target.value)} className="w-28 text-center text-sm" dir="ltr" />
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground">مغلق</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services with Icon Picker */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">الخدمات</h2>
            </div>
            <Button variant="outline" size="sm" onClick={addService}>
              <Plus className="ml-1 h-3.5 w-3.5" />
              إضافة خدمة
            </Button>
          </div>

          <div className="space-y-3">
            {services.map((service) => {
              const IconComp = getIconComponent(service.iconId);
              return (
                <div key={service.id} className={`rounded-xl border p-4 transition-colors ${service.enabled ? "border-border" : "border-border/50 bg-muted/30"}`}>
                  <div className="flex items-center gap-3">
                    {/* Icon Picker */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <button className="flex-shrink-0 w-11 h-11 rounded-xl gradient-primary flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
                          <IconComp className="h-5 w-5 text-primary-foreground" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-72 p-3" align="start">
                        <p className="text-sm font-semibold text-foreground mb-2">اختر أيقونة</p>
                        <Input
                          value={iconSearch}
                          onChange={(e) => setIconSearch(e.target.value)}
                          placeholder="بحث عن أيقونة..."
                          className="mb-3 text-sm"
                        />
                        <div className="grid grid-cols-7 gap-1 max-h-48 overflow-y-auto">
                          {filteredIcons.map((item) => {
                            const IC = item.icon;
                            const isSelected = service.iconId === item.id;
                            return (
                              <button
                                key={item.id}
                                onClick={() => {
                                  updateService(service.id, "iconId", item.id);
                                  setIconSearch("");
                                }}
                                title={item.label}
                                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150 ${
                                  isSelected
                                    ? "gradient-primary text-primary-foreground shadow-md"
                                    : "hover:bg-muted text-foreground"
                                }`}
                              >
                                <IC className="h-4 w-4" />
                              </button>
                            );
                          })}
                        </div>
                        {filteredIcons.length === 0 && (
                          <p className="text-xs text-muted-foreground text-center py-4">لا توجد نتائج</p>
                        )}
                      </PopoverContent>
                    </Popover>

                    <Switch checked={service.enabled} onCheckedChange={(v) => updateService(service.id, "enabled", v)} />

                    <Input
                      value={service.name}
                      onChange={(e) => updateService(service.id, "name", e.target.value)}
                      placeholder="اسم الخدمة"
                      className="flex-1"
                    />

                    <div className="flex items-center gap-1">
                      <Input value={service.duration} onChange={(e) => updateService(service.id, "duration", e.target.value)} className="w-16 text-center text-sm" dir="ltr" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">دقيقة</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Input value={service.price} onChange={(e) => updateService(service.id, "price", e.target.value)} placeholder="0" className="w-20 text-center text-sm" dir="ltr" />
                      <span className="text-xs text-muted-foreground">درهم</span>
                    </div>

                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive flex-shrink-0" onClick={() => removeService(service.id)}>
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end pb-8">
          <Button onClick={handleSave} className="gradient-primary text-primary-foreground px-8">
            <Save className="ml-2 h-4 w-4" />
            حفظ جميع التغييرات
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
