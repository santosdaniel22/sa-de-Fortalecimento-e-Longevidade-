
import React from 'react';

interface Step2Props {
  onNext: () => void;
}

const Step2Awareness: React.FC<Step2Props> = ({ onNext }) => {
  return (
    <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        O <span className="text-red-500">Inimigo Invisível</span> da sua Vitalidade
      </h2>
      
      <div className="glass p-8 rounded-3xl border border-white/10 mb-10 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
        
        <p className="text-lg text-white/80 mb-6 leading-relaxed">
          O sedentarismo moderno e a má nutrição não apenas afetam seu peso. Eles <span className="font-bold text-white underline decoration-red-500 underline-offset-4">roubam sua clareza mental</span>, envelhecem suas células precocemente e desregulam seu sistema hormonal.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0 mt-1 text-xs">✕</div>
            <p className="text-white/60">Ciclos de cansaço crônico que o café não resolve mais.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0 mt-1 text-xs">✕</div>
            <p className="text-white/60">Perda de massa muscular e enfraquecimento das articulações.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0 mt-1 text-xs">✕</div>
            <p className="text-white/60">Falta de foco e produtividade no trabalho e na vida pessoal.</p>
          </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full sm:w-auto px-12 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-green-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
      >
        Eu quero mudar isso agora
      </button>
    </div>
  );
};

export default Step2Awareness;
