import { Users, Stethoscope, Building2, Star } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "10M+",
      label: "Happy Patients",
      description: "Trusted by millions",
    },
    {
      icon: Stethoscope,
      value: "50K+",
      label: "Verified Doctors",
      description: "Across 25+ specialities",
    },
    {
      icon: Building2,
      value: "3,000+",
      label: "Partner Hospitals",
      description: "Top-rated facilities",
    },
    {
      icon: Star,
      value: "4.9",
      label: "Average Rating",
      description: "Based on 5M+ reviews",
    },
  ];

  return (
    <section className="py-16 lg:py-20 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[size:40px_40px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-primary-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-primary-foreground/80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
