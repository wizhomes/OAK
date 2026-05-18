import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight, ShieldCheck, Heart, Award, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Sub-hero */}
      <section className="bg-slate-900 py-20 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/10 blur-[150px] rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Badge className="bg-red-600 mb-6 px-4 py-1.5 uppercase transition-transform hover:scale-105">About Oak Hospital</Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Our Story, Our Vision, <br /><span className="text-red-400">Your Health.</span></h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Oak Specialist Hospital was founded on the principle that every Ghanaian deserves access to specialist medical care that rivals the best in the world.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-2 text-red-600 font-bold mb-6 italic underline underline-offset-4">
                <Heart className="w-5 h-5 fill-current" /> Caring for generations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">Founded on Excellence, <br />Driven by Innovation.</h2>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                Since our inception, Oak Specialist Hospital has grown into a multi-disciplinary medical center of excellence. We represent more than just a hospital; we are a community of caregivers dedicated to the wellbeing of our patients.
              </p>
              
              <div className="space-y-6">
                {[
                  "Patient-centric specialized medical approach",
                  "State-of-the-art diagnostic and surgical equipment",
                  "Ethical practices with transparent care pathways",
                  "Continuing medical education for all staff"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-slate-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-200 rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" alt="Hospital Building" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-600 rounded-[40px] -z-0 hidden md:block"></div>
              <Card className="absolute -bottom-6 -right-6 z-20 bg-red-600 border-none text-white p-8 rounded-3xl hidden md:block shadow-xl">
                <p className="text-5xl font-black mb-1">15+</p>
                <p className="text-sm font-bold uppercase tracking-widest text-red-100">Years of Legacy</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Core Values.</h2>
            <p className="text-slate-500">The pillars that sustain our commitment to your health.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Integrity", desc: "We are committed to the highest standards of ethics and professionalism in all our patient interactions.", icon: <ShieldCheck className="w-8 h-8 text-red-600" /> },
              { title: "Trust", desc: "Building lasting relationships through transparent medical advice and compassionate care.", icon: <Heart className="w-8 h-8 text-red-600" /> },
              { title: "Excellence", desc: "Relentless pursuit of clinical quality and innovation in specialist medical fields.", icon: <Award className="w-8 h-8 text-red-600" /> },
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="mb-6 w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed italic">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
