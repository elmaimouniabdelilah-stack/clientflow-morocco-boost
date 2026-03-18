import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-bold font-display gradient-text">ClientFlow</Link>
          <p className="text-sm text-muted-foreground mt-2">مرحبًا بعودتك</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" dir="ltr" />
          </div>
          <div>
            <Label htmlFor="password">كلمة المرور</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" dir="ltr" />
          </div>
          <Button className="w-full gradient-primary text-primary-foreground" asChild>
            <Link to="/dashboard">تسجيل الدخول</Link>
          </Button>
        </form>
        <p className="text-xs text-center text-muted-foreground mt-6">
          ليس لديك حساب؟ <Link to="/signup" className="text-primary font-medium">سجّل الآن</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
