
import React from 'react';
import { Layers, Zap, Database, BarChart3, Search } from 'lucide-react';

const WorkingPreview: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-black/40 border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 -skew-x-12 -z-10 translate-x-20"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider">
              Precision Logic Engine
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Behind the Snap: <br />
              Smart Infrastructure
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              CivicSnap uses advanced algorithmic processing to categorize urban issues with 98.4% accuracy. Our systematic routing engine ensures reports reach the exact team within milliseconds.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Search className="w-5 h-5" />, title: "Object Detection", text: "Verified tags for 50+ issue types." },
                { icon: <Database className="w-5 h-5" />, title: "Centralized Ledger", text: "Secure, immutable reporting." },
                { icon: <Zap className="w-5 h-5" />, title: "Instant Routing", text: "Sub-second department assignment." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "City-wide Analytics", text: "Systematic maintenance data." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-amber-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-gray-200 transition-all flex items-center gap-2">
              Learn More Technical Details
              <Zap className="w-4 h-4" />
            </button>
          </div>

          <div className="relative">
            {/* Visual Representation of System Processing */}
            <div className="relative aspect-square max-w-[450px] mx-auto">
              <div className="absolute inset-0 border-[16px] border-amber-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 border-[1px] border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-amber-500/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 w-24 h-24 bg-amber-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-amber-500/40">
                  <Layers className="text-black w-12 h-12" />
                </div>
              </div>

              {/* Floaties */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 px-4 py-2 bg-charcoal border border-white/10 rounded-lg shadow-xl animate-bounce">
                <span className="text-xs font-bold text-green-500">98% Accuracy</span>
              </div>
              <div className="absolute bottom-10 right-0 px-4 py-2 bg-charcoal border border-white/10 rounded-lg shadow-xl animate-pulse">
                <span className="text-xs font-bold text-blue-500">Routing Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingPreview;
