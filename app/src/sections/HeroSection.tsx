import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, FileText, Package, Bell } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-dark"
    >
      {/* Fixed Background Image - doesn't interfere with scroll */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')`,
          }}
        />
        {/* Dark overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-transparent to-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="container-strict pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              className="order-2 lg:order-1"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {/* Label */}
              <motion.span 
                variants={fadeInUp}
                className="mono text-xs uppercase tracking-[0.12em] text-white/50 mb-4 block"
              >
                
              </motion.span>

              {/* Headline */}
              <motion.h1 
                variants={fadeInUp}
                className="font-display font-bold text-white leading-[1.05] tracking-[-0.02em] mb-2"
                style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
              >
                Run your business
              </motion.h1>
              <motion.h1 
                variants={fadeInUp}
                className="font-display font-bold leading-[1.05] tracking-[-0.02em] mb-6"
                style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
              >
                <span className="text-cyan-400">like a pro.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p 
                variants={fadeInUp}
                className="text-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-md"
              >
                One modular platform for CRM, invoicing, and inventory. Built for teams that move fast.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <Button
                  size="lg"
                  className="bg-cyan-400 text-dark hover:bg-cyan-500 font-medium px-6 py-6 text-base transition-all duration-200 hover:-translate-y-0.5 gpu-accelerate"
                >
                  Get started free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 hover:border-white/30 px-6 py-6 text-base transition-all duration-200"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch demo
                </Button>
              </motion.div>

              {/* Trust indicator */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-center gap-3 mt-10"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-white/50">Built for modern teams</span>
              </motion.div>
            </motion.div>

            {/* Right Column - Dashboard Card */}
            <motion.div
              className="order-1 lg:order-2"
              variants={scaleIn}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {/* Cyan glow */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 40%, rgba(46,195,229,0.15), rgba(0,0,0,0) 60%)',
                }}
              />
              
              <div className="glass-card-strong rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-dashboard gpu-accelerate animate-float">
                <div className="flex gap-3 lg:gap-6">
                  {/* Sidebar */}
                  <div className="w-12 lg:w-16 flex flex-col gap-2 lg:gap-3 flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-md bg-cyan-400" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white/50" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white/50" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <Package className="w-5 h-5 text-white/50" />
                    </div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                    {/* Revenue Widget */}
                    <div className="glass-card rounded-xl lg:rounded-2xl p-3 lg:p-4">
                      <div className="flex items-center justify-between mb-2 lg:mb-3">
                        <span className="text-[10px] lg:text-xs text-white/50 mono uppercase tracking-wider">Revenue</span>
                        <TrendingUp className="w-3 lg:w-4 h-3 lg:h-4 text-cyan-400" />
                      </div>
                      <div className="text-lg lg:text-2xl font-display font-bold text-white mb-1 lg:mb-2">$124.5K</div>
                      <div className="flex items-center gap-1 text-[10px] lg:text-xs text-emerald-400">
                        <span>+12.5%</span>
                      </div>
                      <svg className="w-full h-6 lg:h-8 mt-2" viewBox="0 0 100 30">
                        <path
                          d="M0,25 Q10,20 20,22 T40,15 T60,18 T80,8 T100,5"
                          fill="none"
                          stroke="rgba(46,195,229,0.6)"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    {/* Invoices Widget */}
                    <div className="glass-card rounded-xl lg:rounded-2xl p-3 lg:p-4">
                      <div className="flex items-center justify-between mb-2 lg:mb-3">
                        <span className="text-[10px] lg:text-xs text-white/50 mono uppercase tracking-wider">Invoices</span>
                        <FileText className="w-3 lg:w-4 h-3 lg:h-4 text-cyan-400" />
                      </div>
                      <div className="space-y-1.5 lg:space-y-2">
                        <div className="flex items-center justify-between text-[10px] lg:text-sm">
                          <span className="text-white/70">#001</span>
                          <span className="px-1.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-400 text-[8px] lg:text-[10px]">Paid</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] lg:text-sm">
                          <span className="text-white/70">#002</span>
                          <span className="px-1.5 py-0.5 rounded-full bg-amber-400/20 text-amber-400 text-[8px] lg:text-[10px]">Pending</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] lg:text-sm">
                          <span className="text-white/70">#003</span>
                          <span className="px-1.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-400 text-[8px] lg:text-[10px]">Paid</span>
                        </div>
                      </div>
                    </div>

                    {/* Inventory Widget */}
                    <div className="glass-card rounded-xl lg:rounded-2xl p-3 lg:p-4">
                      <div className="flex items-center justify-between mb-2 lg:mb-3">
                        <span className="text-[10px] lg:text-xs text-white/50 mono uppercase tracking-wider">Stock</span>
                        <Bell className="w-3 lg:w-4 h-3 lg:h-4 text-cyan-400" />
                      </div>
                      <div className="space-y-2 lg:space-y-3">
                        <div>
                          <div className="flex justify-between text-[9px] lg:text-xs mb-1">
                            <span className="text-white/70">Widget</span>
                            <span className="text-amber-400">Low</span>
                          </div>
                          <div className="h-1 lg:h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[25%] bg-amber-400 rounded-full" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[9px] lg:text-xs mb-1">
                            <span className="text-white/70">Gadget</span>
                            <span className="text-emerald-400">OK</span>
                          </div>
                          <div className="h-1 lg:h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[78%] bg-emerald-400 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
