import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, AlertTriangle, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-[80vh] flex items-center justify-center"
    >
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-primary-500 rounded-full blur-xl"
              />
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <Bot className="h-24 w-24 text-primary-500" />
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-warning-500" />
              <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            </div>
            <p className="text-xl text-gray-400 mb-8">
              Oops! This page seems to have vanished into the digital void.
            </p>
            <Link 
              to="/"
              className="btn-primary flex items-center gap-2 mx-auto w-fit"
            >
              <ArrowLeft className="h-5 w-5" />
              Return to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;