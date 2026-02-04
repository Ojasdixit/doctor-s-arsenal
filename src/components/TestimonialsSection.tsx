import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Doctors Arsenal made it so easy to find a specialist for my mother. The video consultation feature is a game-changer. Highly recommended!",
    },
    {
      name: "Rahul Mehta",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Booking an appointment was incredibly smooth. The doctor was professional and the follow-up care was excellent. Will definitely use again.",
    },
    {
      name: "Anita Desai",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The medicine delivery service is fantastic! Got my prescriptions delivered within 2 hours. The discounts are an added bonus.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-light rounded-full text-sm font-semibold text-primary mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6">
            What Our Patients Say
          </h2>
          <p className="text-lg text-body">
            Trusted by millions of patients across the country
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 lg:p-8 border border-border-light shadow-card hover:shadow-card-hover transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-body leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-heading">{testimonial.name}</h4>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
