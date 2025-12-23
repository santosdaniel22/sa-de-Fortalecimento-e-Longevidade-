
import React, { useState, useEffect, useCallback } from 'react';
import { FunnelStep, UserResponse } from './types';
import ProgressBar from './components/ProgressBar';
import StepRenderer from './components/StepRenderer';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<FunnelStep>(FunnelStep.ATTRACTION);
  const [userResponse, setUserResponse] = useState<UserResponse>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextStep = useCallback(() => {
    if (currentStep < FunnelStep.CONVERSION) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsTransitioning(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    }
  }, [currentStep]);

  const updateResponse = useCallback((data: Partial<UserResponse>) => {
    setUserResponse(prev => ({ ...prev, ...data }));
  }, []);

  // Background gradient shift based on step
  const getBackgroundStyle = () => {
    switch (currentStep) {
      case FunnelStep.ATTRACTION: return 'from-blue-900/40 to-black';
      case FunnelStep.AWARENESS: return 'from-red-900/20 to-black';
      case FunnelStep.EDUCATION: return 'from-emerald-900/30 to-black';
      case FunnelStep.ENGAGEMENT: return 'from-indigo-900/30 to-black';
      case FunnelStep.AUTHORITY: return 'from-amber-900/20 to-black';
      case FunnelStep.CONVERSION: return 'from-green-900/40 via-black to-blue-900/20';
      default: return 'from-slate-900 to-black';
    }
  };

  return (
    <div className={`min-h-screen bg-black text-white relative overflow-hidden transition-colors duration-1000 bg-gradient-to-b ${getBackgroundStyle()}`}>
      
      {/* Dynamic Animated Particles/Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-green-500 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px] animate-bounce" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[180px]"></div>
      </div>

      <ProgressBar currentStep={currentStep} />

      <main className={`relative z-10 flex flex-col items-center justify-center min-h-screen p-4 pt-24 pb-12 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="w-full max-w-2xl">
          <StepRenderer 
            currentStep={currentStep} 
            userResponse={userResponse} 
            updateResponse={updateResponse} 
            onNext={nextStep} 
          />
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="absolute bottom-4 left-0 w-full text-center pointer-events-none opacity-40">
        <p className="text-[10px] tracking-[0.3em] uppercase">Vitality360 &copy; 2024 • Performance & Wellbeing</p>
      </footer>
    </div>
  );
};

export default App;
