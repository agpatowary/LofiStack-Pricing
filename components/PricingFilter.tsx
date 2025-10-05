import React from 'react';
import { PRICING_DATA } from '../constants';
import { Filter } from '../types';

// Icon Components - Duplicated here to avoid creating new files. In a larger app, these would be in a shared icons file.
const ListBulletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7l8 4" />
    </svg>
);

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


const pillarIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  pillar1: CubeIcon,
  pillar2: WrenchScrewdriverIcon,
  pillar3: CloudIcon,
  pillar4: LinkIcon,
};

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

interface PricingFilterProps {
  currentFilter: Filter;
  onFilterChange: (filter: Filter) => void;
}

const PricingFilter: React.FC<PricingFilterProps> = ({ currentFilter, onFilterChange }) => {
  const renderFilterButton = (text: string, Icon: React.FC<any>, onClick: () => void, isActive: boolean) => {
    const baseClasses = "w-full font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 ease-in-out text-sm transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800";
    const activeClasses = "bg-indigo-600 text-white shadow-lg ring-2 ring-indigo-500/50";
    const inactiveClasses = "bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white hover:-translate-y-px";

    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <div className="flex items-center gap-3 text-left">
          <Icon className="w-5 h-5 flex-shrink-0" />
          <span className="truncate">{text}</span>
        </div>
      </button>
    );
  };

  return (
    <div className="lg:sticky lg:top-24 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-6">Filter Services</h3>
      
      <div className="space-y-6">
        <div>
          {renderFilterButton('Show All', ListBulletIcon, () => onFilterChange({ type: 'all', id: null }), currentFilter.type === 'all')}
        </div>

        <div className="border-t border-slate-700 pt-5">
          <h4 className="font-semibold text-indigo-400 mb-3 text-sm tracking-wider uppercase">By Pillar</h4>
          <div className="flex flex-col items-start gap-2">
            {PRICING_DATA.map(pillar => {
              const Icon = pillarIcons[pillar.id] || CubeIcon;
              return renderFilterButton(
                pillar.name,
                Icon,
                () => onFilterChange({ type: 'pillar', id: pillar.id }),
                currentFilter.type === 'pillar' && currentFilter.id === pillar.id
              );
            })}
          </div>
        </div>

        <div className="border-t border-slate-700 pt-5">
          <h4 className="font-semibold text-indigo-400 mb-3 text-sm tracking-wider uppercase">By Category</h4>
          <div className="flex flex-col items-start gap-2">
            {PRICING_DATA.flatMap(pillar => pillar.categories).map(category => {
              const Icon = categoryIcons[category.id] || SparklesIcon;
              return renderFilterButton(
                category.name,
                Icon,
                () => onFilterChange({ type: 'category', id: category.id }),
                currentFilter.type === 'category' && currentFilter.id === category.id
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingFilter;