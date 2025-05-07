import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
                <Shield className="h-6 w-6 text-primary-500" />
              </div>
              <h1>Privacy Policy</h1>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
              <p className="text-sm text-gray-400">Last updated: June 1, 2025</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
              <p>
                This Privacy Policy explains how DizZu ("we", "us", or "our") collects, uses, and shares your information when you use our Discord bot service.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p>
                When you add DizZu to your Discord server or interact with the bot, we collect the following information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 my-4">
                <li>Discord server ID and name</li>
                <li>Discord user IDs and usernames of members in the server</li>
                <li>Messages processed for command execution (not stored long-term)</li>
                <li>Voice activity data for tracking features</li>
                <li>Command usage statistics</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Information</h2>
              <p>
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 my-4">
                <li>To provide and maintain our service</li>
                <li>To track user activity for leaderboards and engagement metrics</li>
                <li>To respond to your commands and requests</li>
                <li>To improve our bot's functionality</li>
                <li>To protect against spam and abuse</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention</h2>
              <p>
                We retain data only as long as necessary to provide our services. When you remove DizZu from your server, we will delete all associated server data within 30 days.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Data Sharing</h2>
              <p>
                We do not sell or rent your data to third parties. We may share data in the following situations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 my-4">
                <li>With service providers who help us operate our services</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, privacy, safety, or property</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">User Controls</h2>
              <p>
                Server administrators can use the <code>/privacy</code> command to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 my-4">
                <li>Request a copy of server data stored by DizZu</li>
                <li>Delete all server data</li>
                <li>Opt out of specific data collection features</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
              <p>
                Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify users of any significant changes through our support server or through the bot itself. Your continued use of DizZu after changes to this policy constitutes acceptance of those changes.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please join our support server on Discord or contact us at support@dizzu.example.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;