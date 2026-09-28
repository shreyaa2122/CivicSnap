
import React from 'react';
import { Camera, Send, CheckCircle2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: "1. Snap",
      desc: "Capture a clear photo. Our logic engine instantly geolocates and classifies the urban issue.",
      color: "amber-500",
      delay: "delay-100"
    },
    {
      icon: <Send className="w-12 h-12" />,
      title: "2. Route",
      desc: "Reports are automatically dispatched to the specialized city department responsible.",
      color: "blue-500",
      delay: "delay-300"
    },
    {
      icon: <CheckCircle2 className="w-12 h-12" />,
      title: "3. Resolve",
      desc: "Track real-time progress. Receive verification once the physical fix is completed.",
      color: "green-500",
      delay: "delay-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="reveal text-center mb-24 space-y-6">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          Snap. Route. <span className="text-amber-500">Resolve.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium">
          The systematic way to rebuild your neighborhood in three precise steps.
        </p>
        <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-12 perspective-1000">
        {steps.map((step, idx) => (
          <div key={idx} className={`reveal ${step.delay} card-3d bg-charcoal border border-white/5 rounded-[3rem] p-12 text-center space-y-8 hover:border-${step.color}/30 transition-all group`}>
            <div className={`w-24 h-24 bg-${step.color}/10 text-${step.color} border border-${step.color}/20 rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
              {step.icon}
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-white">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
            <div className={`h-1.5 w-12 bg-${step.color}/20 mx-auto rounded-full group-hover:w-full transition-all duration-500`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
