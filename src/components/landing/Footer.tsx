const Footer = () => (
  <footer className="py-12 bg-foreground">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-bold font-display text-primary-foreground">ClientFlow</p>
        <p className="text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} ClientFlow. Built for Moroccan businesses.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
