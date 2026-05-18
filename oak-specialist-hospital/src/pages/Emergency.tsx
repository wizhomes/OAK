import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, AlertCircle, Syringe, ShieldAlert, HeartPulse, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Emergency() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Red Alert Banner */}
      <section className="bg-red-600 py-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="w-8 h-8 animate-pulse" />
              <Badge className="bg-white text-red-600 font-black px-4 py-1.5 uppercase transition-transform hover:scale-105">24/7 Rapid Response</Badge>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic">Emergency? <br /><span className="text-red-100">Call Now.</span></h1>
            <p className="text-red-100 text-xl font-medium leading-relaxed italic">
              Our trauma team is standing by. We provide immediate medical intervention for critical cases, accidents, and life-threatening conditions.
            </p>
          </div>
          <div className="flex flex-col items-center">
             <a href="tel:+233302811211" className="bg-white text-red-600 p-10 rounded-[40px] shadow-2xl hover:scale-105 transition-transform flex flex-col items-center text-center">
                <Phone className="w-12 h-12 mb-4" />
                <span className="text-3xl font-black tracking-tighter italic">+233 30 281 1211</span>
                <span className="text-xs uppercase font-bold tracking-[0.2em] mt-1 text-red-400">Ambulance Dispatch</span>
             </a>
             <p className="mt-6 text-red-100 text-xs font-bold uppercase tracking-widest italic animate-bounce">Average response time: 8-12 mins</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Trauma Care", desc: "Equipped to handle severe injuries, fractures, and road accidents with zero delay.", icon: <HeartPulse className="text-red-600" /> },
              { title: "Ambulance Team", desc: "Advanced Life Support (ALS) vehicles with onboard monitoring and stabilization.", icon: <ShieldAlert className="text-red-600" /> },
              { title: "Urgent Surgery", desc: "Operation theaters always on standby for life-saving emergency procedures.", icon: <Syringe className="text-red-600" /> },
            ].map((s, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[32px] border border-slate-100 hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">{s.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed italic">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Triage Info */}
      <section className="py-24 bg-slate-950 text-white rounded-[40px] mx-4 mb-20">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="aspect-video bg-slate-900 rounded-[40px] overflow-hidden border border-white/10 relative">
                 <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80" alt="Specialist" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 flex items-center justify-center p-12">
                    <p className="text-white text-3xl font-light italic leading-snug">"Every second counts. Our triage protocol ensures the most critical cases are treated in under 60 seconds."</p>
                 </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-8 italic uppercase tracking-tighter">Recognizing <br /><span className="text-red-500">Critical Signs.</span></h2>
                <div className="space-y-6">
                   {[
                     "Chest pain or difficulty breathing",
                     "Sudden weakness or paralysis",
                     "Severe allergic reactions",
                     "Uncontrolled bleeding or deep wounds",
                     "Sudden loss of consciousness"
                   ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 group">
                         <div className="w-2 h-2 rounded-full bg-red-500 group-hover:scale-150 transition-transform"></div>
                         <p className="text-slate-400 font-bold group-hover:text-white transition-colors cursor-default">{item}</p>
                      </div>
                   ))}
                </div>
                <Link to="/contact">
                  <Button className="mt-12 bg-white text-slate-950 hover:bg-slate-100 px-8 py-6 rounded-2xl font-bold uppercase tracking-widest text-xs h-auto">
                    View Location Map <MoveRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
}
