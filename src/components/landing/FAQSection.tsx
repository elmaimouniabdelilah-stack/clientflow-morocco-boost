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
  <section id="faq" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          الأسئلة الشائعة
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
              className="border border-border rounded-xl px-5 data-[state=open]:bg-muted/30"
            >
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
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
