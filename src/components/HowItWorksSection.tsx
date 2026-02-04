import { Search, UserCheck, Video, FileText } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Search a Doctor",
      description: "Browse through our extensive network of verified doctors by specialty, location, or availability.",
    },
    {
      icon: UserCheck,
      step: "02",
      title: "Check Doctor Profile",
      description: "View detailed profiles, qualifications, experience, patient reviews, and consultation fees.",
    },
    {
      icon: Video,
      step: "03",
      title: "Book Appointment",
      description: "Select a convenient time slot for video consultation or in-clinic visit and confirm your booking.",
    },
    {
      icon: FileText,
      step: "04",
      title: "Get Your Prescription",
      description: "Consult with the doctor and receive digital prescriptions, follow-up reminders, and health records.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-light rounded-full text-sm font-semibold text-primary mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
            Book Your Appointment in 4 Simple Steps
          </h2>
          <p className="text-lg text-body">
            Getting the healthcare you need has never been easier
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <div className="group text-center lg:text-left">
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-3xl bg-card border border-border-light shadow-card flex items-center justify-center group-hover:shadow-card-hover group-hover:border-primary/30 transition-all duration-300">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 gradient-hero rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-heading mb-3">
                  {item.title}
                </h3>
                <p className="text-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
