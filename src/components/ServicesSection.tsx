import { Video, Calendar, Pill, TestTube, Stethoscope, Activity, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Video,
      title: "Video Consultation",
      description: "Connect with experienced doctors from the comfort of your home through secure video calls.",
      features: ["Available 24/7", "Instant prescriptions", "Follow-up reminders"],
      color: "bg-teal-500",
      lightColor: "bg-teal-50",
    },
    {
      icon: Calendar,
      title: "Book Appointments",
      description: "Schedule in-clinic visits with top specialists at your preferred time and location.",
      features: ["10,000+ doctors", "Same day slots", "Free cancellation"],
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
    },
    {
      icon: Pill,
      title: "Order Medicines",
      description: "Get genuine medicines delivered to your doorstep with discounts up to 25%.",
      features: ["Genuine products", "Express delivery", "Easy returns"],
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
    },
    {
      icon: TestTube,
      title: "Lab Tests at Home",
      description: "Book diagnostic tests and get samples collected from your home by trained professionals.",
      features: ["Home collection", "Digital reports", "100+ tests"],
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
    },
    {
      icon: Stethoscope,
      title: "Health Checkups",
      description: "Comprehensive health packages designed by experts to keep you in the best shape.",
      features: ["Full body checkup", "Preventive care", "Expert analysis"],
      color: "bg-pink-500",
      lightColor: "bg-pink-50",
    },
    {
      icon: Activity,
      title: "Surgeries",
      description: "End-to-end surgical care with top surgeons, hospitals, and post-surgery support.",
      features: ["50+ procedures", "EMI available", "Free follow-up"],
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-light rounded-full text-sm font-semibold text-primary mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
            Complete Healthcare Solutions
          </h2>
          <p className="text-lg text-body">
            From online consultations to medicine delivery, we've got all your healthcare needs covered under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border-light hover:border-primary/20 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${service.lightColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color.replace('bg-', 'text-')}`} />
              </div>
              
              <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-body mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
