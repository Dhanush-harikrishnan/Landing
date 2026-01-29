import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
        <p className="text-white/60 mb-8">Last updated: January 29, 2026</p>
        
        <div className="space-y-6 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p>At AETHOPS, we collect information that you provide directly to us, including but not limited to name, email address, and usage data when you use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
            <p>We do not sell your personal information. We may share your information with service providers who assist us in operating our platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Analytics and Business Intelligence</h2>
            <p>AETHOPS collects and analyzes usage data to improve our CRM, invoicing, and inventory management features. This includes:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Feature usage patterns to optimize workflow efficiency</li>
              <li>Performance metrics for dashboard loading and report generation</li>
              <li>Aggregated business metrics (non-identifiable) for industry benchmarking</li>
              <li>Error logs and system diagnostics for platform reliability</li>
            </ul>
            <p className="mt-3">We use this data to enhance your business operations and provide better insights through our analytics dashboard.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at privacy@aethops.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
