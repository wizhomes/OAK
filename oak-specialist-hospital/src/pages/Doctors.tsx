import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Star, Filter, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { ShieldCheck, PhoneCall as PhoneIcon } from 'lucide-react';

const ALL_DOCTORS = [
  { id: 1, name: "Dr. Kwesi Mensah", role: "Chief Cardiologist", dept: "Cardiology", bio: "Leading expert in non-invasive cardiology and preventative heart healthcare.", rating: 4.9, image: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Dr. Afua Serwaa", role: "Senior Obstetrician", dept: "Maternal Care", bio: "Renowned specialist in high-risk pregnancies and gynecological surgery.", rating: 5.0, image: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Dr. Emmanuel Dogbe", role: "Surgical Director", dept: "General Surgery", bio: "Pioneer in laparoscopic procedures with over 20 years of experience.", rating: 4.8, image: "https://i.pravatar.cc/150?u=3" },
  { id: 4, name: "Dr. Linda Osei", role: "Pediatric Consultant", dept: "Pediatrics", bio: "Compassionate care specialist for neonates and complex child conditions.", rating: 4.9, image: "https://i.pravatar.cc/150?u=4" },
  { id: 5, name: "Dr. James Appiah", role: "ENT Surgeon", dept: "ENT", bio: "Specialized in micro-ear surgery and respiratory tract treatments.", rating: 4.7, image: "https://i.pravatar.cc/150?u=5" },
  { id: 6, name: "Dr. Sarah Tetteh", role: "Oncology Specialist", dept: "Oncology", bio: "Expert in chemotherapy and innovative cancer management pathways.", rating: 5.0, image: "https://i.pravatar.cc/150?u=6" },
];

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  const filteredDoctors = ALL_DOCTORS.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'all' || doc.dept === selectedDept;
    return matchesSearch && matchesDept;
  });

  const departments = ['all', ...new Set(ALL_DOCTORS.map(d => d.dept))];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-none px-4 mb-4">Our Medical Team</Badge>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Our World-Class <br />Medical Specialists.</h1>
              <p className="text-slate-500">Search and find our highly qualified doctors, consultants and specialist surgeons across all departments.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-red-500 transition-colors" />
                <Input 
                  placeholder="Search by name or role..." 
                  className="pl-10 w-full sm:w-[300px] bg-slate-50 border-slate-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedDept} onValueChange={setSelectedDept}>
                <SelectTrigger className="w-full sm:w-[200px] bg-slate-50 border-slate-200">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-slate-400" />
                    <SelectValue placeholder="Specialty" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>
                      {dept === 'all' ? 'All Specialties' : dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doc, i) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] relative overflow-hidden bg-slate-200">
                        <img 
                          src={doc.image} 
                          alt={doc.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-red-900 border-none font-bold">
                          {doc.dept}
                        </Badge>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                           <div className="flex items-center gap-1 text-yellow-500">
                             <Star className="w-4 h-4 fill-current" />
                             <span className="text-sm font-bold text-slate-700">{doc.rating}</span>
                           </div>
                           <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Consultant</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-red-600 transition-colors uppercase italic">{doc.name}</h3>
                        <p className="text-red-600 font-bold text-sm mb-4 leading-tight">{doc.role}</p>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 italic">
                          {doc.bio}
                        </p>
                        <div className="flex gap-4">
                          <Link to="/book" className="flex-1">
                            <Button className="w-full bg-red-900 hover:bg-red-800 rounded-xl font-bold uppercase tracking-widest text-xs">Book Appointment</Button>
                          </Link>
                          <Button variant="outline" className="rounded-xl border-slate-200 hover:bg-slate-50">
                            <PhoneCall className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white rounded-[40px] border border-dashed border-slate-200">
              <Search className="w-12 h-12 text-slate-200 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No doctors found</h3>
              <p className="text-slate-400">Try adjusting your search filters to find a specialist.</p>
              <Button 
                variant="link" 
                onClick={() => { setSearchTerm(''); setSelectedDept('all'); }}
                className="mt-4 text-red-600 font-bold"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Corporate Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-slate-900 border-none overflow-hidden relative rounded-[40px]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 blur-[100px] rounded-full"></div>
            <CardContent className="p-12 md:p-20 relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight uppercase italic tracking-tighter">Are you a qualified <br /><span className="text-red-400">Specialist Consultant?</span></h2>
                <p className="text-slate-400 text-lg mb-10 max-w-xl">
                  We are always looking for the brightest medical minds to join our mission of transforming healthcare in Africa.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 px-8 py-6 rounded-2xl text-white font-bold h-auto uppercase tracking-widest text-xs">
                  Review Opportunities <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="hidden lg:block w-1/3">
                 <div className="aspect-square bg-slate-800 rounded-3xl border border-white/10 flex items-center justify-center">
                    <ShieldCheck className="w-32 h-32 text-red-600 animate-pulse" />
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

const PhoneCall = ({ className }: { className?: string }) => (
  <PhoneIcon className={className} />
);
