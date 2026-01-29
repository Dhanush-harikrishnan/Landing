import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, FileText, Server, Eye, AlertTriangle } from 'lucide-react';

export default function Security() {
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
        
        <h1 className="text-4xl font-display font-bold mb-8">Security</h1>
        <p className="text-white/60 mb-8">Last updated: January 29, 2026</p>
        
        <div className="space-y-6 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-cyan-400" />
              Data Encryption
            </h2>
            <p>All data transmitted between your browser and AETHOPS servers is encrypted using industry-standard 256-bit SSL/TLS encryption. Your business data, including CRM records, invoices, and inventory information, is encrypted at rest using AES-256 encryption.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-cyan-400" />
              SOC 2 Type II Compliance
            </h2>
            <p>AETHOPS is SOC 2 Type II certified, demonstrating our commitment to maintaining the highest standards of security, availability, and confidentiality for your business operations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Server className="w-6 h-6 text-cyan-400" />
              Infrastructure Security
            </h2>
            <p>Our infrastructure is hosted on enterprise-grade cloud providers with 99.99% uptime SLA. We implement regular security audits, penetration testing, and vulnerability assessments to ensure your business data remains secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-cyan-400" />
              Access Controls
            </h2>
            <p>AETHOPS implements role-based access control (RBAC) allowing you to define precise permissions for team members accessing CRM data, invoices, and inventory. Multi-factor authentication (MFA) is available for enhanced account security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-cyan-400" />
              Data Backup & Recovery
            </h2>
            <p>Your business data is automatically backed up daily with 30-day retention. In the event of data loss, we can restore your CRM contacts, invoices, and inventory records from any point within the retention period.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-cyan-400" />
              Incident Response
            </h2>
            <p>Our security team monitors systems 24/7 for potential threats. In case of a security incident, we have established protocols to respond immediately, notify affected users, and implement remediation measures.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">GDPR Compliance</h2>
            <p>AETHOPS is fully compliant with GDPR regulations. You maintain complete control over your business data and can request data export or deletion at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Report a Security Issue</h2>
            <p>If you discover a security vulnerability, please report it immediately to security@aethops.com. We take all reports seriously and will respond within 24 hours.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
