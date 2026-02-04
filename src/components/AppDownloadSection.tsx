import { Smartphone, Check } from "lucide-react";

const AppDownloadSection = () => {
  const features = [
    "Book appointments instantly",
    "Video consult with doctors",
    "Order medicines with discounts",
    "Track your health records",
    "Get personalized health tips",
    "24/7 customer support",
  ];

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative bg-gradient-to-br from-primary via-primary to-primary-dark rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[size:40px_40px]" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
            {/* Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-foreground mb-6">
                Download Our App
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Healthcare at Your Fingertips
              </h2>
              
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                Download the Doctors Arsenal app and access world-class healthcare services anytime, anywhere.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-primary-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-black hover:bg-gray-900 rounded-xl transition-colors"
                >
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-lg font-semibold text-white">App Store</div>
                  </div>
                </a>
                
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-black hover:bg-gray-900 rounded-xl transition-colors"
                >
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-lg font-semibold text-white">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Phone Mockup */}
            <div className="relative hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-72 h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone screen content mockup */}
                    <div className="p-6 text-white">
                      <div className="flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-bold">D</span>
                        </div>
                        <span className="font-semibold">Doctors Arsenal</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4">Good Morning!</h3>
                      <p className="text-sm text-white/80 mb-6">How are you feeling today?</p>
                      
                      <div className="space-y-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/30 rounded-full" />
                            <div>
                              <p className="text-sm font-medium">Upcoming Appointment</p>
                              <p className="text-xs text-white/70">Dr. Sarah • 2:30 PM</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <Smartphone className="w-6 h-6 mx-auto mb-2" />
                            <p className="text-xs">Video Consult</p>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                            <Smartphone className="w-6 h-6 mx-auto mb-2" />
                            <p className="text-xs">Book Now</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -left-20 top-20 bg-white rounded-2xl shadow-xl p-4 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm font-medium text-heading">Dr. Online Now</span>
                  </div>
                </div>
                
                <div className="absolute -right-16 bottom-32 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: "2s" }}>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-heading">Medicine Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
