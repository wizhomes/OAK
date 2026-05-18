import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronRight, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const POSTS = [
  { id: 1, title: "Heart Health: Tips for a Healthier Cardiac Lifestyle", category: "Cardiology", date: "May 12, 2026", author: "Dr. Kwesi Mensah", image: "https://images.unsplash.com/photo-1505751172107-573967a4f22f?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "The Importance of Prenatal Care for Expecting Mothers", category: "Maternal Care", date: "May 08, 2026", author: "Dr. Afua Serwaa", image: "https://images.unsplash.com/photo-1544126592-807daa2b56fd?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Modern Advances in Minimal Access Surgery", category: "Surgery", date: "May 01, 2026", author: "Dr. Emmanuel Dogbe", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Living with Hypertension: Management & Nutrition", category: "Cardiology", date: "April 25, 2026", author: "Intern Team", image: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?auto=format&fit=crop&q=80&w=800" },
];

export default function Blog() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <section className="bg-white border-b py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
            <div className="max-w-2xl">
              <Badge className="bg-red-600 mb-6 text-white px-4 py-1.5 uppercase font-bold tracking-widest">Oak Health Insights</Badge>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">The Health <br /><span className="text-red-600">Journal.</span></h1>
              <p className="text-slate-500 text-lg italic">Stay informed with the latest medical insights, healthy living tips, and hospital news from our expert consultants.</p>
            </div>
            <div className="w-full lg:w-[400px]">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-red-600" />
                <Input placeholder="Search articles..." className="pl-12 h-14 bg-slate-50 border-slate-200 rounded-2xl focus:ring-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Featured Post */}
            <div className="lg:col-span-2 space-y-12">
               <div className="group cursor-pointer">
                  <div className="aspect-[21/9] rounded-[40px] overflow-hidden mb-8 shadow-2xl relative">
                     <img src={POSTS[0].image} alt="Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                     <Badge className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-red-900 border-none font-black uppercase text-[10px] tracking-widest p-3">{POSTS[0].category}</Badge>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-red-600 transition-colors uppercase italic">{POSTS[0].title}</h2>
                  <div className="flex items-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {POSTS[0].date}</span>
                    <span className="flex items-center gap-2 text-red-600 italic"><User className="w-4 h-4" /> {POSTS[0].author}</span>
                  </div>
                  <p className="text-slate-500 text-lg leading-relaxed line-clamp-3 mb-8 italic">
                    Maintaining a healthy heart is the foundation of overall wellbeing. In this comprehensive guide, Dr. Mensah breaks down the latest research on cardiovascular exercise and nutritional choices that could save your life...
                  </p>
                  <Button variant="link" className="p-0 h-auto font-black text-red-600 uppercase tracking-widest text-xs flex items-center group/btn">
                    Read Full Article <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {POSTS.slice(1).map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                       <div className="aspect-video rounded-3xl overflow-hidden mb-6 shadow-sm relative">
                          <img src={post.image} alt="Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" referrerPolicy="no-referrer" />
                          <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-red-900 border-none font-bold text-[10px] uppercase tracking-widest">{post.category}</Badge>
                       </div>
                       <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-red-600 transition-colors uppercase italic leading-tight tracking-tighter">{post.title}</h3>
                       <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-red-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                  ))}
               </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-12 lg:sticky lg:top-32 h-fit">
               <Card className="border-none shadow-sm rounded-3xl overflow-hidden p-8 bg-red-900 text-white italic">
                  <h4 className="text-lg font-black uppercase mb-4 tracking-tight">Stay Informed</h4>
                  <p className="text-red-300 text-sm mb-6 leading-relaxed">Join 5,000+ subscribers for monthly health tips delivered to your inbox.</p>
                  <div className="space-y-4">
                    <Input placeholder="Your email address" className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-12 rounded-xl" />
                    <Button className="w-full h-12 bg-red-600 hover:bg-red-700 font-bold uppercase tracking-widest text-[10px]">Subscribe Now</Button>
                  </div>
               </Card>

               <div>
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 underline underline-offset-8">Categories</h4>
                 <div className="flex flex-wrap gap-3">
                   {["Cardiology", "Maternal Care", "Surgery", "Pediatrics", "Nutrition", "Mental Health"].map(tag => (
                     <Badge key={tag} variant="outline" className="rounded-full px-5 py-2 border-slate-200 text-slate-600 hover:bg-white hover:border-red-600 hover:text-red-600 cursor-pointer transition-colors text-xs font-bold uppercase italic">
                       {tag}
                     </Badge>
                   ))}
                 </div>
               </div>

               <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 italic">Hospital News</h4>
                  <div className="space-y-6">
                     <p className="text-sm font-bold text-slate-900 cursor-pointer hover:text-red-600 active:text-red-700 transition-colors">Oak Hospital wins "Best Private Hospital in Ghana" Award 2024</p>
                     <p className="text-sm font-bold text-slate-900 cursor-pointer hover:text-red-600 active:text-red-700 transition-colors">New MRI wing construction update: Opening next month</p>
                  </div>
               </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
