import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  PhoneCall, 
  Calendar, 
  Users, 
  ChevronRight, 
  Star, 
  Award, 
  Activity, 
  ShieldCheck, 
  Baby, 
  Ear, 
  Eye, 
  MoveRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Hero component
const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const backgroundImages = [
    "/src/assets/images/HOMEPAGE 1.webp",
    "/src/assets/images/HOMEPAGE 2.jpg",
    "/src/assets/images/HOMEPAGE 3.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImage}
            src={backgroundImages[currentImage]} 
            alt="Oak Specialist Hospital Hero" 
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-900/60 to-red-900/40 lg:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-0">
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="bg-red-600 hover:bg-red-700 text-white border-none px-4 py-1.5 mb-6 text-sm uppercase tracking-wider shadow-lg shadow-red-900/20">
              Quality Healthcare in Ghana
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter uppercase italic">
              Compassionate Care, <br />
              <span className="text-red-400 font-light not-italic tracking-normal lowercase">World-Class Specialists.</span>
            </h1>
            <p className="text-lg md:text-xl text-red-100 mb-10 max-w-xl leading-relaxed mx-auto md:mx-0">
              Experience healthcare excellence at Oak Specialist Hospital. Our team of pioneers provides precise medical solutions with a human touch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/book" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-red-900 hover:bg-red-50 px-8 py-7 rounded-2xl text-lg font-bold shadow-2xl transition-transform hover:scale-105 group h-auto uppercase tracking-widest text-xs">
                  Book Appointment
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/emergency" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 px-8 py-7 rounded-2xl text-lg font-bold h-auto uppercase tracking-widest text-xs backdrop-blur-sm">
                  Emergency Services
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 md:mt-20 grid grid-cols-2 md:flex md:flex-wrap items-center gap-6 md:gap-10 border-t border-white/10 pt-8"
          >
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <ShieldCheck className="text-red-400 w-8 h-8" />
              <div className="text-white text-left">
                <p className="font-bold text-base md:text-lg">ISO 9001</p>
                <p className="text-[10px] uppercase tracking-widest text-red-200">Certified Facility</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white justify-center md:justify-start">
              <Award className="text-red-400 w-8 h-8" />
              <div className="text-left">
                <p className="font-bold text-base md:text-lg">Top 100</p>
                <p className="text-[10px] uppercase tracking-widest text-red-200">Africa's Best</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-white justify-center md:justify-start">
              <Users className="text-red-400 w-8 h-8" />
              <div className="text-left">
                <p className="font-bold text-base md:text-lg">50,000+</p>
                <p className="text-[10px] uppercase tracking-widest text-red-200">Happy Patients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const QuickBooking = () => {
  return (
    <div className="container mx-auto px-4 -mt-8 md:-mt-12 relative z-20">
      <Card className="shadow-2xl border-none overflow-hidden bg-white/95 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-5 md:p-6 hover:bg-slate-50 transition-colors cursor-pointer">
              <p className="text-[10px] md:text-xs uppercase text-slate-400 font-bold tracking-widest mb-2 flex items-center gap-2">
                <Calendar className="w-3 h-3" /> Booking
              </p>
              <p className="font-semibold text-red-900">Schedule Visit</p>
              <p className="text-[10px] md:text-xs text-slate-500">Pick preferred specialist</p>
            </div>
            <div className="p-5 md:p-6 hover:bg-slate-50 transition-colors cursor-pointer">
              <p className="text-[10px] md:text-xs uppercase text-slate-400 font-bold tracking-widest mb-2 flex items-center gap-2">
                <PhoneCall className="w-3 h-3" /> Emergency
              </p>
              <p className="font-semibold text-red-600">+233 30 281 1211</p>
              <p className="text-[10px] md:text-xs text-slate-500">24/7 Ambulance Dispatch</p>
            </div>
            <div className="p-5 md:p-6 hover:bg-slate-50 transition-colors cursor-pointer">
              <p className="text-[10px] md:text-xs uppercase text-slate-400 font-bold tracking-widest mb-2 flex items-center gap-2">
                <Activity className="w-3 h-3" /> Records
              </p>
              <p className="font-semibold text-red-900">Patient Portal</p>
              <p className="text-[10px] md:text-xs text-slate-500">Access results & history</p>
            </div>
            <div className="bg-red-600 p-5 md:p-6 flex flex-col justify-center">
              <Button className="w-full bg-white text-red-600 hover:bg-red-50 font-bold text-xs md:text-sm">
                Find Our Location
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const DepartmentSection = () => {
  const depts = [
    { title: 'Cardiology', icon: <Activity className="w-6 h-6" />, desc: 'Advanced heart care and surgery services.' },
    { title: 'Maternal Care', icon: <Baby className="w-6 h-6" />, desc: 'Safe delivery and prenatal expertise.' },
    { title: 'ENT Specialists', icon: <Ear className="w-6 h-6" />, desc: 'Comprehensive Ear, Nose, and Throat diagnostics.' },
    { title: 'Ophthalmology', icon: <Eye className="w-6 h-6" />, desc: 'Precision vision and eye laser treatment.' },
    { title: 'Orthopedics', icon: <Award className="w-6 h-6" />, desc: 'Joint replacement and physical therapy.' },
    { title: 'Diagnostics', icon: <Users className="w-6 h-6" />, desc: 'High-res MRI, CT Scan and Blood Lab.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div className="text-center md:text-left">
            <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Our Excellence</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Specialized Medical <br className="hidden sm:block" />Departments.</h2>
          </div>
          <Link to="/departments" className="mt-8 md:mt-0 group flex items-center justify-center md:justify-start gap-2 font-semibold text-red-600">
            View All Services <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depts.map((dept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-500 border-slate-100 overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-slate-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-red-600 transition-colors">
                    {dept.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {dept.desc}
                  </p>
                  <Link to="/departments" className="text-xs font-bold uppercase tracking-widest text-red-600 flex items-center group/btn">
                    Read More <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
       <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4 underline underline-offset-8">Patient Stories</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Trust from those we serve.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow italic">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  "The doctors at Oak Specialist were incredible. They took the time to explain every step of my surgery. I felt safe and cared for from the moment I entered."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold overflow-hidden">
                     <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Patient" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 not-italic">John A. Boateng</h4>
                    <p className="text-xs not-italic text-slate-400 italic">Accra, Ghana</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <QuickBooking />
      <DepartmentSection />
      
      {/* Featured Doctors Preview */}
      <section className="py-16 md:py-24 bg-red-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="text-center lg:text-left">
              <p className="text-red-400 font-bold uppercase tracking-widest text-xs mb-4">The Oak Team</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">Our Specialists are <br /><span className="text-red-400 italic">Leaders in Medicine.</span></h2>
              <p className="text-slate-300 mb-8 md:mb-10 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Oak Specialist Hospital is home to top-rated consultants in cardiology, surgery, and maternal health. Our doctors are not just practitioners; they are researchers and pioneers.
              </p>
              <Link to="/doctors">
                <Button className="bg-red-600 hover:bg-red-700 h-14 md:h-16 px-8 md:px-10 rounded-full text-base md:text-lg font-bold">
                  Meet Our Doctors
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/10 aspect-square flex flex-col justify-end">
                   <p className="font-bold text-xl md:text-2xl text-red-400">12+</p>
                   <p className="text-[10px] md:text-sm text-slate-400">Average Years Experience</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/10 flex items-center justify-center aspect-square text-center">
                   <p className="font-bold text-sm md:text-lg leading-tight">Exemplary Surgical Rates</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 pt-6 md:pt-8">
                 <div className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/10 flex flex-col items-center justify-center bg-red-500/20 aspect-square">
                   <p className="font-bold text-2xl md:text-3xl">98%</p>
                   <p className="text-[10px] md:text-sm text-center opacity-80">Patient Satisfaction</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/10 aspect-square flex flex-col justify-start">
                   <Users className="w-6 h-6 md:w-10 md:h-10 text-red-400 mb-3 md:mb-4" />
                   <p className="font-bold text-sm md:text-lg leading-tight text-white/90">Multi-disciplinary Approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* Insurance Partners */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-12">Authorized Insurance Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholder logos */}
            <div className="font-black text-2xl text-slate-900 tracking-tighter">ALLIANZ</div>
            <div className="font-black text-2xl text-slate-900 tracking-tighter italic">AXA</div>
            <div className="font-black text-2xl text-slate-900 tracking-tighter">METCARE</div>
            <div className="font-black text-2xl text-slate-900 tracking-tighter">GHLI</div>
            <div className="font-black text-2xl text-slate-900 tracking-tighter">PRUDENTIAL</div>
          </div>
        </div>
      </section>
    </div>
  );
}
