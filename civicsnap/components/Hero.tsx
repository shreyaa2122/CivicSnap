
import React, { useState, useEffect } from 'react';
import { ChevronRight, User, ChevronLeft, Zap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onOpenLogin: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenLogin }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const displayBoardImages = [
    {
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1920",
      title: "Smart Urban Infrastructure",
      subtitle: "Connecting cities through digital intelligence"
    },
    {
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1920",
      title: "Responsive Governance",
      subtitle: "Real-time municipal tracking and resolution"
    },
    {
      url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=1920",
      title: "Community Empowerment",
      subtitle: "Giving citizens a voice in urban development"
    },
    {
      url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1920",
      title: "Sustainable Future",
      subtitle: "Building resilient and efficient urban centers"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % displayBoardImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [displayBoardImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % displayBoardImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + displayBoardImages.length) % displayBoardImages.length);

  return (
    <div className="relative min-h-screen flex flex-col pt-32 overflow-hidden bg-black">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-500/[0.02] blur-[150px] -z-10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* Big Title */}
        <div className="space-y-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-500 text-xs font-black tracking-widest uppercase"
          >
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping"></span>
            The Future of Civic Tech
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-8xl md:text-[12rem] font-black text-white leading-[0.8] tracking-tighter"
          >
            Civic<span className="text-amber-500 italic">Snap.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Experience the power of <span className="text-white font-black">systematic urban management</span>. Build smarter, more responsive cities.
          </motion.p>
        </div>

        {/* Display Board */}
        <div className="relative w-full aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img 
                src={displayBoardImages[currentSlide].url} 
                alt={displayBoardImages[currentSlide].title}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 right-12 text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                    {displayBoardImages[currentSlide].title}
                  </h2>
                  <p className="text-lg md:text-xl text-amber-500 font-black uppercase tracking-widest">
                    {displayBoardImages[currentSlide].subtitle}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={prevSlide}
              className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black transition-all"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {displayBoardImages.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  i === currentSlide ? 'w-12 bg-amber-500' : 'w-3 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-24"
        >
          <button 
            onClick={onOpenLogin}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-7 rounded-3xl bg-amber-500 text-black font-black text-2xl hover:bg-amber-400 transition-all shadow-[0_20px_40px_rgba(245,158,11,0.2)] active:scale-95 group"
          >
            Join CivicSnap
            <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-7 rounded-3xl border border-white/10 bg-white/5 text-white font-black text-2xl hover:bg-white/10 transition-all group">
            Explore Features
            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex items-center gap-8 py-8 border-t border-white/5 w-full justify-center"
        >
          <div className="flex -space-x-4">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-black bg-gray-900 flex items-center justify-center text-xs font-black text-amber-500">
                U{i}
              </div>
            ))}
          </div>
          <div className="text-left">
            <p className="text-2xl font-black text-white leading-none">12,000+</p>
            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Active Citizens</p>
          </div>
          <div className="w-px h-12 bg-white/10 mx-4"></div>
          <div className="text-left">
            <p className="text-2xl font-black text-amber-500 leading-none">98.4%</p>
            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Efficiency Index</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
