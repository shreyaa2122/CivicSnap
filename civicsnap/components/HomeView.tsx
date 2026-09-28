
import React from 'react';
import Hero from './Hero';
import BeforeAfter from './BeforeAfter';
import HowItWorks from './HowItWorks';
import WorkingPreview from './WorkingPreview';
import { ArrowRight, ShieldCheck, Zap, Globe, Users, BarChart3, Lock } from 'lucide-react';

interface HomeViewProps {
  onOpenLogin: () => void;
  onGoToEmergency: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onOpenLogin, onGoToEmergency }) => {
  return (
    <>
      <Hero onOpenLogin={onOpenLogin} />
      
      {/* Introduction Section */}
      <section className="py-32 bg-black relative overflow-hidden border-y border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.03),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black uppercase tracking-[0.3em]">
                About CivicSnap
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">
                Bridging the <br />
                <span className="text-amber-500 italic">Urban Gap.</span>
              </h2>
              <div className="flex items-center gap-6">
                <div className="w-20 h-px bg-amber-500/50"></div>
                <p className="text-amber-500 font-black uppercase tracking-widest text-sm">Est. 2024 • Global Vision</p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-8">
                <p className="text-3xl md:text-4xl text-gray-200 font-medium leading-tight tracking-tight">
                  CivicSnap is more than an app—it's a <span className="text-white font-black">digital nervous system</span> for the modern city.
                </p>
                <p className="text-xl text-gray-500 leading-relaxed font-medium">
                  We've engineered a platform that transforms every smartphone into a powerful tool for civic improvement. By combining high-resolution reporting with advanced municipal logic, we ensure that every voice is heard and every issue is routed to the right hands instantly.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-12 pt-8 border-t border-white/10">
                <div className="space-y-4">
                  <h4 className="text-white font-black text-xl uppercase tracking-tight">Our Mission</h4>
                  <p className="text-gray-500 leading-relaxed">To empower citizens with the tools to build safer, cleaner, and more responsive urban environments through radical transparency.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-black text-xl uppercase tracking-tight">Our Technology</h4>
                  <p className="text-gray-500 leading-relaxed">Leveraging geospatial intelligence and automated triage to reduce municipal response times by over 60% globally.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Value Section */}
      <section className="py-32 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center max-w-3xl mx-auto mb-24 space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black uppercase tracking-[0.4em]">
              CIVIC SYSTEM LOGIC
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              The Systematic Backbone of <span className="text-amber-500">Better Cities.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              CivicSnap isn't just a reporting tool—it's a comprehensive urban intelligence layer. We leverage advanced logic to transform citizen feedback into actionable municipal data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 perspective-1000">
            {[
              { icon: <Zap />, title: "Instant Processing", desc: "Automated verification for road damage, waste, and utilities to remove manual triage delays.", color: "amber-500" },
              { icon: <Globe />, title: "Direct Routing", desc: "Reports reach the precise department instantly based on high-resolution geospatial data.", color: "blue-500" },
              { icon: <Users />, title: "Transparent Lifecycle", desc: "Track every snap from submission to verified resolution with immutable system records.", color: "green-500" }
            ].map((feature, i) => (
              <div key={i} className={`reveal delay-${(i+1)*200} card-3d p-12 bg-charcoal border border-white/5 rounded-[3.5rem] hover:border-${feature.color}/30 transition-all duration-700`}>
                <div className={`w-16 h-16 bg-${feature.color}/10 rounded-2xl flex items-center justify-center text-${feature.color} mb-10`}>
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-black text-white mb-6">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="reveal mt-24 bg-gradient-to-br from-[#0d0d0d] to-black border border-white/10 rounded-[4rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-20 group hover:border-amber-500/20 transition-all duration-700">
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <h3 className="text-5xl font-black text-white tracking-tight">Why precision matters.</h3>
                <p className="text-gray-400 text-xl leading-relaxed font-medium">
                  Inefficient civic communication costs cities millions. By standardizing the classification and routing process, CivicSnap reduces municipal response times by up to <span className="text-white font-black">60%</span>.
                </p>
              </div>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-4 px-6 py-4 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-white/10 transition-colors">
                  <BarChart3 className="text-amber-500 w-6 h-6" />
                  <span className="text-sm font-black text-gray-300 uppercase tracking-widest">Operational Analytics</span>
                </div>
                <div className="flex items-center gap-4 px-6 py-4 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-white/10 transition-colors">
                  <ShieldCheck className="text-amber-500 w-6 h-6" />
                  <span className="text-sm font-black text-gray-300 uppercase tracking-widest">Verified Outcomes</span>
                </div>
              </div>
              <button 
                onClick={onOpenLogin}
                className="inline-flex items-center gap-4 px-10 py-6 bg-amber-500 text-black font-black rounded-3xl text-xl hover:bg-amber-400 active:scale-95 transition-all shadow-2xl"
              >
                Join the Movement <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            <div className="lg:w-1/3 relative perspective-1000">
               <div className="card-3d relative z-10 p-1.5 bg-gradient-to-br from-white/20 to-transparent rounded-[3.5rem] shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                   className="rounded-[3.3rem] grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-110"
                   alt="Smart City UI" 
                 />
               </div>
               <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-amber-500/20 blur-[60px] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="working-preview" className="reveal py-24">
        <WorkingPreview />
      </section>

      <section id="impact" className="reveal py-24 bg-charcoal/30">
        <BeforeAfter />
      </section>

      <section id="how-it-works" className="reveal py-24">
        <HowItWorks />
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden text-center bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-amber-500/[0.03] blur-[150px] rounded-full"></div>
        <div className="reveal max-w-4xl mx-auto px-4 relative z-10 space-y-12">
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">Ready to Snap?</h2>
          <p className="text-2xl text-gray-400 font-medium max-w-2xl mx-auto">
            Join the digital foundation for the world's most livable urban centers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
            <button 
              onClick={onOpenLogin}
              className="w-full sm:w-auto px-12 py-7 bg-amber-500 text-black font-black text-2xl rounded-3xl shadow-[0_25px_50px_rgba(245,158,11,0.25)] hover:bg-amber-400 hover:scale-105 active:scale-95 transition-all"
            >
              Get Started Now
            </button>
            <button 
              onClick={onGoToEmergency}
              className="w-full sm:w-auto px-12 py-7 border-2 border-red-500 text-red-500 font-black text-2xl rounded-3xl hover:bg-red-500 hover:text-white transition-all shadow-xl"
            >
              Emergency Snap
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeView;
