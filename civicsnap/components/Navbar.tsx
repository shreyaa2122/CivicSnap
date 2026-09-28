
import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert, User, Zap, LogOut, Camera, Briefcase, LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  onSetView: (view: any) => void;
  onOpenLogin: () => void;
  onOpenReport: () => void;
  isLoggedIn: boolean;
  userRole: 'citizen' | 'management' | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeView, onSetView, onOpenLogin, onOpenReport, isLoggedIn, userRole, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Working', id: 'working' },
    { name: 'Departments', id: 'departments' },
    ...(isLoggedIn && userRole === 'management' ? [{ name: 'Dashboard', id: 'dashboard' }] : []),
    ...(isLoggedIn && userRole === 'citizen' ? [{ name: 'My Profile', id: 'profile' }] : []),
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 flex justify-center items-center ${
      scrolled ? 'top-6 px-4' : 'top-0 px-0'
    }`}>
      <div className={`transition-all duration-500 ease-in-out flex items-center justify-between ${
        scrolled 
          ? 'w-full max-w-6xl bg-[#111]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] px-8 py-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]' 
          : 'w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 bg-transparent border-b border-transparent'
      }`}>
        <button 
          onClick={() => onSetView('home')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
            <ShieldAlert className="text-black w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            Civic<span className="text-amber-500">Snap</span>
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onSetView(link.id)}
              className={`text-sm font-bold tracking-wide transition-all relative group ${
                activeView === link.id ? 'text-amber-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                activeView === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn && userRole === 'management' && (
             <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-black uppercase tracking-widest">
               <Briefcase className="w-3 h-3" /> Management
             </div>
          )}

          {isLoggedIn && userRole === 'citizen' && (
            <button 
              onClick={onOpenReport}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-500 text-black font-black text-sm hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 active:scale-95 group"
            >
              <Camera className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Report Issue
            </button>
          )}

          {!isLoggedIn ? (
            <button 
              onClick={onOpenLogin}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 text-white font-black text-sm hover:bg-white/20 transition-all active:scale-95"
            >
              <User className="w-4 h-4" />
              Sign In
            </button>
          ) : (
            <button 
              onClick={onLogout}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 font-black text-sm hover:text-white transition-all active:scale-95"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          )}
          
          <button 
            onClick={() => onSetView('emergency')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full border-2 font-black text-sm transition-all ${
              activeView === 'emergency' 
              ? 'bg-red-500 text-white border-red-500' 
              : 'border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Zap className="w-4 h-4" />
            Emergency
          </button>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-lg border border-white/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-0 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="bg-[#111]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { onSetView(link.id); setIsOpen(false); }}
                  className={`text-lg font-bold px-4 py-3 rounded-xl transition-colors text-left ${
                    activeView === link.id ? 'bg-amber-500/10 text-amber-500' : 'text-gray-400 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="grid grid-cols-1 gap-4 mt-2">
                {isLoggedIn && userRole === 'management' && (
                  <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-black uppercase tracking-widest">
                    <Briefcase className="w-3 h-3" /> Management Account
                  </div>
                )}

                {isLoggedIn && userRole === 'citizen' && (
                  <button 
                    onClick={() => { setIsOpen(false); onOpenReport(); }}
                    className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-amber-500 text-black font-black"
                  >
                    <Camera className="w-4 h-4" /> Report Issue
                  </button>
                )}

                {!isLoggedIn ? (
                  <button 
                    onClick={() => { setIsOpen(false); onOpenLogin(); }}
                    className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-white/10 text-white font-black"
                  >
                    <User className="w-4 h-4" /> Sign In
                  </button>
                ) : (
                  <button 
                    onClick={() => { setIsOpen(false); onLogout(); }}
                    className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-white/5 text-white font-black"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                )}
                
                <button 
                  onClick={() => { setIsOpen(false); onSetView('emergency'); }}
                  className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl border border-red-500 text-red-500 font-black"
                >
                  <Zap className="w-4 h-4" /> Emergency Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
