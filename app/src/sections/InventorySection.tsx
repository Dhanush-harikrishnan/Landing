import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package, MapPin, AlertTriangle, ShoppingCart } from 'lucide-react';

export default function InventorySection() {
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

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Content using CSS Grid - no absolute positioning */}
      <div className="container-strict">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-stretch min-h-[600px] lg:min-h-[700px]">
          
          {/* Left Column - Content (stacks on top on mobile, left on desktop) */}
          <motion.div 
            className="order-2 lg:order-1 flex flex-col justify-center lg:pr-12 xl:pr-16"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.span 
              variants={fadeInUp}
              className="mono text-xs uppercase tracking-[0.12em] text-cyan-400 mb-4"
            >
              Inventory
            </motion.span>
            
            <motion.h2 
              variants={fadeInUp}
              className="font-display font-bold text-white leading-[1.05] tracking-[-0.02em] mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
            >
              Know your stock in real time.
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-white/70 text-base lg:text-lg leading-relaxed mb-8 max-w-md"
            >
              Track levels across locations, set alerts, and reorder before you run out.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="mb-10">
              <Button
                size="lg"
                className="bg-cyan-400 text-dark hover:bg-cyan-500 font-medium px-6 py-6 text-base transition-all duration-200 hover:-translate-y-0.5 gpu-accelerate"
              >
                Explore inventory
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Feature Card - separate from CTA with proper spacing */}
            <motion.div 
              variants={fadeInUp}
              className="glass-card-strong rounded-2xl p-5 max-w-md"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-white/70">Multi-location</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-white/70">Alerts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShoppingCart className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-white/70">Purchase orders</span>
                </div>
              </div>
              
              {/* Sample Stock Items */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/20 flex items-center justify-center">
                      <Package className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-sm text-white block">Widget Pro X1</span>
                      <span className="text-xs text-white/50">Warehouse A • SKU-8842</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-white block">1,247</span>
                    <span className="text-xs text-emerald-400">In stock</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-400/20 flex items-center justify-center">
                      <Package className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-sm text-white block">Gadget Plus</span>
                      <span className="text-xs text-white/50">Warehouse B • SKU-8843</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-white block">24</span>
                    <span className="text-xs text-amber-400">Low stock</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider line - visible only on lg */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-px h-full bg-cyan-400/30" />

          {/* Right Column - Image (stacks below on mobile, right on desktop) */}
          <motion.div 
            className="relative order-1 lg:order-2"
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div 
              className="relative w-full h-64 sm:h-80 lg:h-full lg:min-h-[600px] rounded-2xl lg:rounded-none lg:rounded-r-3xl overflow-hidden"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Gradient overlay for smooth transition to left side */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-dark/50 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent lg:hidden" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
