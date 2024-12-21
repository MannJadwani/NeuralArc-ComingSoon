'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const ComingSoonPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDiscordClick = () => {
    window.open('https://discord.gg/JHfyRaF4JV', '_blank');
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 -left-4 w-96 h-96 bg-[#00ff87] rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-[#0066ff] rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#5865F2] rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000" />
      </motion.div>

      {/* Grid overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-5xl mx-auto">
          {/* Logo and Tagline Section */}
          <div className="space-y-8 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-400"
            >
              <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
              <span>Something revolutionary is brewing</span>
            </motion.div>

            {/* Logo */}
            <motion.div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h1 className="text-7xl font-bold text-white tracking-tighter mb-4">
                Neural<span className="bg-gradient-to-r from-[#00ff87] to-[#0066ff] text-transparent bg-clip-text">Arc</span>
              </h1>
              <motion.div 
                className="h-1 w-32 mx-auto rounded-full"
                animate={{
                  background: isHovered 
                    ? 'linear-gradient(90deg, #00ff87 0%, #00ff87 100%)'
                    : 'linear-gradient(90deg, #00ff87 0%, #0066ff 100%)',
                }}
              />
            </motion.div>

            {/* Main heading */}
            <div className="space-y-2">
              <AnimatedText
                text="Redefining The Future Of Technology"
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="relative"
              >
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00ff87] to-[#0066ff] text-transparent bg-clip-text animate-pulse">
                  Coming Soon
                </span>
              </motion.div>
            </div>
            
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              A groundbreaking project that will challenge everything you know about technological possibilities.
              <span className="block mt-2">Be among the first to witness what's coming.</span>
            </motion.p>

            {/* Discord Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="mt-12 flex justify-center"
            >
              <button
                onClick={handleDiscordClick}
                className="group relative overflow-hidden px-8 py-4 bg-[#5865F2] rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(88,101,242,0.4)] transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff87] to-[#0066ff] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <svg 
                    className="w-6 h-6 fill-white" 
                    role="img" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  <span className="text-white font-bold">Join our Discord</span>
                </div>
              </button>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8"
            >
              {[
                { label: 'Early Adopters', value: '600+' },
                { label: 'Global Reach', value: '50K+' },
                { label: 'Days Until Launch', value: '14' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#00ff87] to-[#0066ff] text-transparent bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 w-full px-4"
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-600">
            <div>© {new Date().getFullYear()} NeuralArc. All rights reserved.</div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              {[
                { name: 'Instagram', url: 'https://instagram.com/neuralarc.in' },
                { name: 'X', url: 'https://x.com/MannJadwani' },
                { name: 'GitHub', url: 'https://github.com/MannJadwani' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#00ff87' }}
                  className="transition-colors duration-200"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default ComingSoonPage;