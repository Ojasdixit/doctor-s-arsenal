import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Doctors Arsenal": [
      "About Us",
      "Careers",
      "Blog",
      "Press",
      "Contact Us",
    ],
    "For Patients": [
      "Find Doctors",
      "Video Consultation",
      "Medicines",
      "Lab Tests",
      "Health Articles",
    ],
    "For Doctors": [
      "Join as Doctor",
      "Consult Benefits",
      "Doctor Login",
      "Health Feed",
      "Support",
    ],
    "Legal": [
      "Privacy Policy",
      "Terms of Service",
      "Healthcare Directory",
      "Sitemap",
      "Security",
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-heading text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">D</span>
              </div>
              <span className="text-xl font-bold">
                Doctors<span className="text-primary">Arsenal</span>
              </span>
            </a>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in healthcare. Connecting patients with the best doctors across the country.
            </p>
            
            <div className="space-y-3">
              <a href="mailto:support@doctorsarsenal.com" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>support@doctorsarsenal.com</span>
              </a>
              <a href="tel:+1800000000" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>1800-000-0000</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>123 Healthcare Avenue, Medical District, City - 100001</span>
              </div>
            </div>
          </div>
          
          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Doctors Arsenal. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
