import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("Appointment request sent successfully!");
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 flex flex-col items-center text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase italic">Thank You!</h1>
        <p className="text-slate-500 max-w-md mb-10">
          Your appointment request has been received. Our patient coordinator will contact you shortly to confirm the date and time.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
          className="rounded-xl px-10 py-6"
        >
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
         <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">Secure Your <br /><span className="text-red-600">Consultation.</span></h1>
          <p className="text-slate-500">Fill out the form below and we'll match you with the best specialist for your needs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="border-none shadow-sm bg-red-900 text-white rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6 italic">Why book online?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                   <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-red-400" />
                   </div>
                   <div>
                     <p className="font-bold text-sm">Save Time</p>
                     <p className="text-red-200 text-xs">Skip the registration queues.</p>
                   </div>
                </li>
                 <li className="flex gap-4">
                   <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-red-400" />
                   </div>
                   <div>
                     <p className="font-bold text-sm">Preferred Doctors</p>
                     <p className="text-red-200 text-xs">Select your choice specialist directly.</p>
                   </div>
                </li>
                 <li className="flex gap-4">
                   <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-red-400" />
                   </div>
                   <div>
                     <p className="font-bold text-sm">Instant Confirmation</p>
                     <p className="text-red-200 text-xs">Get logged into our system instantly.</p>
                   </div>
                </li>
              </ul>
            </Card>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
               <h4 className="font-bold mb-4 text-slate-900">Need help?</h4>
               <p className="text-sm text-slate-500 mb-6 italic">Our support team is available 24/7 for technical assistance with the portal.</p>
               <Button variant="outline" className="w-full text-red-600 border-red-600 rounded-xl font-bold">Contact Support</Button>
            </div>
          </div>

          {/* Form Side */}
          <Card className="lg:col-span-2 border-none shadow-2xl rounded-[40px] overflow-hidden">
            <CardContent className="p-10 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-widest font-bold text-slate-400">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input placeholder="John Doe" className="pl-10 h-14 bg-slate-50 border-slate-200 rounded-xl" required />
                    </div>
                  </div>
                   <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-widest font-bold text-slate-400">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input placeholder="+233 XX XXX XXXX" className="pl-10 h-14 bg-slate-50 border-slate-200 rounded-xl" required />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-widest font-bold text-slate-400">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input type="email" placeholder="john@example.com" className="pl-10 h-14 bg-slate-50 border-slate-200 rounded-xl" required />
                    </div>
                  </div>
                   <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-widest font-bold text-slate-400">Specialty</Label>
                    <Select required>
                      <SelectTrigger className="h-14 bg-slate-50 border-slate-200 rounded-xl">
                        <SelectValue placeholder="Select Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="maternal">Maternal Care</SelectItem>
                        <SelectItem value="surgery">General Surgery</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="ent">ENT Specialist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-widest font-bold text-slate-400">Preferred Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input type="date" className="pl-10 h-14 bg-slate-50 border-slate-200 rounded-xl" required />
                    </div>
                  </div>
                   <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-widest font-bold text-slate-400">Preferred Time</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input type="time" className="pl-10 h-14 bg-slate-50 border-slate-200 rounded-xl" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-xs uppercase tracking-widest font-bold text-slate-400">Short Description of Symptoms</Label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-4 w-4 h-4 text-slate-400" />
                    <Textarea 
                      placeholder="Please briefly describe your condition..." 
                      className="pl-10 min-h-[120px] bg-slate-50 border-slate-200 rounded-xl pt-3" 
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full h-16 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-2xl shadow-xl shadow-red-200 uppercase tracking-widest"
                >
                  {isLoading ? "Processing Request..." : "Request Appointment"}
                </Button>
                
                <p className="text-center text-xs text-slate-400 italic">
                  By clicking "Request Appointment", you agree to our privacy policy regarding medical data handling.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
