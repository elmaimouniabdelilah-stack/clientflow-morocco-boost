import { motion } from "framer-motion";
import { Users, Star, Calendar, MessageCircle, BarChart3, Shield } from "lucide-react";

const features = [
  { icon: Users, title: "Customer Management", desc: "Track every client with notes, history, and contact info in one place." },
  { icon: Star, title: "Review Funnel", desc: "Smart links that route happy clients to Google Reviews and capture negative feedback privately." },
  { icon: Calendar, title: "Booking System", desc: "Calendar-based scheduling with auto-confirmation and reminders." },
  { icon: MessageCircle, title: "WhatsApp Integration", desc: "Send review requests and booking reminders directly via WhatsApp." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Track customer growth, review trends, and booking performance at a glance." },
  { icon: Shield, title: "Admin Panel", desc: "Full control over users, activity monitoring, and business settings." },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Features</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Everything you need to <span className="gradient-text">grow</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-xl border border-border bg-background p-6 transition-shadow duration-200 hover:shadow-[var(--shadow-elevated)]"
          >
            <div className="inline-flex items-center justify-center rounded-lg gradient-primary p-2.5 mb-4">
              <f.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
