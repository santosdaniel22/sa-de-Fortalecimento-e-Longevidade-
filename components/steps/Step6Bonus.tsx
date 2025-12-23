
import React from 'react';

interface Step6Props {
  onNext: () => void;
}

const Step6Bonus: React.FC<Step6Props> = ({ onNext }) => {
  const bonuses = [
    { title: "Protocolo 'Sono Profundo'", value: "R$ 197,00", desc: "A ciência para desligar sua mente e regenerar seu corpo em tempo recorde." },
    { title: "Guia de Suplementação de Elite", value: "R$ 147,00", desc: "O que realmente funciona para otimizar hormônios e queima de gordura." },
    { title: "Masterclass: Ativação Metabólica", value: "R$ 297,00", desc: "Um treinamento em vídeo avançado para destravar seu metabolismo em menos de 48 horas." }
  ];

  return (
    <div className="text-center animate-in fade-in slide-in-from-right-12 duration-700">
      <div className="mb-8">
        <span className="bg-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1 rounded-full border border-amber-500/30">
          Gatilho de Oportunidade
        </span>
      </div>
      
      <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
        Mas eu decidi não te entregar apenas o <span className="gradient-text">Método Vitality360...</span>
      </h2>
      
      <p className="text-white/60 mb-10 max-w-xl mx-auto">
        Para garantir que você não tenha desculpas e alcance resultados 3x mais rápidos, eu adicionei estes <span className="text-white font-bold">Bônus Exclusivos</span> para quem agir agora:
      </p>

      <div className="space-y-4 mb-10">
        {bonuses.map((b, i) => (
          <div key={i} className="glass p-6 rounded-2xl border border-amber-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left group hover:border-amber-500/40 transition-all">
            <div className="flex-1">
              <h3 className="font-bold text-lg text-amber-500 group-hover:text-amber-400">{b.title}</h3>
              <p className="text-sm text-white/50">{b.desc}</p>
            </div>
            <div className="bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/20">
               <span className="text-xs text-white/40 line-through block">Valor: {b.value}</span>
               <span className="text-amber-500 font-black text-sm uppercase">Grátis</span>
            </div>
          </div>
        ))}
      </div>

      <div className="glass p-6 rounded-3xl border border-white/5 mb-10 bg-white/[0.02]">
        <p className="text-lg font-bold">
          Total em bônus: <span className="text-red-500 line-through">R$ 641,00</span> → <span className="text-green-400">R$ 0,00</span>
        </p>
      </div>

      <button
        onClick={onNext}
        className="w-full py-6 rounded-full bg-amber-500 text-black font-black text-xl hover:bg-amber-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(245,158,11,0.3)] animate-bounce-subtle"
      >
        VER CONDIÇÃO FINAL IRRESISTÍVEL
      </button>
      
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Step6Bonus;
