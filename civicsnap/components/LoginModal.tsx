
import React, { useState } from 'react';
import { X, ShieldAlert, Mail, Lock, Eye, EyeOff, Github, Globe, ArrowRight, User, Briefcase, AlertCircle } from 'lucide-react';

interface LoginModalProps {
  onClose: () => void;
  onLogin: (role: 'citizen' | 'management', identifier: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
  const [loginType, setLoginType] = useState<'citizen' | 'management'>('citizen');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (loginType === 'management') {
      if (email === 'management@gmail.com' && password === '123456') {
        onLogin('management', 'Admin Portal');
      } else {
        setError('Invalid management credentials. Access denied.');
      }
    } else {
      // Citizen login allows any input, use the email (or name part) as identifier
      const nameFromEmail = email.split('@')[0];
      const capitalizedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
      onLogin('citizen', capitalizedName || 'Citizen');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="flex items-center justify-between p-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${loginType === 'management' ? 'bg-blue-500/10' : 'bg-amber-500/10'}`}>
              <ShieldAlert className={`w-5 h-5 ${loginType === 'management' ? 'text-blue-500' : 'text-amber-500'}`} />
            </div>
            <h3 className="text-xl font-bold">{loginType === 'management' ? 'Management Portal' : 'Citizen Sign In'}</h3>
          </div>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          {/* Role Switcher */}
          <div className="flex p-1 bg-white/5 rounded-2xl mb-8 border border-white/5">
            <button 
              onClick={() => { setLoginType('citizen'); setError(null); }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black transition-all ${
                loginType === 'citizen' ? 'bg-amber-500 text-black shadow-lg' : 'text-gray-500 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" /> Citizen
            </button>
            <button 
              onClick={() => { setLoginType('management'); setError(null); }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black transition-all ${
                loginType === 'management' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" /> Management
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">
                  {loginType === 'management' ? 'Management Email' : 'Email Address'}
                </label>
                <div className="relative">
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-11 text-white focus:outline-none transition-colors ${
                      loginType === 'management' ? 'focus:border-blue-500' : 'focus:border-amber-500'
                    }`}
                    placeholder={loginType === 'management' ? 'management@gmail.com' : 'Enter your email'}
                  />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block px-1">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-11 pr-11 text-white focus:outline-none transition-colors ${
                      loginType === 'management' ? 'focus:border-blue-500' : 'focus:border-amber-500'
                    }`}
                    placeholder="••••••••"
                  />
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            <button 
              type="submit"
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-lg transition-all shadow-xl active:scale-95 group ${
                loginType === 'management' 
                  ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-600/10' 
                  : 'bg-amber-500 text-black hover:bg-amber-400 shadow-amber-500/10'
              }`}
            >
              Access {loginType === 'management' ? 'Portal' : 'Platform'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {loginType === 'citizen' && (
              <>
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                  <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                    <span className="bg-[#0a0a0a] px-4 text-gray-600">Alternative Identity</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button type="button" className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-white/5 text-xs font-bold hover:bg-white/10 transition-all">
                    <Globe className="w-4 h-4" /> Google
                  </button>
                  <button type="button" className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-white/5 text-xs font-bold hover:bg-white/10 transition-all">
                    <Github className="w-4 h-4" /> GitHub
                  </button>
                </div>
              </>
            )}
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-600 font-medium">
              {loginType === 'citizen' 
                ? "Don't have an account? " 
                : "Need management credentials? "}
              <button className={`${loginType === 'management' ? 'text-blue-500' : 'text-amber-500'} font-black hover:underline`}>
                {loginType === 'citizen' ? 'Join Now' : 'Contact Admin'}
              </button>
            </p>
          </div>
        </div>

        <div className="bg-white/5 p-4 text-center">
          <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest flex items-center justify-center gap-2">
            <Lock className="w-3 h-3" /> {loginType === 'management' ? 'Secure Management Channel' : 'End-to-End Encryption'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
