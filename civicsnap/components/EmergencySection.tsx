
import React from 'react';
import { AlertTriangle, Zap, ShieldAlert, Phone, ArrowRight, MessageSquare } from 'lucide-react';

const EmergencySection: React.FC = () => {
  const emergencies = [
    { title: "Fallen Electric Wires", icon: <Zap />, desc: "High voltage exposure or sparking lines." },
    { title: "Major Flooding", icon: <AlertTriangle />, desc: "Severe water accumulation blocking main roads." },
    { title: "Major Road Block", icon: <ShieldAlert />, desc: "Accidents or collapses obstructing traffic." },
    { title: "Public Safety Risk", icon: <Phone />, desc: "Immediate structural risk to buildings or bridges." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="bg-red-500/10 border border-red-500/30 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-red-500/5 animate-pulse -z-10"></div>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="w-20 h-20 bg-red-500 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl shadow-red-500/40">
            <ShieldAlert className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black">Emergency <span className="text-red-500">Portal</span></h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Use this portal ONLY for life-threatening or immediate public safety hazards. Reports here are fast-tracked to first responders and utility emergency teams.
          </p>
          <div className="p-4 bg-black/40 border border-red-500/20 rounded-2xl inline-block">
            <p className="text-sm text-red-400 font-bold uppercase tracking-widest">⚠️ MISUSE OF THIS PORTAL IS A PENAL OFFENSE</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {emergencies.map((item, i) => (
          <button key={i} className="group text-left p-8 bg-charcoal border border-white/5 rounded-3xl hover:border-red-500 transition-all space-y-4">
            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            <div className="pt-4 flex items-center gap-2 text-red-500 font-black text-xs uppercase group-hover:gap-4 transition-all">
              Launch Alert <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center pt-16">
        <div className="space-y-6">
          <h2 className="text-4xl font-black">Priority Protocol</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            When an emergency is reported, CivicSnap bypasses standard review and establishes a direct line with department supervisors and field technicians. You will be requested to provide continuous location access until the first responders arrive.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-red-500 text-white font-black rounded-2xl flex items-center gap-3 hover:bg-red-600 transition-colors">
              <Phone className="w-5 h-5" /> Call Dispatch
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-all">
              <MessageSquare className="w-5 h-5" /> SMS Alert
            </button>
          </div>
        </div>
        <div className="bg-charcoal border border-white/10 rounded-[2.5rem] p-8 space-y-6">
          <h4 className="font-bold text-gray-400 uppercase tracking-widest text-xs">Active High-Priority Routing</h4>
          {[1, 2, 3].map((v) => (
            <div key={v} className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <div>
                  <div className="text-sm font-bold">Signal Failure @ Junction {v}</div>
                  <div className="text-xs text-gray-600">Dispatched 4m ago</div>
                </div>
              </div>
              <div className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-black uppercase text-gray-500 tracking-tighter">En Route</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencySection;
