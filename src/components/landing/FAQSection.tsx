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
    a: "لا، العميل يمسح رمز QR فقط ويُوجَّه مباشرة لصفحة التقييم عبر المتصفح.",
  },
  {
    q: "كيف يتم فلترة التقييمات السلبية؟",
    a: "النظام يطلب من العميل تقييم تجربته أولاً. إذا كان التقييم 4-5 نجوم يُوجَّه لـ Google. أقل من ذلك يبقى التقييم داخليًا.",
  },
  {
    q: "هل يعمل مع أي نوع نشاط تجاري؟",
    a: "نعم! ClientFlow مصمّم للمطاعم، الصالونات، العيادات، المستشارين وأي نشاط يتعامل مع عملاء.",
  },
  {
    q: "هل يمكنني إلغاء الاشتراك في أي وقت؟",
    a: "بالتأكيد. يمكنك إلغاء اشتراكك في أي وقت بدون أي رسوم إضافية.",
  },
  {
    q: "هل بياناتي آمنة؟",
    a: "نعم، نستخدم تشفير SSL وقاعدة بيانات آمنة لحماية جميع بياناتك وبيانات عملائك.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-4">
          الأسئلة الشائعة
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
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
              className="border border-border/60 rounded-xl px-5 bg-background data-[state=open]:shadow-sm data-[state=open]:border-primary/20 transition-all"
            >
              <AccordionTrigger className="text-sm font-bold text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
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
