import React from 'react';
import { AIRecommendation } from '../types';

interface AIResultsProps {
  recommendations: AIRecommendation[] | null;
  onShowPricing: () => void;
  onRestart: () => void;
}

const AIResults: React.FC<AIResultsProps> = ({ recommendations, onShowPricing, onRestart }) => {
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 sm:py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">No recommendations found.</h2>
        <p className="text-slate-300 mb-8">We couldn't generate a specific recommendation based on your answers. Please feel free to browse our full pricing list or book a meeting to discuss your needs.</p>
        <div className="flex justify-center gap-4">
          <button onClick={onRestart} className="bg-slate-600 hover:bg-slate-500 text-white font-semibold py-2 px-6 rounded-lg">Try Again</button>
          <button onClick={onShowPricing} className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg">View Full Pricing</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Your Personalized Recommendations</h2>
        <p className="text-slate-300 mt-2">Based on your needs, here are the top solutions we suggest.</p>
      </div>
      <div className="space-y-8">
        {recommendations.map((rec, index) => (
          <div key={index} className="bg-slate-800 rounded-xl p-6 sm:p-8 border border-indigo-500/50 shadow-2xl shadow-indigo-900/50">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Recommendation {index + 1}</p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{rec.tier}</h3>
            <p className="text-base sm:text-lg text-slate-300 mb-4">from {rec.serviceName}</p>
            <blockquote className="border-l-4 border-slate-600 pl-4 text-slate-300 italic">
              {rec.justification}
            </blockquote>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-slate-400 mb-6">These recommendations are a starting point. Feel free to explore our complete list of services or book a meeting for a detailed consultation.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={onRestart} className="bg-slate-600 hover:bg-slate-500 text-white font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105">
            Restart Survey
          </button>
          <button onClick={onShowPricing} className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-lg transition-transform transform hover:scale-105">
            View Full Pricing Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIResults;