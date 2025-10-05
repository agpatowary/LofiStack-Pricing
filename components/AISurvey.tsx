import React from 'react';
import { useState } from 'react';
import { SurveyAnswers } from '../types';

interface AISurveyProps {
  onSubmit: (answers: SurveyAnswers) => void;
  onBack: () => void;
}

const AISurvey: React.FC<AISurveyProps> = ({ onSubmit, onBack }) => {
  const [answers, setAnswers] = useState<SurveyAnswers>({
    businessType: '',
    primaryGoal: '',
    budget: '',
    challenges: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(answers);
  };

  // Fix: Added a `typeof value === 'string'` check to ensure `value` is a string before calling `trim()`.
  // This resolves the TypeScript error "Property 'trim' does not exist on type 'unknown'".
  const isFormValid = Object.values(answers).every(value => typeof value === 'string' && value.trim() !== '');

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let's Find Your Perfect Solution</h2>
        <p className="text-slate-300 mt-2">Answer a few quick questions, and our AI advisor will suggest the best services for you.</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl border border-slate-700 space-y-6">
        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-slate-300 mb-2">What is your business type or industry?</label>
          <input
            type="text"
            id="businessType"
            name="businessType"
            value={answers.businessType}
            onChange={handleChange}
            placeholder="e.g., E-commerce, Local Restaurant, SaaS Startup"
            className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="primaryGoal" className="block text-sm font-medium text-slate-300 mb-2">What is your primary goal right now?</label>
          <input
            type="text"
            id="primaryGoal"
            name="primaryGoal"
            value={answers.primaryGoal}
            onChange={handleChange}
            placeholder="e.g., Build a new website, Automate sales tasks, Increase online leads"
            className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">What is your approximate budget for this project?</label>
          <select
            id="budget"
            name="budget"
            value={answers.budget}
            onChange={handleChange}
            className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select a budget range</option>
            <option value="Under $1,000">Under $1,000</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000+">$10,000+</option>
          </select>
        </div>
        <div>
          <label htmlFor="challenges" className="block text-sm font-medium text-slate-300 mb-2">Briefly describe your current challenges or what you want to achieve.</label>
          <textarea
            id="challenges"
            name="challenges"
            value={answers.challenges}
            onChange={handleChange}
            rows={4}
            placeholder="e.g., 'Our current website is outdated and not getting any traffic.' or 'We spend too much time manually following up with leads.'"
            className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
           <button
            type="button"
            onClick={onBack}
            className="w-full bg-slate-600 hover:bg-slate-500 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Back to Pricing
          </button>
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:cursor-not-allowed disabled:text-slate-400 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg"
          >
            Get My Recommendation
          </button>
        </div>
      </form>
    </div>
  );
};

export default AISurvey;