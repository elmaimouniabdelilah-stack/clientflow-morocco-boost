import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Youssef B.",
    role: "Restaurant Owner, Casablanca",
    text: "ClientFlow doubled our Google reviews in just 2 months. The review funnel is genius — negative feedback stays private!",
    rating: 5,
  },
  {
    name: "Fatima Z.",
    role: "Salon Owner, Marrakech",
    text: "I used to lose track of appointments daily. Now everything is organized, and my clients get automatic reminders.",
    rating: 5,
  },
  {
    name: "Amine K.",
    role: "Freelance Consultant, Rabat",
    text: "The analytics dashboard shows me exactly where my business is growing. It's like having a business coach in my pocket.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Loved by businesses across Morocco
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-4">"{t.text}"</p>
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
