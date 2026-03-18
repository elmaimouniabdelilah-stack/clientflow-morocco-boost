import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, CheckCircle2, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex" dir="rtl">
      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-background">
        <div className="w-full max-w-sm">
          {/* Back to home */}
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
            <ArrowRight className="h-4 w-4" />
            العودة للرئيسية
          </Link>

          {/* Logo */}
          <div className="mb-8">
            <Link to="/" className="text-2xl font-extrabold gradient-text">ClientFlow</Link>
            <h1 className="text-2xl font-extrabold text-foreground mt-4">ابدأ تجربتك المجانية ✨</h1>
            <p className="text-sm text-muted-foreground mt-2">7 أيام مجاناً — بدون بطاقة ائتمان</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold">اسم المشروع</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="مثال: مقهى النجمة"
                className="h-12 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                dir="ltr"
                className="h-12 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-semibold">كلمة المرور</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                dir="ltr"
                className="h-12 rounded-xl"
              />
            </div>
            <Button className="w-full gradient-primary text-white h-12 rounded-xl text-base font-semibold shadow-md shadow-primary/20" asChild>
              <Link to="/dashboard">
                إنشاء حساب مجاني
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </form>

          {/* Trust */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
            {["بدون بطاقة ائتمان", "إلغاء في أي وقت"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                {t}
              </span>
            ))}
          </div>

          <p className="text-sm text-center text-muted-foreground mt-8">
            لديك حساب بالفعل؟{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">سجّل الدخول</Link>
          </p>
        </div>
      </div>

      {/* Left side - Branding */}
      <div className="hidden lg:flex flex-1 bg-teal-section relative overflow-hidden items-center justify-center p-12">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="relative z-10 text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl gradient-primary mx-auto flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
            <Sparkles className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight">
            حوّل رضا عملائك
            <br />
            إلى نمو حقيقي
          </h2>
          <p className="text-white/60 leading-relaxed mb-10">
            نظام ذكي لجمع التقييمات الإيجابية وحماية سمعتك على Google
          </p>

          {/* Features list */}
          <div className="space-y-4 text-right max-w-xs mx-auto">
            {[
              "جمع تقييمات من العملاء تلقائياً",
              "فلترة ذكية — الإيجابية تُنشر والسلبية تبقى خاصة",
              "لوحة تحكم شاملة لمتابعة كل شيء",
              "رمز QR فريد لمشروعك",
            ].map((feat) => (
              <div key={feat} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">{feat}</p>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="mt-10 bg-white/[0.06] backdrop-blur-sm rounded-2xl p-5 ring-1 ring-white/10">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-star text-star" />
              ))}
            </div>
            <p className="text-sm text-white/80 font-semibold">+2,500 مشروع يثق بنا</p>
            <p className="text-xs text-white/40 mt-1">94% نسبة رضا العملاء</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
