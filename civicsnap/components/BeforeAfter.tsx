
import React from 'react';
import { ArrowRight } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-white">
          See the Change <span className="text-amber-500">CivicSnap</span> Enables
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Witness the transformation of our neighborhoods through collective action and technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative">
        {/* Connection Line Desktop */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 bg-amber-500 rounded-full items-center justify-center border-4 border-black shadow-2xl shadow-amber-500/40">
          <ArrowRight className="text-black w-8 h-8" />
        </div>

        {/* Before */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/5 aspect-[4/3] md:aspect-auto">
          <img 
            src="https://lh3.googleusercontent.com/d/1RLm8OzodIWZI5cp7hJ4yyTZIh9WC5_XD" 
            alt="Before CivicSnap" 
            className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-8 left-8">
            <div className="px-4 py-1 bg-red-500/10 border border-red-500/20 text-red-500 rounded-full text-xs font-bold uppercase tracking-widest mb-2">Before</div>
            <h3 className="text-2xl font-bold text-white">Neglected Urban Space</h3>
            <p className="text-gray-400 text-sm mt-1">Illegal dumping and broken infrastructure.</p>
          </div>
        </div>

        {/* After */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-amber-500/20 aspect-[4/3] md:aspect-auto">
          <img 
            src="https://lh3.googleusercontent.com/d/1ITK4w8HkIZU1i1hGbO8ayEktuHjC2ZMi" 
            alt="After CivicSnap" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-8 left-8">
            <div className="px-4 py-1 bg-green-500/10 border border-green-500/20 text-green-500 rounded-full text-xs font-bold uppercase tracking-widest mb-2">After</div>
            <h3 className="text-2xl font-bold text-white">Smart Green Park</h3>
            <p className="text-gray-400 text-sm mt-1">Efficient response led to total renovation.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-500 italic">"From neglected spaces to smarter cities. Join the movement."</p>
      </div>
    </div>
  );
};

export default BeforeAfter;
