
import React from 'react';
import { motion } from 'motion/react';
import { Target, ShieldCheck, Zap, Users, Globe, Eye, ArrowRight, Heart, Briefcase, Layout, Map, Activity, Shield, Info, CheckCircle2, AlertTriangle, EyeOff, Clock, MapPin, Send, Camera, BarChart3, RefreshCw } from 'lucide-react';

interface AboutSectionProps {
  onOpenLogin: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onOpenLogin }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* SECTION 0: INTRODUCTION */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]"
              >
                <Info className="w-3 h-3" /> Introduction
              </motion.div>
              
              <div className="space-y-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white"
                >
                  Empowering <span className="text-amber-500">Urban</span> <br />Resilience.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl"
                >
                  CivicSnap is more than a reporting tool; it's a digital bridge between the community and the city's heartbeat.
                </motion.p>
              </div>

              <div className="grid gap-8">
                {[
                  { 
                    title: "What we do", 
                    content: "We provide a high-efficiency platform for reporting and tracking urban issues—from potholes to power outages—directly to the relevant municipal departments.",
                    icon: <Layout className="w-5 h-5 text-amber-500" />
                  },
                  { 
                    title: "Who it is for", 
                    content: "Designed for proactive citizens who value their neighborhood's integrity and for city officials seeking data-driven maintenance workflows.",
                    icon: <Users className="w-5 h-5 text-amber-500" />
                  },
                  { 
                    title: "Why we exist", 
                    content: "To eliminate bureaucratic friction and foster a culture of transparency, ensuring that every citizen's voice leads to a tangible urban fix.",
                    icon: <Target className="w-5 h-5 text-amber-500" />
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-black text-white uppercase tracking-widest text-sm">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-amber-500/10 rounded-[4rem] blur-3xl opacity-50"></div>
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200" 
                  alt="Collaborative urban planning" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-white font-black text-lg">System Verified</div>
                      <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Institutional Grade Tech</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 0.5: PROBLEM STATEMENT */}
      <section className="py-32 px-4 bg-charcoal/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-10 bg-red-500/5 rounded-full blur-[100px]"></div>
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1533167649158-6d508895b680?auto=format&fit=crop&q=80&w=1200" 
                  alt="Urban decay and neglect" 
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent mix-blend-overlay"></div>
              </div>
            </motion.div>

            <div className="space-y-12 order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.4em]"
              >
                <AlertTriangle className="w-3 h-3" /> The Challenge
              </motion.div>

              <div className="space-y-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-6xl font-black tracking-tighter leading-tight text-white"
                >
                  The <span className="text-red-500">Bureaucratic</span> <br />Bottleneck.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-400 font-medium leading-relaxed"
                >
                  Modern cities face ancient problems. The disconnect between citizens and authorities creates a cycle of urban decline.
                </motion.p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: <Map className="text-red-500" />,
                    title: "Reporting Confusion",
                    desc: "Citizens often encounter urban issues like broken streetlights or potholes but are left wondering which department to contact, leading to inaction."
                  },
                  {
                    icon: <Clock className="text-red-500" />,
                    title: "Delayed Resolution",
                    desc: "Traditional complaints often vanish into bureaucratic voids, resulting in significant delays or complete silence from authorities."
                  },
                  {
                    icon: <EyeOff className="text-red-500" />,
                    title: "Lack of Transparency",
                    desc: "Without real-time tracking, residents remain in the dark about the status of their reports, eroding trust in municipal governance."
                  }
                ].map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex gap-6 items-start"
                  >
                    <div className="mt-1 w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      {React.cloneElement(point.icon as React.ReactElement, { className: "w-5 h-5" })}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white">{point.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 0.7: HOW IT HELPS */}
      <section className="py-32 px-4 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]"
              >
                <CheckCircle2 className="w-3 h-3" /> The Solution
              </motion.div>

              <div className="space-y-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-6xl font-black tracking-tighter leading-tight text-white"
                >
                  How CivicSnap <br /><span className="text-amber-500">Transforms</span> Cities.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-400 font-medium leading-relaxed"
                >
                  We replace bureaucratic friction with digital precision, empowering every resident to become an active guardian of their city.
                </motion.p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <MapPin className="text-amber-500" />,
                    title: "Smart Reporting",
                    desc: "Instantly report issues with high-res photos and precise GPS coordinates for immediate verification."
                  },
                  {
                    icon: <Activity className="text-amber-500" />,
                    title: "Real-time Tracking",
                    desc: "Monitor the exact status of your report from 'Assigned' to 'Resolved' with live system updates."
                  },
                  {
                    icon: <Eye className="text-amber-500" />,
                    title: "Total Transparency",
                    desc: "Access public records of municipal actions, ensuring accountability and building community trust."
                  },
                  {
                    icon: <Send className="text-amber-500" />,
                    title: "Easy Communication",
                    desc: "Direct digital channels between residents and field technicians for faster, clearer resolution."
                  }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {React.cloneElement(feature.icon as React.ReactElement, { className: "w-6 h-6" })}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-amber-500/5 rounded-full blur-[100px]"></div>
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern city infrastructure management" 
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 0.8: KEY FEATURES */}
      <section className="py-32 px-4 bg-charcoal/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-24 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mx-auto"
            >
              <Zap className="w-3 h-3" /> Core Capabilities
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Key Features.</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-xl font-medium">The technical foundation of a smarter, more responsive community.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera />,
                title: "Easy Issue Reporting",
                desc: "Capture and upload high-resolution photos of urban issues instantly. Our system automatically processes visual data for faster department routing.",
                bullets: ["Instant photo uploads", "AI-assisted categorization", "Simple 3-step process"],
                image: "https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800"
              },
              {
                icon: <MapPin />,
                title: "Location-Based Tracking",
                desc: "Every report is tagged with precise GPS coordinates, allowing maintenance crews to navigate directly to the problem site without confusion.",
                bullets: ["Precise GPS tagging", "Interactive city map", "Neighborhood-level filtering"],
                image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800"
              },
              {
                icon: <RefreshCw />,
                title: "Real-Time Updates",
                desc: "Stay informed with instant push notifications and status changes. Watch your report move from submission to final resolution in real-time.",
                bullets: ["Live status tracking", "Push notifications", "Historical activity logs"],
                image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800"
              },
              {
                icon: <BarChart3 />,
                title: "Authority Dashboard",
                desc: "A powerful command center for city officials to manage, prioritize, and assign tasks based on urgency and location data.",
                bullets: ["Task prioritization", "Resource allocation", "Performance analytics"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              },
              {
                icon: <Users />,
                title: "Community Participation",
                desc: "Foster a sense of ownership. Upvote existing reports to highlight urgent issues and join community discussions on local improvements.",
                bullets: ["Issue upvoting", "Community comments", "Local leaderboard"],
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
              },
              {
                icon: <ShieldCheck />,
                title: "Verified Integrity",
                desc: "Ensuring every report is authentic through system-level verification and community moderation to maintain data quality.",
                bullets: ["User verification", "Spam protection", "Data encryption"],
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-10 rounded-[3rem] overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all group flex flex-col h-full"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover grayscale opacity-10 group-hover:scale-110 group-hover:opacity-30 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-8 group-hover:scale-110 transition-transform">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8 flex-grow">
                    {feature.desc}
                  </p>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision CTA */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/[0.02] blur-[150px] rounded-full"></div>
        <div className="reveal max-w-4xl mx-auto px-4 space-y-16">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">Join the Urban <br />Revolution.</h2>
            <p className="text-2xl text-gray-500 max-w-2xl mx-auto font-medium">Every improvement begins with a single citizen snapping an issue. Start today.</p>
          </div>
          <button 
            onClick={onOpenLogin}
            className="inline-flex items-center gap-4 px-12 py-8 bg-amber-500 text-black font-black text-2xl rounded-[2.5rem] hover:bg-amber-400 active:scale-95 transition-all shadow-2xl"
          >
            Create Your Account <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
