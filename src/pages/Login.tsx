import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

const Login = () => {
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
            <h1 className="text-2xl font-extrabold text-foreground mt-4">مرحبًا بعودتك 👋</h1>
            <p className="text-sm text-muted-foreground mt-2">سجّل دخولك لمتابعة إدارة تقييماتك</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-semibold">كلمة المرور</Label>
                <a href="#" className="text-xs text-primary hover:underline">نسيت كلمة المرور؟</a>
              </div>
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
                تسجيل الدخول
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </form>

          <p className="text-sm text-center text-muted-foreground mt-8">
            ليس لديك حساب؟{" "}
            <Link to="/signup" className="text-primary font-semibold hover:underline">سجّل الآن مجاناً</Link>
          </p>
        </div>
      </div>

      {/* Left side - Branding */}
      <div className="hidden lg:flex flex-1 gradient-primary relative overflow-hidden items-center justify-center p-12">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="relative z-10 text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm mx-auto flex items-center justify-center mb-8 ring-1 ring-white/20">
            <Star className="h-8 w-8 text-white fill-white" />
          </div>

          <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight">
            إدارة تقييماتك
            <br />
            أصبحت أسهل
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            انضم لأكثر من 2,500 مشروع يستخدم ClientFlow لتحسين سمعتهم على Google
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "+50K", label: "تقييم" },
              { value: "94%", label: "رضا" },
              { value: "+2.5K", label: "مستخدم" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 ring-1 ring-white/10">
                <p className="text-xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl p-5 ring-1 ring-white/10 text-right">
            <div className="flex gap-0.5 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-star text-star" />
              ))}
            </div>
            <p className="text-sm text-white/90 leading-relaxed mb-3">
              "ClientFlow ضاعف تقييماتنا على Google في شهرين. نظام عبقري!"
            </p>
            <p className="text-xs text-white/60 font-semibold">— يوسف ب.، صاحب مطعم</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
