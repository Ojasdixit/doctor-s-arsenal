import { Search, MapPin, Video, Calendar, Pill, TestTube } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const quickActions = [
    { icon: Video, label: "Video Consult", desc: "In 15 mins" },
    { icon: Calendar, label: "Book Appointment", desc: "At clinic" },
    { icon: Pill, label: "Order Medicines", desc: "Home delivery" },
    { icon: TestTube, label: "Lab Tests", desc: "At home" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Trusted by 10M+ patients</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-heading leading-tight">
              Your Health, <br />
              <span className="text-gradient">Our Priority</span>
            </h1>
            
            <p className="text-lg text-body max-w-xl leading-relaxed">
              Connect with top doctors, book appointments, order medicines, and get lab tests done - all from the comfort of your home.
            </p>

            {/* Search Box */}
            <div className="bg-card rounded-2xl shadow-xl p-4 lg:p-6 space-y-4 border border-border-light">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full pl-12 pr-4 py-3 bg-surface rounded-xl border border-border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="text"
                    placeholder="Search doctors, specialities..."
                    className="w-full pl-12 pr-4 py-3 bg-surface rounded-xl border border-border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <Button className="w-full sm:w-auto px-8 py-6 text-base font-semibold bg-primary hover:bg-primary-dark text-primary-foreground rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30">
                Search Doctors
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {quickActions.map((action, index) => (
                <button
                  key={action.label}
                  className="group flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border-light hover:border-primary/30 hover:shadow-card transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <action.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-heading">{action.label}</span>
                  <span className="text-xs text-muted">{action.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-float">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop"
                alt="Doctor consultation"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -left-8 top-1/4 bg-card rounded-2xl shadow-xl p-4 border border-border-light animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Video className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading">Video Consult</p>
                    <p className="text-xs text-muted">Available 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 bg-card rounded-2xl shadow-xl p-4 border border-border-light animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading">Quick Booking</p>
                    <p className="text-xs text-muted">In 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
