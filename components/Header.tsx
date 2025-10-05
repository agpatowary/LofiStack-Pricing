import React, { useState, useEffect } from 'react';

const Logo: React.FC = () => (
  <a href="/" className="flex items-center" aria-label="LofiStack Home">
    <img 
      src="https://storage.googleapis.com/msgsndr/5EOza2NVupRx5Q09FXtM/media/688a3b9d3c5f726398ed1f24.png"
      alt="LofiStack Logo"
      className="h-8 sm:h-9"
    />
  </a>
);

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Prevent background scrolling when the modal is open
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);


  return (
    <>
      <header className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-700 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Logo />
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-sm sm:text-base"
          >
            Book a Meeting
          </button>
        </div>
      </header>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60] p-4 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] max-h-[800px] flex flex-col relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-white transition-colors z-10 p-2 rounded-full bg-slate-700 hover:bg-slate-600"
              aria-label="Close booking modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <iframe
              src="https://url.lofistack.com/widget/service-menus/it-tech-support-services"
              title="Book a Meeting with LofiStack"
              className="w-full h-full border-0 rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;