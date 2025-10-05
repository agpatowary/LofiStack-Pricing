import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { AIRecommendation, SurveyAnswers, ViewState, Filter } from './types';
import { generateRecommendation } from './services/geminiService';
import { PRICING_DATA } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import PricingDisplay from './components/PricingDisplay';
import AISurvey from './components/AISurvey';
import AIResults from './components/AIResults';
import Footer from './components/Footer';
import PricingFilter from './components/PricingFilter';

const loadingMessages = [
  "Connecting to our AI Advisor...",
  "Analyzing your business goals and challenges...",
  "Cross-referencing our service catalog...",
  "Tailoring the perfect solution for you...",
  "Finalizing your personalized recommendations...",
];

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('pricing');
  const [recommendations, setRecommendations] = useState<AIRecommendation[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>({ type: 'all', id: null });
  const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);

  useEffect(() => {
    let intervalId: number | undefined;
    if (view === 'loading') {
      document.title = 'Generating Recommendations... | LofiStack';
      let messageIndex = 0;
      setLoadingMessage(loadingMessages[0]);
      
      intervalId = window.setInterval(() => {
        messageIndex = (messageIndex + 1) % loadingMessages.length;
        setLoadingMessage(loadingMessages[messageIndex]);
      }, 2500);
    } else if (view === 'survey') {
      document.title = 'AI Advisor Survey | LofiStack';
    } else if (view === 'results') {
      document.title = 'Your AI Recommendations | LofiStack';
    } else { // pricing view
      if (filter.type === 'all' || !filter.id) {
          document.title = 'LofiStack Pricing & AI Advisor';
      } else if (filter.type === 'pillar') {
          const pillar = PRICING_DATA.find(p => p.id === filter.id);
          document.title = `${pillar ? pillar.name.replace(/Pillar \d: /,'') : 'Pricing'} | LofiStack`;
      } else if (filter.type === 'category') {
          let categoryName = 'Category';
          for (const pillar of PRICING_DATA) {
              const category = pillar.categories.find(c => c.id === filter.id);
              if (category) {
                  categoryName = category.name;
                  break;
              }
          }
          document.title = `${categoryName} Pricing | LofiStack`;
      }
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [view, filter]);

  const handleStartSurvey = useCallback(() => {
    setView('survey');
    window.scrollTo(0, 0);
  }, []);
  
  const handleShowPricing = useCallback(() => {
    setView('pricing');
    setError(null);
    setRecommendations(null);
    setFilter({ type: 'all', id: null }); // Reset filter
  }, []);

  const handleSurveySubmit = useCallback(async (answers: SurveyAnswers) => {
    setView('loading');
    setError(null);
    window.scrollTo(0, 0);
    try {
      const result = await generateRecommendation(answers);
      setRecommendations(result);
      setView('results');
    } catch (err) {
      console.error(err);
      setError('Sorry, we encountered an error while generating your recommendation. Please try again later or view our full pricing list.');
      setView('pricing'); // Revert to pricing view on error
    }
  }, []);

  const renderContent = () => {
    switch (view) {
      case 'survey':
        return <AISurvey onSubmit={handleSurveySubmit} onBack={handleShowPricing} />;
      case 'loading':
        return (
          <div className="text-center py-20 sm:py-32 px-4 flex flex-col items-center justify-center min-h-[60vh]">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full border-4 border-slate-700"></div>
              <div className="absolute inset-0 rounded-full border-t-4 border-indigo-400 animate-spin"></div>
            </div>
            <h2 className="mt-8 text-2xl sm:text-3xl font-bold text-white">Crafting Your Recommendations</h2>
            <p className="mt-4 text-slate-300 text-lg w-full max-w-md transition-opacity duration-500 ease-in-out">
              {loadingMessage}
            </p>
          </div>
        );
      case 'results':
        return <AIResults recommendations={recommendations} onShowPricing={handleShowPricing} onRestart={handleStartSurvey} />;
      case 'pricing':
      default:
        return (
            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 py-12">
              <aside className="lg:w-72 flex-shrink-0">
                <div className="lg:sticky lg:top-24">
                  <PricingFilter currentFilter={filter} onFilterChange={setFilter} />
                </div>
              </aside>
              <div className="flex-grow min-w-0">
                <Hero onStartSurvey={handleStartSurvey} />
                {error && <div className="mb-8 bg-red-900/50 border border-red-500 rounded-lg text-center p-4"><p>{error}</p></div>}
                <PricingDisplay filter={filter} />
              </div>
            </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Header />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;