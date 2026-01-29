import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Users, FileText, Package, ArrowRight } from 'lucide-react';

export default function BentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative w-full py-20 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/80 to-dark/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-dark/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-strict">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="mb-12 lg:mb-16">
            <h2
              className="font-display font-bold text-white leading-[1.05] tracking-[-0.02em] mb-4"
              style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
            >
              CRM, Invoicing, Inventory
              <br />
              <span className="text-cyan-400">—one platform.</span>
            </h2>
            <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-xl">
              Switch less. See everything. Automate the busywork.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Card A - CRM (spans 2 columns on large) */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-2 lg:col-span-1 lg:row-span-1"
            >
              <div className="glass-card-strong rounded-2xl lg:rounded-3xl p-5 lg:p-6 h-full shadow-card hover:border-cyan-400/40 transition-all duration-300 gpu-accelerate animate-float">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="mono text-xs uppercase tracking-[0.12em] text-white/50">CRM</span>
                </div>
                <h3 className="font-display font-semibold text-white text-lg lg:text-xl mb-2">
                  Track leads, close deals
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Never lose context. Every interaction, note, and task in one timeline.
                </p>
                {/* Mini Pipeline UI */}
                <div className="flex gap-2 mt-auto">
                  <div className="flex-1">
                    <div className="text-[10px] text-white/40 mb-2 mono">LEAD</div>
                    <div className="space-y-1.5">
                      <div className="h-7 lg:h-8 bg-white/5 rounded-lg" />
                      <div className="h-7 lg:h-8 bg-white/5 rounded-lg" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-white/40 mb-2 mono">QUALIFIED</div>
                    <div className="space-y-1.5">
                      <div className="h-7 lg:h-8 bg-cyan-400/20 rounded-lg border border-cyan-400/30" />
                      <div className="h-7 lg:h-8 bg-white/5 rounded-lg" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-white/40 mb-2 mono">CLOSED</div>
                    <div className="space-y-1.5">
                      <div className="h-7 lg:h-8 bg-emerald-400/20 rounded-lg border border-emerald-400/30" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card B - Invoicing */}
            <motion.div variants={fadeInUp}>
              <div className="glass-card-strong rounded-2xl lg:rounded-3xl p-5 lg:p-6 h-full shadow-card hover:border-cyan-400/40 transition-all duration-300 gpu-accelerate animate-float-delayed">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="mono text-xs uppercase tracking-[0.12em] text-white/50">Invoicing</span>
                </div>
                <h3 className="font-display font-semibold text-white text-lg lg:text-xl mb-2">
                  Send invoices in seconds
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Get paid faster with professional invoices.
                </p>
                {/* Mini Invoice List */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-xs text-white/70">#INV-001</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-400 text-[10px]">Paid</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-xs text-white/70">#INV-002</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-400 text-[10px]">Pending</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-xs text-white/70">#INV-003</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-400 text-[10px]">Paid</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card C - Inventory (spans full width on mobile, 3 columns on large) */}
            <motion.div variants={fadeInUp} className="md:col-span-2 lg:col-span-3">
              <div className="glass-card-strong rounded-2xl lg:rounded-3xl p-5 lg:p-6 shadow-card hover:border-cyan-400/40 transition-all duration-300 gpu-accelerate">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                        <Package className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <span className="mono text-xs uppercase tracking-[0.12em] text-white/50 block">Inventory</span>
                        <h3 className="font-display font-semibold text-white text-lg lg:text-xl">
                          Real-time stock, smart alerts
                        </h3>
                      </div>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mb-4 lg:mb-0">
                      Track levels across locations, set alerts, and reorder before you run out.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-cyan-400 text-sm hover:gap-2 transition-all flex-shrink-0"
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                {/* Mini Stock Bars */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-4 lg:mt-6">
                  {[
                    { name: 'Widget Pro', status: 'Low', percent: 25, color: 'bg-amber-400', units: '24 units' },
                    { name: 'Gadget X', status: 'OK', percent: 78, color: 'bg-emerald-400', units: '156 units' },
                    { name: 'Tool Y', status: 'OK', percent: 92, color: 'bg-emerald-400', units: '89 units' },
                    { name: 'Device Z', status: 'Critical', percent: 8, color: 'bg-red-400', units: '3 units' },
                  ].map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-white/70">{item.name}</span>
                        <span className={item.color === 'bg-amber-400' ? 'text-amber-400' : item.color === 'bg-red-400' ? 'text-red-400' : 'text-emerald-400'}>
                          {item.status}
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full transition-all duration-500`} style={{ width: `${item.percent}%` }} />
                      </div>
                      <span className="text-xs text-white/40 mt-1 block">{item.units}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
