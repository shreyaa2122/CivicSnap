
import React from 'react';
import { motion } from 'motion/react';
import { 
  Truck, 
  Droplets, 
  Zap, 
  Hammer, 
  MapPin, 
  Clock, 
  BarChart, 
  Settings, 
  Building2, 
  ChevronRight,
  ArrowRight,
  Send,
  Activity,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface Department {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
  issues: string[];
  responseTime: string;
  activeCases: number;
  status: 'Available' | 'High Load';
  prioritySupport: boolean;
  image: string;
}

interface DepartmentsSectionProps {
  onOpenLogin: () => void;
}

const departments: Department[] = [
  {
    id: 'roads',
    icon: <MapPin className="w-6 h-6" />,
    name: "Roads & Transport",
    description: "Maintenance of public thoroughfares and traffic management systems. Our team handles everything from structural repairs to digital traffic flow optimization.",
    issues: ["Potholes", "Signal Failures", "Sidewalk Damage", "Road Markings"],
    responseTime: "24-48 hrs",
    activeCases: 142,
    status: 'Available',
    prioritySupport: true,
    image: "https://picsum.photos/seed/roads/1200/800"
  },
  {
    id: 'waste',
    icon: <Truck className="w-6 h-6" />,
    name: "Waste Management",
    description: "Urban sanitation, garbage collection, and illegal dumping mitigation. We ensure the city remains clean and sustainable through efficient collection routes.",
    issues: ["Bin Overflow", "Illegal Dumping", "Littering", "Hazardous Waste"],
    responseTime: "12-24 hrs",
    activeCases: 89,
    status: 'Available',
    prioritySupport: false,
    image: "https://picsum.photos/seed/waste/1200/800"
  },
  {
    id: 'water',
    icon: <Droplets className="w-6 h-6" />,
    name: "Water Supply",
    description: "Management of hydraulic infrastructure and sewage networks. Ensuring safe drinking water and effective waste water treatment for all citizens.",
    issues: ["Pipe Bursts", "Sewage Leaks", "Fountain Repairs", "Water Quality"],
    responseTime: "6-12 hrs",
    activeCases: 56,
    status: 'Available',
    prioritySupport: true,
    image: "https://picsum.photos/seed/water/1200/800"
  },
  {
    id: 'power',
    icon: <Zap className="w-6 h-6" />,
    name: "Electricity & Power",
    description: "Public lighting and electrical safety within city limits. Maintaining the city's grid and ensuring well-lit public spaces for safety.",
    issues: ["Streetlight Outage", "Hanging Wires", "Power Fluctuations", "Grid Damage"],
    responseTime: "4-8 hrs",
    activeCases: 31,
    status: 'High Load',
    prioritySupport: true,
    image: "https://picsum.photos/seed/power/1200/800"
  },
  {
    id: 'works',
    icon: <Hammer className="w-6 h-6" />,
    name: "Public Works",
    description: "General maintenance of government buildings and urban amenities. From park benches to community centers, we keep public assets in top shape.",
    issues: ["Graffiti", "Park Bench Repair", "Fencing", "Facility Damage"],
    responseTime: "3-5 days",
    activeCases: 215,
    status: 'Available',
    prioritySupport: false,
    image: "https://picsum.photos/seed/works/1200/800"
  },
  {
    id: 'municipal',
    icon: <Building2 className="w-6 h-6" />,
    name: "Municipal Services",
    description: "Administrative civic issues and community facility management. Handling the paperwork and permits that keep the city running legally and smoothly.",
    issues: ["Permit Issues", "Signage", "Zoning Violations", "Public Toilets"],
    responseTime: "2-4 days",
    activeCases: 104,
    status: 'Available',
    prioritySupport: false,
    image: "https://picsum.photos/seed/municipal/1200/800"
  }
];

const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({ onOpenLogin }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* 1. SECTION HEADER */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4"
          >
            Institutional Structure
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight"
          >
            City <span className="text-amber-500">Departments</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Every issue is routed to the right authority automatically through our systematic verification engine.
          </motion.p>
        </div>
      </section>

      {/* 2. DEPARTMENT SECTIONS (Alternating) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {departments.map((dept, index) => (
            <motion.div 
              key={dept.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="absolute -inset-4 bg-amber-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-8 left-8 w-16 h-16 bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-amber-500 shadow-2xl">
                    {dept.icon}
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    dept.status === 'Available' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${dept.status === 'Available' ? 'bg-green-400 animate-pulse' : 'bg-amber-400'}`}></div>
                    {dept.status}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                    {dept.name}
                  </h3>
                  <p className="text-lg text-gray-400 font-medium leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Common Issues</div>
                    <div className="flex flex-wrap gap-2">
                      {dept.issues.map((issue, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[11px] font-bold text-gray-200">
                          {issue}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Department Stats</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-1">Response</span>
                        <span className="text-xs font-bold text-white flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-amber-500" /> {dept.responseTime}
                        </span>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-1">Active</span>
                        <span className="text-xs font-bold text-white flex items-center gap-2">
                          <Activity className="w-3.5 h-3.5 text-amber-500" /> {dept.activeCases}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <button 
                    onClick={onOpenLogin}
                    className="group inline-flex items-center gap-3 text-amber-500 font-black uppercase tracking-widest text-xs hover:text-amber-400 transition-colors"
                  >
                    Contact Department
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SYSTEMATIC ROUTING EXPLANATION */}
      <section className="py-24 px-4 bg-charcoal/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#080808] border border-white/10 rounded-[4rem] p-10 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 -z-10 translate-x-20 group-hover:translate-x-10 transition-transform duration-1000"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="w-16 h-16 bg-amber-500/10 rounded-[2rem] flex items-center justify-center text-amber-500 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                  <Settings className="w-8 h-8 animate-[spin_8s_linear_infinite]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
                  Advanced Logic <br />
                  <span className="text-amber-500">Routing Engine</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  CivicSnap’s systematic logic engine analyzes data and automatically assigns tasks to the correct department based on issue type and geographic coordinates.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-bold text-gray-300">94% Misroute Reduction</span>
                  </div>
                  <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-bold text-gray-300">Sub-second Logic Triage</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square flex items-center justify-center">
                <div className="absolute inset-0 border-[32px] border-amber-500/[0.03] rounded-full"></div>
                <div className="absolute inset-12 border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="relative z-10 p-12 bg-charcoal border border-white/10 rounded-[3rem] shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                   <div className="text-center space-y-4">
                      <Send className="w-16 h-16 text-amber-500 mx-auto" />
                      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Routing Active</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEPARTMENT RESPONSIBILITY FLOW */}
      <section className="py-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] text-gray-600">Department Lifecycle</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 px-10">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[35px] left-0 right-0 h-1 bg-white/10 -z-0">
              <div className="h-full bg-gradient-to-r from-amber-500 via-amber-500/50 to-transparent w-full opacity-30"></div>
            </div>

            {[
              { label: "Data Intake", icon: <Send className="w-6 h-6" />, desc: "High-res data capture" },
              { label: "System Classified", icon: <Settings className="w-6 h-6" />, desc: "Algorithmic logic check" },
              { label: "Dept. Assigned", icon: <Building2 className="w-6 h-6" />, desc: "Direct task injection" },
              { label: "Action Taken", icon: <Hammer className="w-6 h-6" />, desc: "Field technician dispatch" }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex md:flex-col items-center gap-6 md:gap-8 group">
                <div className="w-20 h-20 rounded-3xl bg-black border border-white/10 flex items-center justify-center text-amber-500 shadow-xl group-hover:border-amber-500 transition-colors duration-500">
                  {step.icon}
                </div>
                <div className="space-y-1 md:text-center">
                  <h4 className="text-lg font-black text-white">{step.label}</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
           <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black italic text-white">"Connect with your city via CivicSnap's systematic routing."</h2>
              <p className="text-gray-500 text-lg uppercase tracking-[0.2em] font-bold">Fast. Transparent. Institutional.</p>
           </div>
           <button 
             onClick={onOpenLogin}
             className="group relative inline-flex items-center gap-4 px-12 py-6 bg-amber-500 text-black font-black text-xl rounded-[2rem] hover:bg-amber-400 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-amber-500/30"
           >
              Get Started Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
           </button>
        </div>
      </section>
    </div>
  );
};

export default DepartmentsSection;
