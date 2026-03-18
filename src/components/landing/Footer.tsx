import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-12 bg-foreground">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <p className="text-lg font-extrabold text-white mb-3">ClientFlow</p>
          <p className="text-sm text-white/50 leading-relaxed">
            نظام ذكي لجمع التقييمات وإدارة العملاء للمشاريع المغربية.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-white mb-4">روابط سريعة</p>
          <div className="space-y-2.5">
            <a href="#features" className="block text-sm text-white/50 hover:text-white transition-colors">المميزات</a>
            <a href="#pricing" className="block text-sm text-white/50 hover:text-white transition-colors">الأسعار</a>
            <a href="#faq" className="block text-sm text-white/50 hover:text-white transition-colors">الأسئلة الشائعة</a>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-white mb-4">حسابك</p>
          <div className="space-y-2.5">
            <Link to="/login" className="block text-sm text-white/50 hover:text-white transition-colors">تسجيل الدخول</Link>
            <Link to="/signup" className="block text-sm text-white/50 hover:text-white transition-colors">إنشاء حساب</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} ClientFlow. جميع الحقوق محفوظة.
        </p>
        <p className="text-xs text-white/35">
          مصمّم بـ ❤️ للمشاريع المغربية
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
