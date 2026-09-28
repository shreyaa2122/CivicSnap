
import React, { useState, useRef } from 'react';
import { X, Upload, Camera, ShieldAlert, Activity, CheckCircle2, MapPin, ChevronDown, Send, History, MessageSquare, Info, User, Mail, Smartphone, Map, Globe, AlertTriangle } from 'lucide-react';
import { CivicReport } from '../App';

interface ReportModalProps {
  onClose: () => void;
  onReportSubmit: (report: CivicReport) => void;
  defaultCitizenName?: string;
}

const ReportModal: React.FC<ReportModalProps> = ({ onClose, onReportSubmit, defaultCitizenName = 'Sushila' }) => {
  const [step, setStep] = useState<'instructions' | 'details' | 'upload' | 'analyzing' | 'confirm'>('instructions');
  const [preview, setPreview] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Sanitation');
  const [specificLocation, setSpecificLocation] = useState('');
  const [severity, setSeverity] = useState<'Low' | 'Medium' | 'High'>('Low');
  
  // Citizen Details State
  const [citizenDetails, setCitizenDetails] = useState({
    fullName: defaultCitizenName,
    email: `${defaultCitizenName.toLowerCase()}@example.com`,
    age: '25',
    gender: 'female',
    phone: '+91 98765 43210',
    address: '123, Main Street, Sector 4',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    pincode: '400001',
    notes: ''
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      setStep('analyzing');
      
      // Simulate Systematic Verification
      setTimeout(() => {
        setStep('confirm');
      }, 2000);
    }
  };

  const instructionSteps = [
    {
      icon: <Camera className="w-6 h-6" />,
      titleEn: "1. Take a Photo",
      titleHi: "एक फोटो लें",
      descEn: "Click a clear picture of the problem, like a pothole, broken light, or garbage.",
      descHi: "समस्या की एक स्पष्ट तस्वीर लें, जैसे गड्ढा, टूटी हुई रोशनी, या कचरा।"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      titleEn: "2. Share Your Location",
      titleHi: "अपना स्थान साझा करें",
      descEn: "Allow CivicSnap to detect your location or enter your address so authorities know where the problem is.",
      descHi: "CivicSnap को अपने स्थान का पता लगाने दें या अपना पता दर्ज करें ताकि अधिकारियों को पता चले कि समस्या कहाँ है।"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      titleEn: "3. Describe the Issue",
      titleHi: "समस्या का वर्णन करें",
      descEn: "Write a short description and choose the category, like Roads, Sanitation, or Water.",
      descHi: "एक संक्षिप्त विवरण लिखें और श्रेणी चुनें, जैसे सड़क, स्वच्छता, या पानी।"
    },
    {
      icon: <Send className="w-6 h-6" />,
      titleEn: "4. Submit the Report",
      titleHi: "रिपोर्ट जमा करें",
      descEn: "Send your report. CivicSnap will forward it to the right department.",
      descHi: "अपनी रिपोर्ट भेजें। CivicSnap इसे सही विभाग को अग्रेषित करेगा।"
    },
    {
      icon: <History className="w-6 h-6" />,
      titleEn: "5. Track the Status",
      titleHi: "स्थिति को ट्रैक करें",
      descEn: "Check your report to see if it’s pending, in progress, or resolved.",
      descHi: "यह देखने के लिए अपनी रिपोर्ट जांचें कि क्या यह लंबित है, प्रगति पर है, या हल हो गई है।"
    }
  ];

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('upload');
  };

  const handleFinalSubmit = () => {
    const newReport: CivicReport = {
      id: '#CS-' + Math.floor(Math.random() * 9000 + 1000),
      category,
      description,
      location: specificLocation || citizenDetails.address,
      severity,
      status: 'Reported',
      timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      citizenName: citizenDetails.fullName,
      preview: preview || undefined
    };
    
    onReportSubmit(newReport);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <ShieldAlert className="w-5 h-5 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold">
              {step === 'instructions' ? 'How to use' : step === 'details' ? 'Citizen Details' : step === 'confirm' ? 'Snap Details' : 'Report Civic Issue'}
            </h3>
          </div>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {step === 'instructions' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="text-center space-y-2">
                <h4 className="text-2xl font-black text-white">How CivicSnap Works</h4>
                <h4 className="text-xl font-bold text-amber-500">CivicSnap कैसे काम करता है</h4>
              </div>

              <div className="space-y-8">
                {instructionSteps.map((item, idx) => (
                  <div key={idx} className="flex gap-6 relative">
                    {idx !== instructionSteps.length - 1 && (
                      <div className="absolute left-[27px] top-12 bottom-[-32px] w-0.5 bg-white/5"></div>
                    )}
                    <div className="shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-amber-500 z-10">
                      {item.icon}
                    </div>
                    <div className="space-y-3 pb-2">
                      <div className="space-y-1">
                        <h5 className="text-lg font-black text-white leading-tight">
                          {item.titleEn} <span className="text-gray-600 font-normal mx-2">|</span> {item.titleHi}
                        </h5>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400 leading-relaxed font-medium">
                          {item.descEn}
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed font-medium">
                          {item.descHi}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => setStep('details')}
                  className="w-full flex items-center justify-center gap-4 py-5 rounded-[2rem] bg-amber-500 text-black font-black text-xl hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 active:scale-95 group"
                >
                  Get Started / शुरू करें
                  <CheckCircle2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {step === 'details' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-1">
                <h4 className="text-2xl font-black text-white">Citizen Details</h4>
                <p className="text-sm text-gray-500">Please fill in your details before submitting a report.</p>
              </div>

              <form onSubmit={handleDetailsSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Full Name</label>
                  <div className="relative">
                    <input 
                      type="text"
                      required
                      value={citizenDetails.fullName}
                      onChange={(e) => setCitizenDetails({...citizenDetails, fullName: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-11 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Email</label>
                    <div className="relative">
                      <input 
                        type="email"
                        required
                        value={citizenDetails.email}
                        onChange={(e) => setCitizenDetails({...citizenDetails, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-11 text-white focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="email@example.com"
                      />
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Age</label>
                    <input 
                      type="number"
                      required
                      value={citizenDetails.age}
                      onChange={(e) => setCitizenDetails({...citizenDetails, age: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Age"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Gender</label>
                  <div className="relative">
                    <select 
                      required
                      value={citizenDetails.gender}
                      onChange={(e) => setCitizenDetails({...citizenDetails, gender: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white appearance-none focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="" disabled>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Phone No</label>
                  <div className="relative">
                    <input 
                      type="tel"
                      required
                      value={citizenDetails.phone}
                      onChange={(e) => setCitizenDetails({...citizenDetails, phone: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-11 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Locality / Address</label>
                  <div className="relative">
                    <input 
                      type="text"
                      required
                      value={citizenDetails.address}
                      onChange={(e) => setCitizenDetails({...citizenDetails, address: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-11 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Building, Street, Area"
                    />
                    <Map className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">City</label>
                    <input 
                      type="text"
                      required
                      value={citizenDetails.city}
                      onChange={(e) => setCitizenDetails({...citizenDetails, city: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">State</label>
                    <input 
                      type="text"
                      required
                      value={citizenDetails.state}
                      onChange={(e) => setCitizenDetails({...citizenDetails, state: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Country</label>
                    <div className="relative">
                      <input 
                        type="text"
                        required
                        value={citizenDetails.country}
                        onChange={(e) => setCitizenDetails({...citizenDetails, country: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-11 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Pincode</label>
                    <input 
                      type="text"
                      required
                      value={citizenDetails.pincode}
                      onChange={(e) => setCitizenDetails({...citizenDetails, pincode: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Additional Notes</label>
                  <textarea 
                    value={citizenDetails.notes}
                    onChange={(e) => setCitizenDetails({...citizenDetails, notes: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Any extra details..."
                    rows={2}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full py-5 rounded-[2rem] bg-amber-500 text-black font-black text-xl hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 active:scale-95"
                  >
                    Save Details & Continue to Camera
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 'upload' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2 text-center">
                 <h4 className="text-xl font-black text-white">Capture Issue</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <span className="text-white font-semibold">Step 2:</span> Upload a clear photo to begin systematic verification.
                </p>
              </div>

              <div 
                onClick={() => fileInputRef.current?.click()}
                className="group cursor-pointer border-2 border-dashed border-white/10 rounded-3xl p-12 flex flex-col items-center justify-center text-center gap-4 hover:border-amber-500/50 hover:bg-white/5 transition-all"
              >
                <div className="w-20 h-20 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                  <Upload className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-bold">Upload Issue Photo</p>
                  <p className="text-gray-500 text-sm">Drag & drop or click</p>
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept="image/*" 
                />
              </div>
              <button className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl border border-white/10 bg-white/5 font-bold hover:bg-white/10 transition-all">
                <Camera className="w-5 h-5" />
                Open Live Camera
              </button>
              
              <button 
                onClick={() => setStep('details')}
                className="w-full text-center text-xs text-gray-500 font-bold hover:text-white transition-colors"
              >
                ← Back to Citizen Details
              </button>
            </div>
          )}

          {step === 'analyzing' && (
            <div className="flex flex-col items-center justify-center py-12 gap-8 text-center animate-in fade-in duration-300">
              <div className="relative">
                {preview && <img src={preview} className="w-48 h-48 object-cover rounded-3xl opacity-40 blur-sm" />}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-amber-500 rounded-2xl animate-spin flex items-center justify-center">
                    <Activity className="text-black w-10 h-10 animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-amber-500">System Verification...</h4>
                <p className="text-gray-500">Processing data, location & urgency</p>
              </div>
            </div>
          )}

          {step === 'confirm' && (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                {preview && <img src={preview} className="w-20 h-20 object-cover rounded-xl border border-amber-500/20 shadow-lg" />}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-amber-500 uppercase tracking-[0.2em]">Verification Complete</span>
                  </div>
                  <h4 className="text-lg font-black text-white">Issue Identified</h4>
                  <p className="text-xs text-green-500 font-bold flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" /> System Verified Confidence 98.4%
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-1">
                  <h4 className="text-2xl font-black text-white">Snap Details</h4>
                  <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Category</label>
                    <div className="relative">
                      <select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white appearance-none focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="Sanitation">Sanitation</option>
                        <option value="Roads & Potholes">Roads & Potholes</option>
                        <option value="Street Lights">Street Lights</option>
                        <option value="Water Leakage">Water Leakage</option>
                        <option value="Traffic Violation">Traffic Violation</option>
                        <option value="Construction">Construction</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Where do you find the construction/issue?</label>
                    <div className="relative">
                      <input 
                        type="text"
                        value={specificLocation}
                        onChange={(e) => setSpecificLocation(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-11 text-white focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="Near City Park, opposite the bank..."
                      />
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Severity Level</label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['Low', 'Medium', 'High'] as const).map((level) => (
                        <button
                          key={level}
                          onClick={() => setSeverity(level)}
                          className={`py-3 rounded-xl border text-xs font-black transition-all ${
                            severity === level 
                              ? (level === 'Low' ? 'bg-green-500/10 border-green-500 text-green-500' : level === 'Medium' ? 'bg-amber-500/10 border-amber-500 text-amber-500' : 'bg-red-500/10 border-red-500 text-red-500')
                              : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/20'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Description</label>
                    <textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Describe the issue in detail..."
                      rows={4}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4 sticky bottom-0 bg-[#0a0a0a] pb-1">
                <button 
                  onClick={() => setStep('upload')}
                  className="flex-1 py-4 rounded-2xl border border-white/10 font-bold hover:bg-white/5 transition-all text-sm"
                >
                  Back
                </button>
                <button 
                  onClick={handleFinalSubmit}
                  className="flex-1 py-4 rounded-2xl bg-amber-500 text-black font-black hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 text-sm flex items-center justify-center gap-2 group"
                >
                  Final Submit Report
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
