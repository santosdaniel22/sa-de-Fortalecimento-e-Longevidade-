
import React from 'react';
import { FunnelStep } from '../types';

interface ProgressBarProps {
  currentStep: FunnelStep;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const totalSteps = 7;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="fixed top-0 left-0 w-full z-50 p-4 sm:p-6 pointer-events-none">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-between mb-2 px-1">
          {[...Array(totalSteps)].map((_, i) => (
            <div 
              key={i} 
              className={`h-1 flex-1 mx-1 rounded-full transition-all duration-700 ${
                i <= currentStep ? 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between px-1">
           <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Passo {currentStep + 1} de {totalSteps}</span>
           <span className="text-[10px] uppercase tracking-widest text-green-400/80 font-bold">{Math.round(progress)}% Analisado</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
