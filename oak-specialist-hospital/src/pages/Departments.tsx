import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Baby, Ear, Eye, Award, Users, Heart, ShieldCheck, Microscope, Syringe, Brain, Bone } from 'lucide-react';
import { Link } from 'react-router-dom';

const DEPARTMENTS = [
  { id: 'cardiology', title: 'Cardiology', icon: <Activity />, color: 'red', desc: 'Expert diagnosis and treatment of heart conditions including coronary artery disease, heart failure, and valvular heart disease.' },
  { id: 'maternal', title: 'Maternal Care', icon: <Baby />, color: 'red', desc: 'Comprehensive obstetric and gynecological care, from prenatal visits to post-delivery care for mother and newborn.' },
  { id: 'surgery', title: 'General Surgery', icon: <ShieldCheck />, color: 'red', desc: 'Advanced surgical procedures using minimally invasive techniques for faster recovery times and better patient outcomes.' },
  { id: 'pediatrics', title: 'Pediatrics', icon: <Users />, color: 'red', desc: 'Specialized healthcare for infants, children, and adolescents, covering vaccinations, growth monitoring, and acute illnesses.' },
  { id: 'ent', title: 'ENT Specialist', icon: <Ear />, color: 'red', desc: 'Expert treatment for disorders of the ear, nose, throat, and related structures of the head and neck.' },
  { id: 'ophthalmology', title: 'Ophthalmology', icon: <Eye />, color: 'red', desc: 'State-of-the-art eye care, including cataract surgery, glaucoma management, and computerized vision testing.' },
  { id: 'diagnostics', title: 'Diagnostics & Labs', icon: <Microscope />, color: 'red', desc: 'Modern laboratory services and diagnostic imaging such as X-rays, ultrasound, and ECG to support accurate clinical decisions.' },
  { id: 'emergency', title: 'Accident & Emergency', icon: <Syringe />, color: 'red', desc: '24/7 rapid response for medical emergencies, staffed by a dedicated team of urgent care specialists.' },
  { id: 'neurology', title: 'Neurology', icon: <Brain />, color: 'red', desc: 'Specialized care for neurological disorders including stroke, epilepsy, and persistent migraine management.' },
  { id: 'orthopedics', title: 'Orthopedics', icon: <Bone />, color: 'red', desc: 'Comprehensive treatment for musculoskeletal issues, ranging from fractures to joint replacements and spine surgery.' },
];

export default function Departments() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-24 border-b">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="bg-red-600 mb-6 text-white uppercase tracking-widest px-4 py-1.5">Hospital Services</Badge>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">Excellence Across Every <br /><span className="text-red-600">Discipline.</span></h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            Oak Specialist Hospital offers a comprehensive range of specialist medical services. We combine technological innovation with expert clinical judgment to ensure the best outcomes for our patients.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {DEPARTMENTS.map((dept, idx) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="group flex flex-col lg:flex-row gap-8 items-start p-8 rounded-[40px] hover:bg-slate-50 transition-colors duration-500 border border-transparent hover:border-slate-100">
                  <div className={`w-20 h-20 rounded-3xl bg-${dept.color}-50 text-${dept.color}-600 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-${dept.color}-600 group-hover:text-white transition-all duration-500`}>
                    {dept.icon && <div className="w-10 h-10">{dept.icon}</div>}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">{dept.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-lg mb-6">
                      {dept.desc}
                    </p>
                    <Link to="/book" className={`text-sm font-bold uppercase tracking-widest text-slate-900 flex items-center gap-2 group-hover:text-red-600 transition-colors`}>
                      Book Consultant <div className="w-8 h-[1px] bg-slate-300 group-hover:w-12 group-hover:bg-red-600 transition-all"></div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/Interlude */}
      <section className="py-24 bg-red-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <Heart className="w-16 h-16 text-red-400 mx-auto mb-10 animate-bounce" />
          <p className="text-3xl md:text-5xl font-light italic leading-tight mb-10">
            "Our multi-disciplinary team works together under one roof, ensuring patients benefit from collective medical intelligence."
          </p>
          <div className="flex flex-col items-center">
            <p className="font-bold text-xl tracking-wide uppercase italic">The Board of Directors</p>
            <p className="text-red-400 uppercase tracking-widest text-xs mt-2">Oak Specialist Hospital</p>
          </div>
        </div>
      </section>
    </div>
  );
}
