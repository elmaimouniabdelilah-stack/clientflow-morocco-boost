import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const Footer = () => (
  <footer className="py-14 bg-foreground" dir="rtl">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Star className="h-4 w-4 text-white fill-white" />
            </div>
            <p className="text-lg font-extrabold text-white">ClientFlow</p>
          </div>
          <p className="text-sm text-white/45 leading-relaxed max-w-sm">
            نظام ذكي لجمع التقييمات وإدارة العملاء. حوّل رضا عملائك إلى تقييمات إيجابية على Google بسهولة.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-white mb-4">روابط سريعة</p>
          <div className="space-y-3">
            <a href="/" className="block text-sm text-white/45 hover:text-white transition-colors">الرئيسية</a>
            <a href="#features" className="block text-sm text-white/45 hover:text-white transition-colors">المميزات</a>
            <a href="#pricing" className="block text-sm text-white/45 hover:text-white transition-colors">الأسعار</a>
            <a href="#faq" className="block text-sm text-white/45 hover:text-white transition-colors">الأسئلة الشائعة</a>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-white mb-4">حسابك</p>
          <div className="space-y-3">
            <Link to="/login" className="block text-sm text-white/45 hover:text-white transition-colors">تسجيل الدخول</Link>
            <Link to="/signup" className="block text-sm text-white/45 hover:text-white transition-colors">إنشاء حساب</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} ClientFlow. جميع الحقوق محفوظة.
        </p>
        <p className="text-xs text-white/30">
          مصمّم بـ ❤️ للمشاريع المغربية
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
