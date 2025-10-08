import React from 'react';

interface HeroProps {
  onStartSurvey: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartSurvey }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
        LofiStack Official Pricing Structure 2025
      </h1>
      <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 mb-8">
        Our pricing is built on a flexible, three-pillar structure designed to provide clarity and value for every client. Find the perfect solution tailored to your exact needs, budget, and business goals.
      </p>
      <div className="flex justify-center mb-6">
        <iframe
          src="https://drive.google.com/file/d/1RukrWL01VPrf4p0Lg4F4EsSlEgPmKVJy/preview"
          width={800}
          height={480}
          allow="autoplay"
          style={{ borderRadius: 16, overflow: 'hidden', display: 'block' }}
        />
      </div>
      <button
        onClick={onStartSurvey}
        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg py-4 px-10 rounded-full shadow-2xl shadow-indigo-600/30 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
      >
        What's best for me?
      </button>
    </div>
  );
};

export default Hero;