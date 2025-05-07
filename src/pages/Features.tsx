import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Activity, LineChart, ShieldCheck, Gift, Zap, Sparkles, Settings, Shield, Bell, Users } from 'lucide-react';
import CTASection from '../components/CTASection';

const FeatureSection: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  imageSrc?: string;
  reverse?: boolean;
}> = ({ title, description, icon, features, imageSrc, reverse }) => {
  return (
    <div className={`py-16 md:py-24 ${reverse ? 'bg-gray-900' : 'bg-gray-950'}`}>
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-800 rounded-lg">
                {icon}
              </div>
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>
            <p className="text-gray-400 mb-6">{description}</p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="mt-1 text-primary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: reverse ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={`bg-gray-800 border border-gray-700 rounded-xl p-6 ${imageSrc ? '' : 'aspect-[4/3]'}`}>
              {imageSrc ? (
                <img src={imageSrc} alt={title} className="rounded-lg w-full h-auto" />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-500 text-lg">Feature Preview</div>
                </div>
              )}
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl blur-xl transform translate-x-2 translate-y-2"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const featureSections = [
    {
      title: "Welcome System",
      description: "Make new members feel at home with customizable welcome messages, DM greetings, and farewell messages.",
      icon: <MessageSquare className="h-6 w-6 text-primary-500" />,
      features: [
        "Customizable welcome messages with variables",
        "Personalized DM greetings for new members",
        "Farewell messages when members leave",
        "Custom welcome images and embeds",
        "Multi-channel welcome configuration"
      ]
    },
    {
      title: "Activity Tracking",
      description: "Track and reward your most active members with comprehensive activity monitoring.",
      icon: <Activity className="h-6 w-6 text-primary-500" />,
      features: [
        "Voice activity tracking with duration",
        "Message engagement statistics",
        "Server invite tracking",
        "Leaderboards for most active members",
        "Activity role rewards system"
      ],
      reverse: true
    },
    {
      title: "EmbedBuilder",
      description: "Create beautiful custom embeds with an intuitive interface - no coding required.",
      icon: <Bot className="h-6 w-6 text-primary-500" />,
      features: [
        "Visual embed builder with live preview",
        "Support for all Discord embed features",
        "Save and reuse embed templates",
        "Schedule embed messages",
        "Edit existing embeds easily"
      ]
    },
    {
      title: "Logging System",
      description: "Keep track of everything happening in your server with comprehensive logging.",
      icon: <LineChart className="h-6 w-6 text-primary-500" />,
      features: [
        "Message edit and delete logs",
        "Member join and leave tracking",
        "Voice channel activity logs",
        "Moderation action logging",
        "Server change and role update logs"
      ],
      reverse: true
    },
    {
      title: "Auto Systems",
      description: "Automate routine tasks with powerful auto-systems to save time and improve consistency.",
      icon: <ShieldCheck className="h-6 w-6 text-primary-500" />,
      features: [
        "Autorole for new members",
        "Auto-responder for keywords and phrases",
        "Auto-react to specific messages",
        "Scheduled announcements and reminders",
        "Auto-moderation for inappropriate content"
      ]
    },
    {
      title: "Giveaways",
      description: "Host engaging giveaways with customizable duration, winners, and entry requirements.",
      icon: <Gift className="h-6 w-6 text-primary-500" />,
      features: [
        "Easy giveaway setup with custom duration",
        "Multiple winner support",
        "Role requirement options",
        "Reroll functionality for no-shows",
        "Giveaway announcement customization"
      ],
      reverse: true
    },
    {
      title: "Fun Commands",
      description: "Keep your community entertained with a variety of fun commands and interactive features.",
      icon: <Sparkles className="h-6 w-6 text-primary-500" />,
      features: [
        "Memes and image manipulation",
        "Trivia and quiz games",
        "8-ball and fortune telling",
        "Reaction-based games",
        "Random facts and jokes"
      ]
    },
    {
      title: "Utility Tools",
      description: "Access a wide range of utility tools to help manage and organize your Discord server.",
      icon: <Zap className="h-6 w-6 text-primary-500" />,
      features: [
        "Polls and voting systems",
        "Reminder and scheduling tools",
        "Server information and statistics",
        "User info and lookup commands",
        "Role and permission management"
      ],
      reverse: true
    },
    {
      title: "Coming Soon Features",
      description: "We're constantly working on new features to make DizZu even more powerful.",
      icon: <Settings className="h-6 w-6 text-primary-500" />,
      features: [
        "Advanced ticket system with custom forms",
        "Comprehensive moderation suite",
        "Join to create voice channels",
        "Music player with playlist support",
        "Custom leveling system with rewards"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary-500/10 rounded-full filter blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Powerful <span className="gradient-text">Features</span> for Your Discord Server
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover all the ways DizZu can transform your Discord community with these powerful, easy-to-use features.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col items-center">
                <Shield className="h-6 w-6 text-primary-500 mb-2" />
                <span className="text-sm text-gray-300">Moderation</span>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col items-center">
                <Bell className="h-6 w-6 text-primary-500 mb-2" />
                <span className="text-sm text-gray-300">Notifications</span>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col items-center">
                <Users className="h-6 w-6 text-primary-500 mb-2" />
                <span className="text-sm text-gray-300">Community</span>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col items-center">
                <Zap className="h-6 w-6 text-primary-500 mb-2" />
                <span className="text-sm text-gray-300">Automation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Feature sections */}
      {featureSections.map((section, index) => (
        <FeatureSection
          key={index}
          title={section.title}
          description={section.description}
          icon={section.icon}
          features={section.features}
          reverse={section.reverse}
        />
      ))}
      
      <CTASection />
    </motion.div>
  );
};

export default Features;