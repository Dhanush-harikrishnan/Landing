import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function RefundPolicy() {
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
        
        <h1 className="text-4xl font-display font-bold mb-8">Refund Policy</h1>
        <p className="text-white/60 mb-8">Last updated: January 29, 2026</p>
        
        <div className="space-y-6 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. 30-Day Money-Back Guarantee</h2>
            <p>AETHOPS offers a 30-day money-back guarantee for all new subscriptions. If you're not satisfied with our platform within the first 30 days, we'll provide a full refund.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Eligibility Criteria</h2>
            <p>To be eligible for a refund, you must request it within 30 days of your initial subscription date. Enterprise plans may have different terms as specified in your service agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How to Request a Refund</h2>
            <p>To request a refund, contact our support team at support@aethops.com with your account details and reason for cancellation. Refunds are typically processed within 5-7 business days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Partial Refunds</h2>
            <p>After the 30-day period, refunds are not provided. However, you can cancel your subscription at any time, and you will not be charged for subsequent billing periods.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Export</h2>
            <p>Before cancelling, ensure you export all your business data including CRM contacts, invoices, and inventory records. We retain data for 30 days after cancellation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
            <p>For questions about refunds, contact support@aethops.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
