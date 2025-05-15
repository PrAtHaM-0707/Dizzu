import React from 'react';
import { motion } from 'framer-motion';
import { Server, Activity, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background pattern */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0" 
        style={{ backgroundImage: "url('/images/dizzu banner.gif')" }}
      ></div> */}
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="gradient-text mb-4">
              Power Up Your Discord Server
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              DizZu is the ultimate utility bot for server engagement, activity tracking,
              moderation, and lots of fun features to enhance your Discord community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Add to Discord
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
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Server className="text-primary-500" />
                <span className="text-gray-300">95+ Servers</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Activity className="text-primary-500" />
                <span className="text-gray-300">99.9% Uptime</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <ArrowRight className="text-primary-500" />
                <span className="text-gray-300">Easy Setup</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl blur-xl"></div>
            <div className="relative bg-gray-800 border border-gray-700 rounded-xl p-6 w-full max-w-lg shadow-2xl">
              <div className="flex items-center space-x-2 border-b border-gray-700 pb-4 mb-4">
                <img src="/images/dizzu.gif" alt="DizZu Logo" className="h-8 w-8" />
                <span className="text-xl font-bold gradient-text">DizZu Bot</span>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-3">
                  <p className="text-gray-300">
                    <span className="text-primary-400 font-semibold">@DizZu</span> /welcome setup
                  </p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <p className="text-gray-200">
                    <span className="text-secondary-400 font-semibold">@User</span> Welcome setup initiated! Please choose a welcome channel.
                  </p>
                </div>
                <div className="bg-gray-900 rounded-lg p-3">
                  <p className="text-gray-300">
                    <span className="text-primary-400 font-semibold">@DizZu</span> #welcome
                  </p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <p className="text-gray-200">
                    <span className="text-secondary-400 font-semibold">@User</span> Perfect! Welcome messages will be sent to #welcome channel.
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="bg-gray-700/50 rounded-lg px-4 py-2 text-sm animate-pulse">
                    DizZu is typing...
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;