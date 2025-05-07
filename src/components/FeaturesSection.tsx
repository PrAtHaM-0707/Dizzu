import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Activity, LineChart, ShieldCheck, Gift, Zap, Bot, Sparkles } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Welcome System',
      description: 'Customize welcome messages, DM greetings, and farewell messages to make new members feel at home.'
    },
    {
      icon: Activity,
      title: 'Tracking',
      description: 'Monitor voice activity, message engagement, and server invites to recognize active members.'
    },
    {
      icon: Bot,
      title: 'EmbedBuilder',
      description: 'Create beautiful custom embeds with an intuitive interface - no coding required.'
    },
    {
      icon: LineChart,
      title: 'Logging',
      description: 'Keep track of server activities with comprehensive logs for messages, moderation, and more.'
    },
    {
      icon: ShieldCheck,
      title: 'Auto-Systems',
      description: 'Set up autorole, autoresponder, and autoreact systems to automate server management.'
    },
    {
      icon: Gift,
      title: 'Giveaways',
      description: 'Host engaging giveaways with customizable duration, winners, and entry requirements.'
    },
    {
      icon: Sparkles,
      title: 'Fun Commands',
      description: 'Entertain your community with fun commands, games, and interactive activities.'
    },
    {
      icon: Zap,
      title: 'Utility',
      description: 'Access useful utilities like polls, reminders, server info, and more in one place.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-950 relative">
      <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Powerful <span className="gradient-text">Features</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Everything you need to manage, grow, and engage your Discord community.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;