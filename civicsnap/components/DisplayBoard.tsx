
import React from 'react';
import { motion } from 'motion/react';

const DisplayBoard: React.FC = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
      title: "Urban Infrastructure",
      desc: "Smart monitoring for modern cities."
    },
    {
      url: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&q=80&w=800",
      title: "Community Action",
      desc: "Empowering residents to report issues."
    },
    {
      url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800",
      title: "City Maintenance",
      desc: "Efficient routing for municipal crews."
    },
    {
      url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800",
      title: "Public Transparency",
      desc: "Real-time tracking of urban fixes."
    }
  ];

  return (
    <section className="pb-16 px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">
            Visualizing Urban Impact
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-black text-white mb-2 tracking-tight uppercase">{img.title}</h3>
                <p className="text-sm text-gray-400 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {img.desc}
                </p>
              </div>
              
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 flex items-center justify-center text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs font-black">0{i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisplayBoard;
