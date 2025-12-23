
import React from 'react';

interface Step1Props {
  onNext: (pain: string) => void;
}

const Step1Attraction: React.FC<Step1Props> = ({ onNext }) => {
  const options = [
    { label: 'Exausto e Sem Energia', icon: '🔋' },
    { label: 'Fraco e Sem Vigor', icon: '💪' },
    { label: 'Estressado e Desconectado', icon: '🧠' },
    { label: 'Quero Atingir Minha Melhor Forma', icon: '✨' },
  ];

  return (
    <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
      <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">
        Seja Bem-Vindo à Sua Evolução
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
        Você sente que está vivendo em <span className="gradient-text">modo de sobrevivência?</span>
      </h1>
      <p className="text-lg text-white/60 mb-12 max-w-lg mx-auto">
        Acordar cansado, sentir o corpo pesado e a mente lenta não deveria ser o seu "normal". 
        Como você se sente hoje?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => onNext(opt.label)}
            className="glass group p-6 rounded-2xl border border-white/10 hover:border-green-400/50 hover:bg-white/10 transition-all duration-300 text-left flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{opt.icon}</span>
              <span className="font-semibold text-white/90 group-hover:text-white">{opt.label}</span>
            </div>
            <span className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step1Attraction;
