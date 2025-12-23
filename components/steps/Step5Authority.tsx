
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

  const score = userResponse.vitalityScore || 0;
  // Calculate stroke-dasharray for a semi-circular gauge
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 10) * (circumference / 2);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-12">
        <h2 className="text-xl font-bold text-white/40 mb-8 uppercase tracking-[0.3em]">Diagnóstico de Performance</h2>
        
        {/* Visual Gauge instead of simple text to avoid "Step 5/10" confusion */}
        <div className="relative flex flex-col items-center justify-center">
          <svg width="200" height="120" viewBox="0 0 200 120" className="transform -rotate-180">
            <path
              d="M 30,100 A 70,70 0 0,1 170,100"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M 30,100 A 70,70 0 0,1 170,100"
              fill="none"
              stroke="url(#gauge-grad)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="219.9"
              strokeDashoffset={219.9 - (score / 10) * 219.9}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-10 flex flex-col items-center">
            <span className="text-6xl font-black text-white leading-none">{score.toFixed(1)}</span>
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-2">Índice Biométrico</span>
          </div>
        </div>
      </div>

      <div className="glass p-8 rounded-3xl border border-green-500/20 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-green-400 to-emerald-600"></div>
        <div className="flex items-center gap-3 mb-5">
           <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10"/><path d="M18.4 4.6a10 10 0 1 1-12.8 0"/></svg>
           </div>
           <h3 className="font-bold text-white uppercase tracking-widest text-xs">Parecer Técnico Especializado</h3>
        </div>
        
        {loadingInsight ? (
          <div className="space-y-4 py-2">
            <div className="shimmer w-full h-4 rounded bg-white/5"></div>
            <div className="shimmer w-11/12 h-4 rounded bg-white/5"></div>
            <div className="shimmer w-9/12 h-4 rounded bg-white/5"></div>
          </div>
        ) : (
          <p className="text-lg leading-relaxed text-white/90 font-medium italic">
            "{aiInsight}"
          </p>
        )}
      </div>

      <div className="glass p-8 rounded-3xl border border-white/5 mb-10 bg-gradient-to-br from-white/[0.03] to-transparent">
        <h3 className="text-xl font-bold mb-6 text-center text-white/80">Solução Estratégica: Vitality360</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           {[
             { label: 'Reversão do Desgaste Metabólico', icon: '⚡' },
             { label: 'Otimização do Sistema Neuroendócrino', icon: '🧠' },
             { label: 'Fortalecimento da Matriz Celular', icon: '🛡️' },
             { label: 'Protocolo de Recuperação Sistêmica', icon: '🧬' }
           ].map(feat => (
             <div key={feat.label} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4 group hover:bg-white/5 transition-all">
                <span className="text-2xl">{feat.icon}</span>
                <span className="text-xs font-bold text-white/60 group-hover:text-white leading-tight">{feat.label}</span>
             </div>
           ))}
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full py-6 rounded-2xl bg-white text-black font-black text-xl hover:bg-green-400 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] uppercase tracking-tight"
      >
        Acessar Protocolo de Correção
      </button>
    </div>
  );
};

export default Step5Authority;
