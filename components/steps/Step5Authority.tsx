
import React, { useEffect, useState } from 'react';
import { UserResponse } from '../../types';
import { getPersonalizedInsight } from '../../services/geminiService';

interface Step5Props {
  userResponse: UserResponse;
  onNext: () => void;
}

const Step5Authority: React.FC<Step5Props> = ({ userResponse, onNext }) => {
  const [aiInsight, setAiInsight] = useState<string>("");
  const [loadingInsight, setLoadingInsight] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      const insight = await getPersonalizedInsight(userResponse);
      setAiInsight(insight);
      setLoadingInsight(false);
    };
    fetchInsight();
  }, [userResponse]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white/60 mb-2 uppercase tracking-[0.2em]">Seu Diagnóstico</h2>
        <div className="text-7xl font-black gradient-text mb-4">{userResponse.vitalityScore}/10</div>
        <p className="text-white/40 text-sm">Vitality Score Atual</p>
      </div>

      <div className="glass p-8 rounded-3xl border border-green-500/30 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
        <div className="flex items-center gap-3 mb-4">
           <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="M12 4v4"/></svg>
           </div>
           <h3 className="font-bold text-green-400 uppercase tracking-widest text-xs">Análise por IA</h3>
        </div>
        
        {loadingInsight ? (
          <div className="h-20 flex items-center justify-center">
            <div className="shimmer w-full h-12 rounded-lg opacity-20"></div>
          </div>
        ) : (
          <p className="text-lg italic leading-relaxed text-white/90">
            "{aiInsight}"
          </p>
        )}
      </div>

      <div className="glass p-8 rounded-3xl border border-white/5 mb-10">
        <h3 className="text-xl font-bold mb-6 text-center">Apresentamos: O Método Vitality360</h3>
        <p className="text-white/60 text-center mb-8">
          A solução definitiva que combina biohacking, fortalecimento físico e nutrição de performance para levar seu corpo ao próximo nível em apenas 12 semanas.
        </p>
        <div className="grid grid-cols-2 gap-4">
           <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl mb-1">🔥</div>
              <div className="text-xs font-bold text-white/80">Metabolismo Acelerado</div>
           </div>
           <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl mb-1">🏔️</div>
              <div className="text-xs font-bold text-white/80">Foco Inabalável</div>
           </div>
           <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl mb-1">🛡️</div>
              <div className="text-xs font-bold text-white/80">Imunidade de Elite</div>
           </div>
           <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl mb-1">🧬</div>
              <div className="text-xs font-bold text-white/80">Longevidade Ativa</div>
           </div>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full py-6 rounded-full bg-white text-black font-black text-xl hover:bg-green-400 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
      >
        Quero Acessar o Método
      </button>
    </div>
  );
};

export default Step5Authority;
