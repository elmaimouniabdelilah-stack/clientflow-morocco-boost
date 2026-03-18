import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Calendar, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-card pt-20 pb-32">
    {/* Background gradient orbs */}
    <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl gradient-primary" />
    <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl gradient-primary" />
    
    <div className="container relative z-10 mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <Star className="h-3.5 w-3.5" />
          Built for Moroccan businesses
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Manage Your Clients,{" "}
          <span className="gradient-text">Boost Your Reviews</span>,{" "}
          Grow Your Business
        </h1>
        
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          All-in-one system for restaurants, salons, clinics and freelancers in Morocco. 
          Collect reviews, handle bookings, and track growth — effortlessly.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gradient-primary text-primary-foreground px-8 h-12 text-base" asChild>
            <Link to="/signup">Start Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 text-base" asChild>
            <a href="#features">See How It Works</a>
          </Button>
        </div>
      </motion.div>

      {/* Glassmorphism dashboard preview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="glass-strong rounded-2xl p-6 shadow-[var(--shadow-elevated)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Users, label: "Total Clients", value: "1,247", color: "text-primary" },
              { icon: Star, label: "Reviews", value: "892", color: "text-secondary" },
              { icon: Calendar, label: "Bookings", value: "156", color: "text-accent" },
              { icon: BarChart3, label: "Growth", value: "+23%", color: "text-accent" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-card p-4 shadow-[var(--shadow-card)]">
                <stat.icon className={`h-5 w-5 ${stat.color} mb-2`} />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
