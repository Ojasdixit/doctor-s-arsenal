import { Star, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15 years",
      rating: 4.9,
      reviews: 450,
      location: "Downtown Medical Center",
      available: "Today",
      fee: "$150",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "12 years",
      rating: 4.8,
      reviews: 380,
      location: "City Hospital",
      available: "Tomorrow",
      fee: "$180",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Dr. Emily Williams",
      specialty: "Dermatologist",
      experience: "10 years",
      rating: 4.9,
      reviews: 520,
      location: "Skin Care Clinic",
      available: "Today",
      fee: "$120",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      experience: "18 years",
      rating: 4.7,
      reviews: 290,
      location: "Joint & Bone Center",
      available: "Wed, Jan 15",
      fee: "$200",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-primary-light rounded-full text-sm font-semibold text-primary mb-4">
              Top Rated
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
              Featured Doctors
            </h2>
            <p className="text-lg text-body max-w-2xl">
              Consult with our highly qualified and experienced doctors who are here to help you
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View all doctors
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.name}
              className="group bg-card rounded-2xl border border-border-light overflow-hidden hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                  {doctor.available}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold text-heading">{doctor.rating}</span>
                  <span className="text-sm text-muted">({doctor.reviews} reviews)</span>
                </div>
                
                <h3 className="text-lg font-bold text-heading mb-1 group-hover:text-primary transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">{doctor.specialty}</p>
                <p className="text-sm text-muted mb-3">{doctor.experience} experience</p>
                
                <div className="flex items-center gap-1 text-sm text-muted mb-4">
                  <MapPin className="w-4 h-4" />
                  {doctor.location}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border-light">
                  <div>
                    <span className="text-xs text-muted">Consultation fee</span>
                    <p className="text-lg font-bold text-heading">{doctor.fee}</p>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
