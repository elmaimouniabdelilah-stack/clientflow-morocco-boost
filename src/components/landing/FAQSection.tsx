import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "هل يحتاج العميل تحميل تطبيق؟",
    a: "لا، العميل يمسح رمز QR فقط ويُوجَّه مباشرة لصفحة التقييم عبر المتصفح. لا حاجة لتطبيق أو تسجيل.",
  },
  {
    q: "كيف يتم فلترة التقييمات السلبية؟",
    a: "النظام يطلب من العميل تقييم تجربته أولاً. إذا كان التقييم 4-5 نجوم يُوجَّه لـ Google. أقل من ذلك يبقى التقييم داخليًا وتتلقى إشعاراً.",
  },
  {
    q: "هل يعمل مع أي نوع نشاط تجاري؟",
    a: "نعم! ClientFlow مصمّم للمطاعم، الصالونات، العيادات، المتاجر، المستشارين وأي نشاط يتعامل مع عملاء.",
  },
  {
    q: "هل يمكنني إلغاء الاشتراك في أي وقت؟",
    a: "بالتأكيد. يمكنك إلغاء اشتراكك في أي وقت بدون أي رسوم إضافية أو عقوبات.",
  },
  {
    q: "هل بياناتي آمنة؟",
    a: "نعم، نستخدم تشفير SSL وقاعدة بيانات آمنة لحماية جميع بياناتك وبيانات عملائك بأعلى المعايير.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-background" dir="rtl">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/[0.12] rounded-full px-4 py-2 text-sm text-primary font-medium mb-5">
          الأسئلة الشائعة
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground">
          أسئلة <span className="gradient-text">متكررة</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border/50 rounded-xl px-6 bg-card data-[state=open]:shadow-sm data-[state=open]:border-primary/15 transition-all"
            >
              <AccordionTrigger className="text-[15px] font-bold text-foreground hover:no-underline py-5 text-right">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
