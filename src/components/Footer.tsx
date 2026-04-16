import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-yellow-500/20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 tracking-wider">
            MR. NIKA
          </div>

          <div className="flex gap-6">
            <a href="#facebook" className="text-gray-400 hover:text-yellow-500 font-medium tracking-wide transition-colors duration-300">
              Facebook
            </a>
            <a href="#instagram" className="text-gray-400 hover:text-yellow-500 font-medium tracking-wide transition-colors duration-300">
              Instagram
            </a>
            <a href="#linkedin" className="text-gray-400 hover:text-yellow-500 font-medium tracking-wide transition-colors duration-300">
              LinkedIn
            </a>
          </div>

          <div className="text-gray-400 text-sm font-light tracking-wider">
            <p>კონტაქტი: info@example.com</p>
          </div>

        </div>

        <div className="text-center text-gray-500 text-sm border-t border-white/5 pt-8 font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} ყველა უფლება დაცულია.</p>
        </div>
        
      </div>
    </footer>
  );
};