
import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  History, 
  CheckCircle, 
  ArrowUpRight, 
  Award, 
  BarChart3, 
  ShieldCheck, 
  Activity,
  Zap,
  ChevronRight,
  PackageOpen,
  LogOut,
  Clock,
  PlayCircle
} from 'lucide-react';
import { CivicReport } from '../App';

interface ProfileSectionProps {
  reports: CivicReport[];
  userName: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ reports, userName }) => {
  const stats = [
    { label: 'Issues Reported', value: reports.length.toString(), icon: <BarChart3 className="w-5 h-5 text-amber-500" /> },
    { label: 'Issues Resolved', value: reports.filter(r => r.status === 'Done').length.toString(), icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { label: 'Impact Factor', value: 'High', icon: <Activity className="w-5 h-5 text-blue-500" /> },
  ];

  return (
    <div className="bg-black text-white min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* PROFILE OVERVIEW */}
        <section className="relative pt-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent blur-3xl opacity-50"></div>
          <div className="relative bg-charcoal border border-white/10 rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="relative group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-amber-500/30 p-1.5 transition-transform duration-500 group-hover:scale-105">
                  <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center border-2 border-amber-500 text-amber-500 text-4xl font-black">
                    {userName.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 p-2 rounded-xl border-4 border-charcoal shadow-lg">
                  <ShieldCheck className="w-6 h-6 text-black" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="space-y-1">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter">{userName}</h2>
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-gray-500 font-bold">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Mumbai, India</span>
                    <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
                    <span className="text-amber-500/80 uppercase tracking-widest text-[10px]">Active Citizen</span>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <div className="px-5 py-2 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                    <Award className="w-5 h-5 text-amber-500" />
                    <div className="text-left">
                      <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none">Status</div>
                      <div className="text-sm font-black text-white">Top Contributor</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-64 bg-black/40 border border-white/5 rounded-3xl p-6 text-center space-y-3">
                <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">Civic Impact Score</div>
                <div className="text-5xl font-black text-amber-500">842</div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-amber-500 w-[84%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* REPORTS LIST */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-2xl font-black flex items-center gap-3 tracking-tight">
                <History className="text-amber-500 w-6 h-6" />
                My Snap Reports
              </h3>
            </div>

            <div className="relative space-y-6 before:absolute before:left-8 before:top-4 before:bottom-4 before:w-px before:bg-white/5">
              {reports.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-500 gap-4 bg-white/[0.02] rounded-[3rem] border border-dashed border-white/10">
                  <PackageOpen className="w-16 h-16 opacity-20" />
                  <p className="font-bold">You haven't snapped any issues yet.</p>
                </div>
              ) : (
                reports.map((report) => (
                  <div key={report.id} className="relative pl-16 group">
                    <div className={`absolute left-[30px] top-6 w-1.5 h-1.5 rounded-full ring-4 ring-black z-10 ${
                      report.status === 'Done' ? 'bg-green-500 ring-green-500/20' : 
                      report.status === 'In Progress' ? 'bg-blue-500 ring-blue-500/20' :
                      report.status === 'Started' ? 'bg-purple-500 ring-purple-500/20' :
                      'bg-amber-500 ring-amber-500/20'
                    }`}></div>
                    
                    <div className="bg-charcoal border border-white/10 rounded-[2.5rem] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-amber-500/30 transition-all shadow-xl group-hover:bg-white/[0.02]">
                      <div className="flex items-center gap-5">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                          report.status === 'Done' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                          report.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                          report.status === 'Started' ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' :
                          'bg-amber-500/10 text-amber-500 border-amber-500/20'
                        }`}>
                          <Zap className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{report.id} • {report.timestamp}</div>
                          <h4 className="text-xl font-black text-white">{report.category}</h4>
                          <div className="text-xs text-gray-500 font-medium flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-amber-500" /> {report.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 self-end md:self-auto">
                        <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border ${
                          report.status === 'Done' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                          report.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20 animate-pulse' :
                          report.status === 'Started' ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' :
                          'bg-amber-500/10 text-amber-500 border-amber-500/20'
                        }`}>
                          {report.status}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-600 group-hover:text-amber-500 transition-colors">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* STATS & SETTINGS */}
          <div className="space-y-8">
            <div className="bg-charcoal border border-white/10 rounded-[2.5rem] p-8 space-y-8">
              <h3 className="text-xl font-black flex items-center gap-3">
                <BarChart3 className="text-amber-500 w-5 h-5" />
                Contribution Stats
              </h3>
              <div className="grid gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-4 bg-black/40 border border-white/5 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                        {stat.icon}
                      </div>
                      <span className="text-gray-400 font-bold text-sm">{stat.label}</span>
                    </div>
                    <span className="text-xl font-black text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#080808] border border-white/10 rounded-[2.5rem] p-4 flex flex-col gap-2">
               <button className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 text-gray-400 hover:text-white transition-all font-bold group">
                 <div className="flex items-center gap-3">
                    <User className="w-5 h-5" /> Profile Settings
                 </div>
                 <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
               </button>
               <button className="flex items-center justify-between p-4 rounded-2xl hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition-all font-bold">
                 <div className="flex items-center gap-3">
                    <LogOut className="w-5 h-5" /> Sign Out
                 </div>
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
