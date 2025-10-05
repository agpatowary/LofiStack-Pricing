
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-8 text-center text-slate-400">
        <p className="font-bold text-lg text-white mb-2">LOFISTACK</p>
        <p>112 Pathantoly Road, Chowmuhani, Agrabad, Chattogram, Bangladesh</p>
        <p>admin@lofistack.com | +18058008054</p>
        <p className="mt-6 text-sm">&copy; {new Date().getFullYear()} LofiStack. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
