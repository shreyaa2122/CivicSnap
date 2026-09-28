
import React from 'react';
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  MoreVertical, 
  MapPin, 
  Clock, 
  AlertTriangle,
  ArrowUpDown,
  CheckCircle2,
  PlayCircle,
  Construction,
  FileText,
  // Added missing Activity import
  Activity
} from 'lucide-react';
import { CivicReport } from '../App';

interface ManagementDashboardProps {
  reports: CivicReport[];
  onUpdateStatus: (id: string, status: CivicReport['status']) => void;
}

const ManagementDashboard: React.FC<ManagementDashboardProps> = ({ reports, onUpdateStatus }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/10 rounded-lg">
              <ShieldCheck className="text-blue-500 w-6 h-6" />
            </div>
            <h1 className="text-3xl font-black tracking-tight">Management Portal</h1>
          </div>
          <p className="text-gray-500 font-medium">Monitoring {reports.length} active civic issues across all sectors.</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search reports..."
              className="bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-amber-500 transition-all w-64"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
          <button className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Tickets', value: reports.length, color: 'text-white' },
          { label: 'Pending Review', value: reports.filter(r => r.status === 'Reported').length, color: 'text-amber-500' },
          { label: 'In Progress', value: reports.filter(r => r.status === 'In Progress' || r.status === 'Started').length, color: 'text-blue-500' },
          { label: 'Resolved', value: reports.filter(r => r.status === 'Done').length, color: 'text-green-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-charcoal border border-white/10 rounded-3xl p-6 space-y-1">
            <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</div>
            <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Reports Table */}
      <div className="bg-charcoal border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] bg-white/[0.02]">
                <th className="px-8 py-6">Ticket ID</th>
                <th className="px-8 py-6">Issue / Category</th>
                <th className="px-8 py-6">Reported By</th>
                <th className="px-8 py-6">Severity</th>
                <th className="px-8 py-6">Current Status</th>
                <th className="px-8 py-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {reports.map((report) => (
                <tr key={report.id} className="group hover:bg-white/[0.01] transition-colors">
                  <td className="px-8 py-6 font-black text-xs text-amber-500">{report.id}</td>
                  <td className="px-8 py-6">
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-white">{report.category}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" /> {report.location}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm font-medium text-gray-300">{report.citizenName}</div>
                    <div className="text-[10px] text-gray-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {report.timestamp}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                      report.severity === 'High' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                      report.severity === 'Medium' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                      'bg-green-500/10 text-green-500 border border-green-500/20'
                    }`}>
                      {report.severity}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="relative group/status w-40">
                      <select 
                        value={report.status}
                        onChange={(e) => onUpdateStatus(report.id, e.target.value as any)}
                        className={`w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-[10px] font-black uppercase tracking-widest appearance-none focus:outline-none focus:border-blue-500 transition-all ${
                          report.status === 'Done' ? 'text-green-500' :
                          report.status === 'In Progress' ? 'text-blue-500' :
                          report.status === 'Started' ? 'text-purple-500' :
                          'text-amber-500'
                        }`}
                      >
                        <option value="Reported">Reported</option>
                        <option value="Started">Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ArrowUpDown className="w-3 h-3 text-gray-500" />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-amber-500/10 hover:text-amber-500 transition-all">
                        <FileText className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Active Team Management Preview */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-charcoal border border-white/10 rounded-[2.5rem] p-8 space-y-6">
          <h3 className="text-xl font-black flex items-center gap-3">
            <Construction className="text-amber-500 w-5 h-5" />
            Field Crew Deployment
          </h3>
          <div className="space-y-4">
            {[
              { team: 'Team Alpha (Roads)', task: '#CS-8812', status: 'En Route', progress: 40 },
              { team: 'Team Delta (Water)', task: '#CS-9401', status: 'On Site', progress: 100 },
              { team: 'Team Gamma (Sanitation)', task: 'Manual Pickup', status: 'Idle', progress: 0 }
            ].map((t, i) => (
              <div key={i} className="bg-black/40 border border-white/5 rounded-2xl p-5 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-sm font-bold">{t.team}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Active Task: <span className="text-amber-500">{t.task}</span></div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="w-32 hidden md:block">
                      <div className="flex justify-between text-[10px] font-bold text-gray-600 mb-1">
                        <span>Task Progress</span>
                        <span>{t.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${t.progress}%` }}></div>
                      </div>
                   </div>
                   <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-black rounded-lg uppercase">{t.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600/10 border border-blue-600/20 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center space-y-4">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-600/20">
            <Activity className="text-white w-10 h-10" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-black">System AI Active</h3>
            <p className="text-sm text-blue-500/80 font-bold uppercase tracking-widest">Routing Optimization</p>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            The systematic logic engine is currently optimizing 14 route paths for field crews to minimize downtime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagementDashboard;
