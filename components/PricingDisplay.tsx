import React, { useMemo, useState } from 'react';
import { PRICING_DATA } from '../constants';
import { Filter, Pillar, Category, Service, Tier, InfoBlock, PackSelector as PackSelectorType } from '../types';

// Tooltip Component
const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs bg-slate-900 text-white text-sm rounded-md shadow-lg p-2 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-700"></div>
      </div>
    </div>
  );
};


// Icon Components
const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 16l-4-16M1 12h22"></path>
  </svg>
);

const CogIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L15 12l-2.293-2.293a1 1 0 010-1.414L15 6m-5 16l2.293-2.293a1 1 0 000-1.414L10 12l-2.293 2.293a1 1 0 000 1.414L10 18z"></path>
  </svg>
);

const MegaphoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.136A1.76 1.76 0 015.882 11H11m0-5.118A2 2 0 0113 7h2.5a2 2 0 012 2v2.5a2 2 0 01-2 2H13m0-5.118l2-2.882m-2 2.882l-2-2.882"></path>
    </svg>
);

const PaintBrushIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
    </svg>
);

const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.001 3.001 0 015.688 0M12 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);

const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>
);

const WrenchScrewdriverIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
);

const CloudIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
    </svg>
);

const LinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.596a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
    </svg>
);

const ScaleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945C18.055 5.013 13.045 1 7.5 1S-1.945 5.013.055 11z"></path>
    </svg>
);

// Deliverable Icons
const TemplateIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
  </svg>
);
const MobileResponsiveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3m-3-3.75h.008v.008h-.008v-.008zm3.75-3.75h.008v.008h-.008v-.008zm-3.75 0h.008v.008h-.008v-.008z" />
  </svg>
);
const SeoReportIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);
const EcommerceCartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.093-.822l3.483-8.682a1.093 1.093 0 00-.42-1.282l-4.01-2.673a1.093 1.093 0 00-1.282.42l-3.483 8.682A1.093 1.093 0 007.5 14.25z" />
  </svg>
);
const AnalyticsDashboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 5.106a7.5 7.5 0 013.598 3.598m0 0A7.5 7.5 0 1021 12a7.5 7.5 0 00-3.298-6.302z" />
  </svg>
);
const StrategySessionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
  </svg>
);
const ApiIntegrationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 15v1.5M12 4.5v-1.5m0 15v1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 6.75h.008v.008H15V6.75zm-3 0h.008v.008H12V6.75zm-3 0h.008v.008H9V6.75zm-3 3.75h.008v.008H6v-.008zm3 0h.008v.008H9v-.008zm3 0h.008v.008H12v-.008zm3 0h.008v.008H15v-.008zm-3 3.75h.008v.008H12v-.008zm3 0h.008v.008H15v-.008zm-3 3.75h.008v.008H12v-.008z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.75A2.25 2.25 0 004.5 6v12a2.25 2.25 0 002.25 2.25h10.5A2.25 2.25 0 0019.5 18V6a2.25 2.25 0 00-2.25-2.25H15" />
  </svg>
);
const TrainingDocIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
  </svg>
);


const categoryIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  cat1: CodeIcon,
  cat2: CogIcon,
  cat3: SparklesIcon,
  cat4: MegaphoneIcon,
  cat5: PaintBrushIcon,
  cat6: UsersIcon,
  cat7: ShieldCheckIcon,
  cat8: WrenchScrewdriverIcon,
  cat9: CloudIcon,
  cat10: LinkIcon,
  cat11: ScaleIcon,
};

const deliverableIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  template: TemplateIcon,
  'mobile-responsive': MobileResponsiveIcon,
  'seo-report': SeoReportIcon,
  'custom-design': PaintBrushIcon,
  'ecommerce-cart': EcommerceCartIcon,
  'analytics-dashboard': AnalyticsDashboardIcon,
  'strategy-session': StrategySessionIcon,
  'api-integration': ApiIntegrationIcon,
  'training-doc': TrainingDocIcon,
};


const TierCalculator: React.FC<{ tier: Tier; value: number; onChange: (value: number) => void }> = ({ tier, value, onChange }) => {
  const { type, label, min, max, step, unit } = tier.calculator!;
  
  let estimatedPrice = '';
  let priceDescription = '';
  let setupFee = 0;

  switch (type) {
    case 'web_pages':
      let basePrice = 0;
      let perPageCost = 0;
      let basePages = 0;

      if (tier.name.includes('Launch')) {
        basePrice = 500;
        perPageCost = 125;
        basePages = 1;
      } else if (tier.name.includes('Scale')) {
        basePrice = 2000;
        perPageCost = 300;
        basePages = 6;
      } else if (tier.name.includes('Excel')) {
        basePrice = 6000;
        perPageCost = 400;
        basePages = 16;
      }
      const total = basePrice + perPageCost * (value - basePages);
      estimatedPrice = `$${total.toLocaleString()}`;
      priceDescription = 'Estimated Project Cost';
      break;

    case 'ad_spend_launch':
      setupFee = 150;
      const feeLaunch = value * 0.15;
      estimatedPrice = `$${feeLaunch.toLocaleString()}/month`;
      priceDescription = 'Estimated Management Fee';
      break;
    
    case 'ad_spend_scale':
      setupFee = 300;
      const feeScale = value * 0.20;
      estimatedPrice = `$${feeScale.toLocaleString()}/month`;
      priceDescription = 'Estimated Management Fee';
      break;
    
    case 'ad_spend_excel':
      const baseRetainer = 500;
      const feeExcel = value * 0.10 + baseRetainer;
      estimatedPrice = `$${feeExcel.toLocaleString()}/month`;
      priceDescription = 'Estimated Retainer + Mgmt Fee';
      break;
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="mt-6 pt-6 border-t border-slate-700/50">
      <h6 className="text-base font-semibold text-slate-100 mb-3">Estimate Your Price</h6>
      <div className="space-y-4">
        <label htmlFor={`calculator-${tier.name.replace(/\s+/g, '-')}`} className="block text-sm text-slate-300">{label}</label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            id={`calculator-${tier.name.replace(/\s+/g, '-')}`}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleSliderChange}
            className="w-full price-slider"
          />
          <div className="bg-slate-700 rounded-md px-3 py-1 text-white font-mono text-center w-32 flex-shrink-0">
            {unit === '$' && unit}{value.toLocaleString()}{unit !== '$' && ` ${unit}`}
          </div>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-4 text-center mt-4">
          <p className="text-sm text-slate-400">{priceDescription}</p>
          <p className="text-2xl font-bold text-indigo-400">{estimatedPrice}</p>
          {setupFee > 0 && (
            <p className="text-xs text-slate-500 mt-1">+ ${setupFee.toLocaleString()} one-time setup fee</p>
          )}
        </div>
      </div>
    </div>
  );
};

const PackSelector: React.FC<{ packSelector: PackSelectorType }> = ({ packSelector }) => {
  const [selectedPacks, setSelectedPacks] = useState<string[]>([]);

  const handleToggle = (pack: string) => {
    setSelectedPacks(prev => {
      if (prev.includes(pack)) {
        return prev.filter(p => p !== pack);
      }
      if (prev.length < packSelector.limit) {
        return [...prev, pack];
      }
      return prev; // Limit reached, do not add
    });
  };

  const isLimitReached = selectedPacks.length >= packSelector.limit;

  return (
    <div className="mt-6 pt-6 border-t border-slate-700/50">
      <div className="flex justify-between items-center mb-4">
        <h6 className="text-base font-semibold text-slate-100">Select Your Automation Packs</h6>
        <p className="text-sm font-semibold text-slate-300 bg-slate-700 px-3 py-1 rounded-full">
          {selectedPacks.length} / {packSelector.limit} selected
        </p>
      </div>
      <div className="space-y-2">
        {packSelector.options.map((pack) => {
          const isSelected = selectedPacks.includes(pack);
          const isDisabled = !isSelected && isLimitReached;
          
          const baseClasses = "w-full text-left font-medium py-2.5 px-4 rounded-lg transition-all duration-200 ease-in-out text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 flex items-center gap-3";
          const activeClasses = "bg-indigo-600 text-white shadow-md";
          const inactiveClasses = "bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white";
          const disabledClasses = "bg-slate-700/50 text-slate-500 cursor-not-allowed";

          return (
            <button
              key={pack}
              onClick={() => handleToggle(pack)}
              disabled={isDisabled}
              className={`${baseClasses} ${isSelected ? activeClasses : (isDisabled ? disabledClasses : inactiveClasses)}`}
            >
              {isSelected ? 
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> :
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"></circle></svg>
              }
              <span>{pack}</span>
            </button>
          );
        })}
      </div>
       {isLimitReached && (
        <p className="text-xs text-indigo-400 mt-3 text-center">
          You have reached the selection limit for this tier.
        </p>
      )}
    </div>
  );
};


const TierCard: React.FC<{ tier: Tier }> = ({ tier }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [calculatorValue, setCalculatorValue] = useState<number | null>(tier.calculator ? tier.calculator.defaultValue : null);

  return (
    <div className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-4 md:p-6 flex justify-between items-start gap-4 cursor-pointer"
        aria-expanded={isExpanded}
        aria-controls={`tier-details-${tier.name.replace(/\s+/g, '-')}`}
      >
        <div className="flex-grow">
          <h5 className="text-lg sm:text-xl font-bold text-indigo-400">
            {tier.tooltip ? (
              <Tooltip text={tier.tooltip}>
                <span className="border-b-2 border-dotted border-indigo-500/50 cursor-help">{tier.name}</span>
              </Tooltip>
            ) : (
              tier.name
            )}
          </h5>
          {tier.price && <p className="text-xl sm:text-2xl font-semibold text-white mt-2">{tier.price}</p>}
        </div>
        <svg
          className={`w-6 h-6 text-slate-400 transform transition-transform duration-300 flex-shrink-0 mt-1 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      <div
        id={`tier-details-${tier.name.replace(/\s+/g, '-')}`}
        className={`transition-all duration-500 ease-in-out grid ${
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <div className="px-4 md:px-6 pb-6 pt-2 border-t border-slate-700">
              {tier.timeframe && <p className="text-sm text-slate-400 mb-2 mt-4">Timeframe: {tier.timeframe}</p>}
              {tier.goal && <p className="text-sm text-slate-300 mb-4 font-semibold">Goal: {tier.goal}</p>}
              <p className="text-slate-300 mb-4">{tier.description}</p>
              <ul className="space-y-2 text-slate-300">
                {tier.features.map((feature, index) => {
                    const featureText = typeof feature === 'string' ? feature : feature.text;
                    const featureTooltip = typeof feature === 'string' ? undefined : feature.tooltip;
                    return (
                        <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span>
                                {featureTooltip ? (
                                <Tooltip text={featureTooltip}>
                                    <span className="border-b border-dotted border-slate-500 cursor-help">{featureText}</span>
                                </Tooltip>
                                ) : (
                                featureText
                                )}
                            </span>
                        </li>
                    );
                })}
              </ul>

              {tier.deliverables && tier.deliverables.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h6 className="text-base font-semibold text-slate-100 mb-4">Key Deliverables</h6>
                  <div className="space-y-4">
                    {tier.deliverables.map((deliverable) => {
                      const Icon = deliverableIcons[deliverable.icon] || CodeIcon;
                      return (
                        <div key={deliverable.title} className="flex items-start gap-4 p-3 bg-slate-900/50 rounded-lg">
                          <Icon className="w-8 h-8 text-indigo-400 flex-shrink-0 mt-1" />
                          <div>
                            <h6 className="font-semibold text-white">
                                {deliverable.tooltip ? (
                                    <Tooltip text={deliverable.tooltip}>
                                        <span className="border-b border-dotted border-slate-500 cursor-help">{deliverable.title}</span>
                                    </Tooltip>
                                ) : (
                                    deliverable.title
                                )}
                            </h6>
                            <p className="text-sm text-slate-400">{deliverable.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {tier.packSelector && (
                <PackSelector packSelector={tier.packSelector} />
              )}

              {tier.calculator && calculatorValue !== null && (
                <TierCalculator
                  tier={tier}
                  value={calculatorValue}
                  onChange={setCalculatorValue}
                />
              )}
              {tier.limitations && <p className="text-xs text-slate-500 mt-4 pt-4 border-t border-slate-700/50">Note: {tier.limitations}</p>}
            </div>
        </div>
      </div>
    </div>
  );
};

const InfoBlockCard: React.FC<{ block: InfoBlock }> = ({ block }) => (
  <div className="bg-slate-800/50 rounded-lg p-4 md:p-6 border border-slate-700">
    <h5 className="text-lg font-bold text-indigo-400">{block.title}</h5>
    {Array.isArray(block.content) ? (
      <ul className="list-disc list-inside mt-2 text-slate-300 space-y-1">
        {block.content.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    ) : (
      <p className="mt-2 text-slate-300">{block.content}</p>
    )}
    {block.example && <p className="text-sm text-slate-400 mt-3 italic bg-slate-900 p-3 rounded-md">Example: {block.example}</p>}
  </div>
);

const ServiceDisplay: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-slate-800 rounded-xl p-4 sm:p-6 md:p-8 border border-slate-700 shadow-lg">
    <h4 className="text-2xl sm:text-3xl font-bold text-white">
        {service.tooltip ? (
            <Tooltip text={service.tooltip}>
                <span className="border-b-2 border-dotted border-slate-500 cursor-help">{service.name}</span>
            </Tooltip>
        ) : (
            service.name
        )}
    </h4>
    {service.description && <p className="mt-2 text-slate-300 max-w-3xl text-sm sm:text-base">{service.description}</p>}
    
    {service.tiers && service.tiers.length > 0 && (
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {service.tiers.map(tier => <TierCard key={tier.name} tier={tier} />)}
      </div>
    )}

    {service.pricing && service.pricing.length > 0 && (
       <div className="mt-6">
         <ul className="space-y-2 text-slate-300">
          {service.pricing.map((item, index) => (
            <li key={index} className="flex items-center p-3 bg-slate-700/50 rounded-md">
              <svg className="w-5 h-5 mr-3 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
       </div>
    )}

    {service.details && service.details.length > 0 && (
       <div className="mt-6">
         <ul className="list-disc list-inside text-slate-300 space-y-2">
          {service.details.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
       </div>
    )}

    {service.infoBlocks && service.infoBlocks.length > 0 && (
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {service.infoBlocks.map(block => <InfoBlockCard key={block.title} block={block} />)}
      </div>
    )}
  </div>
);

const CategoryDisplay: React.FC<{ category: Category }> = ({ category }) => {
  const Icon = categoryIcons[category.id];

  return (
    <section id={category.id} className="mb-12">
      <div className="mb-6 flex items-center gap-3 sm:gap-4">
        {Icon && <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400 flex-shrink-0" aria-hidden="true" />}
        <div className="flex-grow">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{category.name}</h3>
          {category.description && <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-4xl">{category.description}</p>}
        </div>
      </div>
      <div className="space-y-8">
        {category.services.map(service => <ServiceDisplay key={service.name} service={service} />)}
      </div>
    </section>
  );
};


const PillarDisplay: React.FC<{ pillar: Pillar }> = ({ pillar }) => (
  <section id={pillar.id} className="mb-16">
    <div className="mb-12 pb-6 border-b-2 border-slate-700">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{pillar.name}</h2>
      {pillar.description && <p className="mt-4 text-lg text-slate-300 max-w-5xl">{pillar.description}</p>}
    </div>
    <div className="space-y-12">
      {pillar.categories.map(category => <CategoryDisplay key={category.id} category={category} />)}
    </div>
  </section>
);


interface PricingDisplayProps {
  filter: Filter;
}

const PricingDisplay: React.FC<PricingDisplayProps> = ({ filter }) => {
  const filteredData = useMemo(() => {
    if (filter.type === 'all' || !filter.id) {
      return PRICING_DATA;
    }

    if (filter.type === 'pillar') {
      const pillar = PRICING_DATA.find(p => p.id === filter.id);
      return pillar ? [pillar] : [];
    }

    if (filter.type === 'category') {
      for (const pillar of PRICING_DATA) {
        const category = pillar.categories.find(c => c.id === filter.id);
        if (category) {
          // Return a new pillar structure containing only the filtered category
          return [{ ...pillar, categories: [category] }];
        }
      }
      return [];
    }

    return PRICING_DATA;
  }, [filter]);

  if (filteredData.length === 0) {
    return (
      <div className="text-center">
        <p className="text-xl text-slate-300">No services match the current filter.</p>
      </div>
    );
  }

  return (
    <div>
      <style>{`
        .price-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 0.5rem;
          background: #475569; /* slate-600 */
          border-radius: 0.25rem;
          outline: none;
          opacity: 0.7;
          transition: opacity .2s;
        }
        .price-slider:hover {
          opacity: 1;
        }
        .price-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 1.25rem;
          height: 1.25rem;
          background: #6366f1; /* indigo-500 */
          cursor: pointer;
          border-radius: 9999px;
          border: 2px solid #e2e8f0; /* slate-200 */
          margin-top: -4px;
        }
        .price-slider::-moz-range-thumb {
          width: 1.25rem;
          height: 1.25rem;
          background: #6366f1; /* indigo-500 */
          cursor: pointer;
          border-radius: 9999px;
          border: 2px solid #e2e8f0; /* slate-200 */
        }
      `}</style>
      {filteredData.map(pillar => (
        <PillarDisplay key={pillar.id} pillar={pillar} />
      ))}
    </div>
  );
};

export default PricingDisplay;