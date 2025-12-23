
import React from 'react';

interface Step3Props {
  onNext: () => void;
}

const Step3Education: React.FC<Step3Props> = ({ onNext }) => {
  const pillars = [
    { title: 'Nutrição Inteligente', desc: 'Combustível de alta octanagem, não apenas calorias.', color: 'bg-emerald-500' },
    { title: 'Fortalecimento Funcional', desc: 'Corpo resiliente capaz de suportar qualquer desafio.', color: 'bg-blue-500' },
    { title: 'Recuperação Ativa', desc: 'Sono reparador e gerenciamento do estresse biológico.', color: 'bg-amber-500' },
  ];

  return (
    <div className="text-center animate-in fade-in zoom-in-95 duration-700">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Os 3 Pilares da <span className="gradient-text">Vitalidade 360</span></h2>
      <p className="text-white/60 mb-12">Não é sobre dieta. É sobre ecossistema biológico.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {pillars.map((p, i) => (
          <div key={p.title} className="glass p-8 rounded-3xl border border-white/5 relative group hover:bg-white/5 transition-all">
            <div className={`w-12 h-12 ${p.color} rounded-2xl mb-6 mx-auto flex items-center justify-center text-xl font-bold`}>
              {i + 1}
            </div>
            <h3 className="text-xl font-bold mb-3">{p.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        className="px-12 py-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-700 text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:scale-105 transition-all"
      >
        Descobrir meu nível de Vitalidade
      </button>
    </div>
  );
};

export default Step3Education;
