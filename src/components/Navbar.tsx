import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Find Doctors", href: "#doctors" },
    { name: "Video Consult", href: "#services" },
    { name: "Medicines", href: "#services" },
    { name: "Lab Tests", href: "#services" },
    { name: "Surgeries", href: "#services" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">D</span>
            </div>
            <span className="text-xl font-bold text-heading">
              Doctors<span className="text-primary">Arsenal</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-body hover:text-primary transition-colors duration-200 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+1800000000" className="flex items-center gap-2 text-body hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">1800-000-000</span>
            </a>
            <Button variant="outline" size="sm" className="font-semibold">
              Login
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-body hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border-light animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-3 px-4 text-body hover:text-primary hover:bg-surface rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-3 mt-4 px-4">
                <Button variant="outline" className="flex-1 font-semibold">
                  Login
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
