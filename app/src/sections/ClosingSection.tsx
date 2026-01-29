import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, Check, Shield, Lock, FileText } from 'lucide-react';

export default function ClosingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
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
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const productLinks = ['Features', 'Pricing', 'Integrations', 'API'];
  const resourceLinks = ['Blog', 'Guides', 'Help Center', 'Webinars'];
  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '#refunds' },
    { label: 'Security', href: '#security' },
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative w-full bg-dark overflow-hidden"
    >
      {/* CTA Section */}
      <div className="relative py-20 lg:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark-light" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* CTA Content */}
        <motion.div 
          className="relative z-10 container-strict"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.h2 
              variants={fadeInUp}
              className="font-display font-bold text-white leading-[1.05] tracking-[-0.02em] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
            >
              Ready to streamline
              <br />
              <span className="text-cyan-400">your business?</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-white/70 text-center text-base lg:text-lg max-w-lg mb-10"
            >
              Start free. No credit card required. Set up in minutes.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button
                size="lg"
                className="bg-cyan-400 text-dark hover:bg-cyan-500 font-medium px-8 py-6 text-base transition-all duration-200 hover:-translate-y-0.5 gpu-accelerate"
              >
                Get started free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 hover:border-white/30 px-8 py-6 text-base transition-all duration-200"
              >
                Talk to sales
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 mt-10"
            >
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 mt-8"
            >
              <a
                href="mailto:hello@businessos.app"
                className="flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@businessos.app</span>
              </a>
              <a
                href="tel:1-800-555-0147"
                className="flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">1-800-555-0147</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/5 py-12 lg:py-16">
        <div className="container-strict">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Product */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-display font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-display font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-display font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Trust & Status */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-display font-semibold text-white mb-4">Trust</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-white/50">SOC 2 Type II</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-white/50">256-bit Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-white/50">GDPR Compliant</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="AETHOPS" 
                className="w-10 h-10"
              />
              <span className="font-display font-medium text-white text-sm">
                AETHOPS
              </span>
            </div>

            {/* System Status */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/50">All systems operational</span>
              <span className="text-xs text-white/30">• 99.99% uptime</span>
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/30">
              © 2026 AETHOPS. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </section>
  );
}
