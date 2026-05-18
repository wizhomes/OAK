import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll reply shortly.");
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <section className="bg-white py-24 mb-12">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1">
                <Badge className="bg-red-600 mb-6 text-white px-4 py-1.5 font-bold tracking-widest uppercase">Contact Us</Badge>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">We're Here For <br /><span className="text-red-600">Your Journey.</span></h1>
                <p className="text-slate-500 text-lg leading-relaxed italic mb-12">
                  Whether you have questions about our services, medical costs, or want to share feedback, we're ready to listen. At Oak Specialist Hospital, your voice matters.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0"><Phone className="w-5 h-5" /></div>
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1">Phone</p>
                        <p className="font-bold text-lg text-slate-900">+233 30 281 1211</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0"><Mail className="w-5 h-5" /></div>
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1">Email</p>
                        <p className="font-bold text-lg text-slate-900">info@oak.com.gh</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0"><MapPin className="w-5 h-5" /></div>
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1">Location</p>
                        <p className="font-bold text-slate-900">Spintex Rd, Accra</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0"><Clock className="w-5 h-5" /></div>
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-1">Working Hours</p>
                        <p className="font-bold text-slate-900">24/7 Available</p>
                      </div>
                   </div>
                </div>

                <div className="flex items-center gap-4 border-t pt-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 italic">Follow our mission:</span>
                  <div className="flex items-center gap-3">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                      <a key={i} href="#" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[480px]">
                <Card className="border-none shadow-2xl rounded-[40px] overflow-hidden">
                   <CardContent className="p-10 md:p-14">
                      <h4 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900 mb-8 underline underline-offset-8">Send A Message</h4>
                      <form onSubmit={handleSubmit} className="space-y-6">
                         <div className="space-y-2">
                            <Label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Your Identity</Label>
                            <Input placeholder="Your Name" className="h-14 bg-slate-50 border-slate-200 rounded-2xl" required />
                         </div>
                         <div className="space-y-2">
                            <Label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Communication path</Label>
                            <Input type="email" placeholder="Email Address" className="h-14 bg-slate-50 border-slate-200 rounded-2xl" required />
                         </div>
                         <div className="space-y-2">
                             <Label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Subject</Label>
                             <Input placeholder="Why are you contacting us?" className="h-14 bg-slate-50 border-slate-200 rounded-2xl" required />
                         </div>
                         <div className="space-y-2">
                            <Label className="text-[10px] uppercase font-black tracking-widest text-slate-400">The Message</Label>
                            <Textarea placeholder="Type your inquiry here..." className="min-h-[120px] bg-slate-50 border-slate-200 rounded-2xl pt-4" required />
                         </div>
                         <Button type="submit" className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-xl shadow-red-100 uppercase tracking-widest text-xs flex items-center gap-2">
                           Despatch Message <Send className="w-3 h-3" />
                         </Button>
                      </form>
                   </CardContent>
                </Card>
              </div>
           </div>
        </div>
      </section>

      {/* Map Simulation */}
      <section className="py-20 h-[500px] bg-slate-200 relative overflow-hidden mx-4 rounded-[40px]">
        {/* Placeholder for Map - using an unsplash image of map/texture */}
        <div className="absolute inset-0 grayscale opacity-40">
           <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="Map" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <Card className="p-8 bg-white/95 backdrop-blur-md border-none shadow-2xl rounded-3xl max-w-sm text-center">
               <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-red-200">
                  <MapPin className="w-8 h-8" />
               </div>
               <h4 className="text-xl font-bold text-slate-900 mb-2">Visit Our Campus</h4>
               <p className="text-slate-500 text-sm italic mb-6">Spintex Road, Near Flower Pot Junction <br />Accra, Ghana</p>
               <Button className="w-full bg-slate-900 hover:bg-slate-800 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                 Get Directions <ExternalLink className="w-3 h-3" />
               </Button>
            </Card>
        </div>
      </section>
    </div>
  );
}
