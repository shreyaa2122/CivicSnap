
import React from 'react';
import { 
  Camera, 
  Layers, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Activity, 
  ShieldCheck, 
  Database, 
  BarChart3, 
  Zap, 
  ArrowRight,
  Clock
} from 'lucide-react';

interface WorkingSectionProps {
  onOpenLogin: () => void;
}

const WorkingSection: React.FC<WorkingSectionProps> = ({ onOpenLogin }) => {
  return (
    <div className="bg-black text-white min-h-screen pb-24">
      {/* 1. SECTION HEADER */}
      <section className="pt-24 pb-16 border-b border-white/5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-500 text-xs font-black uppercase tracking-[0.3em] mb-4">
            System Architecture
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">How <span className="text-amber-500">CivicSnap</span> Works</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
            A transparent, systematic workflow that ensures every issue reaches the right authority with professional precision.
          </p>
        </div>
      </section>

      {/* 2. SYSTEM FLOW OVERVIEW (Flow Diagram) */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-10 md:p-16 bg-charcoal border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
              {[
                { icon: <Camera />, label: "User Input" },
                { icon: <Layers />, label: "Validation" },
                { icon: <Send />, label: "Dept Routing" },
                { icon: <Activity />, label: "Authority Action" },
                { icon: <CheckCircle2 />, label: "Resolution" }
              ].map((node, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-5 group">
                    <div className="w-20 h-20 rounded-2xl bg-black border-2 border-white/10 flex items-center justify-center text-amber-500 group-hover:border-amber-500/60 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] group-hover:bg-amber-500/5 transition-all duration-500">
                      {React.cloneElement(node.icon as React.ReactElement, { className: "w-10 h-10" })}
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-amber-500 transition-colors">{node.label}</span>
                  </div>
                  {i < 4 && (
                    <div className="hidden md:flex flex-1 h-1 bg-white/5 relative mx-2 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/60 to-amber-500/0 animate-[shimmer_2s_infinite]"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,1)]"></div>
                    </div>
                  )}
                  {/* Vertical line for mobile */}
                  {i < 4 && (
                    <div className="md:hidden w-1 h-12 bg-gradient-to-b from-amber-500/50 to-transparent"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3-7. DETAILED STEPS */}
      <section className="py-24 space-y-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* STEP 1: ISSUE CAPTURE */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="text-amber-500 font-black text-7xl md:text-8xl opacity-10 select-none">01</div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black">Data Capture & Validation</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  The system captures urban issues with high-resolution imaging, descriptive metadata, and precise geolocation. 
                  Every input is validated for clarity, ensuring high-quality data enters the municipal stream.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-2xl text-sm text-gray-300">
                  <MapPin className="w-5 h-5 text-amber-500" /> Meter-accurate GPS
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-2xl text-sm text-gray-300">
                  <ShieldCheck className="w-5 h-5 text-amber-500" /> Privacy Anonymization
                </div>
              </div>
            </div>
            <div className="bg-charcoal border border-white/10 rounded-[3rem] p-10 aspect-video flex items-center justify-center relative overflow-hidden group shadow-2xl">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-50"></div>
               <div className="relative w-56 h-72 bg-black border-2 border-white/10 rounded-3xl p-6 space-y-5 shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                  <div className="w-full aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                    <Camera className="w-10 h-10 text-gray-700 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <div className="h-2.5 w-full bg-white/10 rounded-full"></div>
                  <div className="h-2.5 w-2/3 bg-white/5 rounded-full"></div>
                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <div className="w-10 h-5 bg-amber-500/20 rounded-full"></div>
                    <div className="w-16 h-6 bg-amber-500 rounded-lg shadow-lg"></div>
                  </div>
               </div>
            </div>
          </div>

          {/* STEP 2: SYSTEM TRIAGE */}
          <div className="grid lg:grid-cols-2 gap-20 items-center pt-32">
            <div className="order-2 lg:order-1 relative min-h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full"></div>
              <div className="relative z-10 w-full max-w-md bg-black border-2 border-white/10 rounded-3xl overflow-hidden p-8 space-y-8 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500 animate-ping"></div>
                    <span className="text-xs font-black text-amber-500 uppercase tracking-widest">Validation Engine v4.2</span>
                  </div>
                  <Activity className="w-5 h-5 text-green-500" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-2 group hover:border-amber-500/30 transition-all">
                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest block">OBJECT IDENTIFIED</span>
                    <span className="text-base font-black text-white">INFRA_DAMAGE_D3</span>
                  </div>
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-2 group hover:border-green-500/30 transition-all">
                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest block">VERIFICATION</span>
                    <span className="text-base font-black text-green-500">SUCCESSFUL</span>
                  </div>
                </div>
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between text-[10px] font-black uppercase text-gray-600">
                    <span>Processing Metadata</span>
                    <span className="text-amber-500">Routing...</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-3/4 animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="text-amber-500 font-black text-7xl md:text-8xl opacity-10 select-none">02</div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black">Systematic Triage</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  The logic engine analyzes data to identify the specific issue type, 
                  urgency level, and target department. Our rulesets are refined based on millions of urban data points.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4 p-6 bg-charcoal rounded-[2rem] border border-white/10 hover:border-amber-500/30 transition-all group">
                  <Layers className="text-amber-500 w-6 h-6 shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-sm text-gray-300 font-bold">Standardized detection for 50+ unique urban issue types.</div>
                </div>
                <div className="flex gap-4 p-6 bg-charcoal rounded-[2rem] border border-white/10 hover:border-amber-500/30 transition-all group">
                  <Zap className="text-amber-500 w-6 h-6 shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-sm text-gray-300 font-bold">Real-time priority tagging for hazardous conditions.</div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3 & 4: ROUTING & WORKFLOW */}
          <div className="grid lg:grid-cols-2 gap-20 items-center pt-32">
            <div className="space-y-8">
              <div className="text-amber-500 font-black text-7xl md:text-8xl opacity-10 select-none">03-04</div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black">Smart Routing & Workflow</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Once categorized, issues are automatically routed to the responsible department's internal dashboard. 
                  Authority teams receive structured data, enabling them to assign field crews instantly.
                </p>
              </div>
              <div className="p-8 bg-charcoal border-2 border-white/5 rounded-[2.5rem] space-y-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                   <h4 className="text-xs font-black text-white uppercase tracking-widest">Dept. Operational Queue</h4>
                   <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-[10px] font-black rounded-full uppercase">Real-Time</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-black border border-white/10 rounded-2xl group hover:border-amber-500/40 transition-all">
                    <span className="text-sm text-gray-300 font-bold italic">Road Repair #904</span>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-500 text-[10px] font-black rounded-lg uppercase tracking-widest">Assigned</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black border border-white/10 rounded-2xl group hover:border-blue-500/40 transition-all">
                    <span className="text-sm text-gray-300 font-bold italic">Waste Level D2</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-500 text-[10px] font-black rounded-lg uppercase tracking-widest">In Progress</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video bg-charcoal border-2 border-white/10 rounded-[4rem] overflow-hidden flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px:32px]"></div>
              <Database className="w-32 h-32 text-gray-800 opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/2 bg-amber-500/10 blur-[100px] rounded-full animate-pulse"></div>
                <div className="w-24 h-24 bg-black border border-amber-500/30 rounded-[2rem] flex items-center justify-center text-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.2)]">
                  <Send className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          {/* STEP 5: STATUS TRACKING */}
          <div className="pt-32">
             <div className="bg-gradient-to-br from-charcoal to-black border-2 border-white/10 rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
                <div className="max-w-4xl mx-auto text-center space-y-16">
                   <div className="space-y-6">
                     <div className="text-amber-500 font-black text-7xl opacity-10 select-none">05</div>
                     <h2 className="text-4xl md:text-5xl font-black">Live Status Tracking</h2>
                     <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                       Radical transparency for every stakeholder. Track progress through four immutable system-verified stages.
                     </p>
                   </div>
                   
                   <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative px-4">
                      <div className="hidden md:block absolute top-[30px] left-0 right-0 h-1.5 bg-white/10 -z-0 rounded-full">
                        <div className="h-full bg-amber-500 w-[66%] rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
                      </div>
                      
                      {[
                        { label: "Submitted", status: "complete" },
                        { label: "In Review", status: "complete" },
                        { label: "In Progress", status: "active" },
                        { label: "Resolved", status: "pending" }
                      ].map((stage, i) => (
                        <div key={i} className="relative z-10 flex md:flex-col items-center gap-6 md:gap-8 group">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                            stage.status === 'complete' ? 'bg-amber-500 border-amber-600 text-black shadow-[0_0_25px_rgba(245,158,11,0.6)] scale-110' :
                            stage.status === 'active' ? 'bg-black border-amber-500 text-amber-500 animate-pulse ring-4 ring-amber-500/20' :
                            'bg-black border-white/20 text-gray-700 hover:border-white/40'
                          }`}>
                            {stage.status === 'complete' ? <CheckCircle2 className="w-8 h-8" /> : <Clock className="w-8 h-8" />}
                          </div>
                          <div className="flex flex-col md:items-center gap-1">
                            <span className={`text-xs font-black uppercase tracking-[0.2em] ${stage.status === 'pending' ? 'text-gray-600' : 'text-white'}`}>
                              {stage.label}
                            </span>
                            {stage.status === 'active' && <span className="text-[10px] text-amber-500/80 font-bold uppercase animate-pulse">Current Stage</span>}
                          </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 8. PRIORITY & EMERGENCY HANDLING */}
      <section className="py-24 bg-charcoal/40 border-y-2 border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-red-500/[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                 <h2 className="text-4xl md:text-5xl font-black flex items-center gap-6">
                   <div className="p-3 bg-red-500/10 rounded-2xl border border-red-500/20">
                     <Zap className="text-red-500 w-10 h-10" />
                   </div>
                   Priority Protocol
                 </h2>
                 <p className="text-gray-400 text-xl leading-relaxed">
                   Reports identified as safety hazards are flagged automatically by our heuristic verification layer. 
                   These "Emergency Level" tickets bypass the standard queue and alert department supervisors instantly.
                 </p>
                 <div className="p-6 bg-red-500/10 border-2 border-red-500/20 rounded-3xl flex items-center gap-4 text-red-500 font-black uppercase tracking-widest text-sm shadow-xl shadow-red-500/5">
                   <ShieldCheck className="w-6 h-6 shrink-0" /> Fast-tracked Response Protocol Enabled
                 </div>
              </div>
              <div className="bg-black border-2 border-red-500/20 p-10 rounded-[3rem] space-y-8 shadow-2xl relative">
                 <div className="absolute -top-4 -right-4 px-4 py-1.5 bg-red-500 text-black font-black text-[10px] uppercase tracking-widest rounded-full shadow-lg">System Priority</div>
                 <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-red-500 uppercase tracking-widest flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                       Critical Alerts
                    </span>
                    <Activity className="w-5 h-5 text-red-500" />
                 </div>
                 <div className="space-y-4">
                    <div className="p-5 bg-white/5 rounded-2xl border-2 border-red-500/30 flex justify-between items-center group hover:bg-red-500/5 transition-all">
                       <div className="space-y-1">
                          <span className="text-base font-black text-white block">Fallen Line @ Main St</span>
                          <span className="text-[10px] text-gray-500 font-bold uppercase">Incident ID: #EM-023</span>
                       </div>
                       <span className="text-[10px] text-red-500 font-black uppercase bg-red-500/10 px-3 py-1 rounded-full animate-pulse">0:45 Elapsed</span>
                    </div>
                    <div className="p-5 bg-white/5 rounded-2xl border border-white/10 opacity-40">
                       <span className="text-base font-black text-gray-400">Standard Road Maintenance</span>
                       <span className="text-[10px] text-gray-600 block">Status: Queued</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 9. DATA & ACCOUNTABILITY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-20 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black">Transparency & Accountability</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Trust is built through immutable records. CivicSnap maintains a complete, tamper-proof audit trail of every city-wide action.
              </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: <Clock />, title: "Time-Stamped Actions", desc: "Every manual status update is logged with precise millisecond timestamps and department IDs." },
                { icon: <ShieldCheck />, title: "Verified Closures", desc: "Tickets cannot be closed without completion evidence including photos and GPS verification." },
                { icon: <BarChart3 />, title: "Monthly Audits", desc: "Comprehensive urban health reports are generated automatically for public review and scrutiny." }
              ].map((item, i) => (
                <div key={i} className="p-12 bg-charcoal border-2 border-white/5 rounded-[3rem] space-y-8 group hover:border-amber-500/30 transition-all duration-500 shadow-xl">
                  <div className="text-amber-500 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 flex justify-center">{React.cloneElement(item.icon as React.ReactElement, { className: "w-12 h-12" })}</div>
                  <div className="space-y-4 text-center">
                    <h3 className="text-2xl font-black">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
           <div className="bg-amber-500 text-black rounded-[4rem] p-12 md:p-20 text-center space-y-10 shadow-[0_30px_100px_rgba(245,158,11,0.15)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-6xl font-black italic tracking-tight">"Experience the digital foundation of modern urban living."</h2>
                <button 
                  onClick={onOpenLogin}
                  className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white font-black text-xl rounded-[2rem] hover:scale-105 active:scale-95 transition-all shadow-2xl group/btn"
                >
                  Join CivicSnap Now <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
           </div>
        </div>
      </section>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default WorkingSection;
