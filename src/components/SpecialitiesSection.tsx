import { 
  Heart, Brain, Bone, Eye, Baby, Stethoscope, 
  Smile, Activity, Pill, Ear, UserRound, Shield
} from "lucide-react";

const SpecialitiesSection = () => {
  const specialities = [
    { icon: Heart, name: "Cardiology", doctors: "250+ Doctors" },
    { icon: Brain, name: "Neurology", doctors: "180+ Doctors" },
    { icon: Bone, name: "Orthopedics", doctors: "320+ Doctors" },
    { icon: Eye, name: "Ophthalmology", doctors: "200+ Doctors" },
    { icon: Baby, name: "Pediatrics", doctors: "400+ Doctors" },
    { icon: Stethoscope, name: "General Physician", doctors: "500+ Doctors" },
    { icon: Smile, name: "Dentistry", doctors: "350+ Doctors" },
    { icon: Activity, name: "Gastroenterology", doctors: "150+ Doctors" },
    { icon: Pill, name: "Dermatology", doctors: "280+ Doctors" },
    { icon: Ear, name: "ENT", doctors: "190+ Doctors" },
    { icon: UserRound, name: "Gynecology", doctors: "420+ Doctors" },
    { icon: Shield, name: "Psychiatry", doctors: "120+ Doctors" },
  ];

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-light rounded-full text-sm font-semibold text-primary mb-4">
            Specialities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
            Consult Top Doctors Across Specialities
          </h2>
          <p className="text-lg text-body">
            Book appointments with verified doctors from 25+ specialities
          </p>
        </div>

        {/* Specialities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
          {specialities.map((specialty, index) => (
            <button
              key={specialty.name}
              className="group flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border-light hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <specialty.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-heading text-sm group-hover:text-primary transition-colors">
                  {specialty.name}
                </h3>
                <p className="text-xs text-muted mt-1">{specialty.doctors}</p>
              </div>
            </button>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            View All Specialities
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
