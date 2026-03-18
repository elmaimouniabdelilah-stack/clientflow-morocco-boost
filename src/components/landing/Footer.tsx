import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-10 bg-foreground">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <p className="text-lg font-bold text-white mb-2">ClientFlow</p>
          <p className="text-sm text-white/50">
            نظام ذكي لجمع التقييمات وإدارة العملاء للمشاريع المغربية.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white mb-3">روابط سريعة</p>
          <div className="space-y-2">
            <a href="#features" className="block text-sm text-white/50 hover:text-white transition-colors">المميزات</a>
            <a href="#pricing" className="block text-sm text-white/50 hover:text-white transition-colors">الأسعار</a>
            <a href="#faq" className="block text-sm text-white/50 hover:text-white transition-colors">الأسئلة الشائعة</a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white mb-3">حسابك</p>
          <div className="space-y-2">
            <Link to="/login" className="block text-sm text-white/50 hover:text-white transition-colors">تسجيل الدخول</Link>
            <Link to="/signup" className="block text-sm text-white/50 hover:text-white transition-colors">إنشاء حساب</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} ClientFlow. جميع الحقوق محفوظة.
        </p>
        <p className="text-xs text-white/40">
          مصمّم بـ ❤️ للمشاريع المغربية
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
