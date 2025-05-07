import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="py-16 md:py-24 bg-gray-950 relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gray-800 rounded-full">
                <FileText className="h-6 w-6 text-primary-500" />
              </div>
              <h1>Terms of Service</h1>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
              <p className="text-sm text-gray-400">Last updated: June 1, 2025</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Agreement to Terms</h2>
              <p>
                These Terms of Service govern your use of DizZu (the "Bot"), a Discord bot operated by DizZu Team ("we", "us", or "our"). By adding DizZu to your Discord server or using its features, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Description of Service</h2>
              <p>
                DizZu is a Discord bot that provides utilities for server engagement, moderation, tracking, and entertainment. Features include welcome messages, activity tracking, embed building, logging, and more.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">User Responsibilities</h2>
              <p>
                When using DizZu, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 my-4">
                <li>Comply with Discord's Terms of Service and Community Guidelines</li>
                <li>Not use the Bot for illegal purposes or to violate others' rights</li>
                <li>Not attempt to exploit, damage, or gain unauthorized access to the Bot's systems</li>
                <li>Not use the Bot to spam, harass, or disrupt Discord servers</li>
                <li>Maintain responsibility for all content created using the Bot</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
              <p>
                The Bot, including its code, design, and functionality, is owned by us and protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to use the Bot for its intended purposes.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Content and Conduct</h2>
              <p>
                You are responsible for all content created, transmitted, or displayed while using the Bot. We reserve the right to remove content or restrict access to users who violate these Terms or use the Bot inappropriately.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
              <p>
                The Bot is provided "as is" without warranties of any kind. We are not liable for any damages, including but not limited to direct, indirect, incidental, consequential, or punitive damages arising from your use of the Bot or inability to use the Bot.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Service Availability</h2>
              <p>
                We strive to maintain high availability but do not guarantee that the Bot will be accessible at all times. We reserve the right to modify, suspend, or discontinue the Bot or any features at any time without notice.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Termination</h2>
              <p>
                We may terminate or suspend your access to the Bot immediately, without prior notice, for conduct that we determine violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify users of any significant changes through our support server or through the Bot itself. Your continued use of DizZu after changes to these Terms constitutes acceptance of those changes.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
              <p>
                If you have questions about these Terms, please join our support server on Discord or contact us at support@dizzu.example.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TermsOfService;