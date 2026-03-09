import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Discord Server?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of servers that trust DizZu to enhance their community experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1102090272399167508" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              Add to Discord
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="https://discord.gg/nbQWQ8hwYq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Join Support Server
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;