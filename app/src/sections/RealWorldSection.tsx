import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

export default function RealWorldSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
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
      className="relative w-full py-24 lg:py-40 bg-dark overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')`,
          }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/65 to-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-transparent to-dark/60" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container-strict"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="flex flex-col items-center text-center">
          <motion.h2 
            variants={fadeInUp}
            className="font-display font-bold text-white leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(32px, 6vw, 80px)' }}
          >
            Built for the real world.
          </motion.h2>
          <motion.h2 
            variants={fadeInUp}
            className="font-display font-bold text-cyan-400 leading-[1.05] tracking-[-0.02em] mt-2"
            style={{ fontSize: 'clamp(32px, 6vw, 80px)' }}
          >
            Designed for your team.
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-white/70 text-center text-base lg:text-xl max-w-2xl mt-6 lg:mt-8 leading-relaxed"
          >
            From first sale to hundredth shipment—stay organized without the chaos.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
