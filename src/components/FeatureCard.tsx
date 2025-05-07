import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      className="card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 p-3 bg-gray-800 rounded-lg w-fit">
          <Icon className="h-6 w-6 text-primary-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;