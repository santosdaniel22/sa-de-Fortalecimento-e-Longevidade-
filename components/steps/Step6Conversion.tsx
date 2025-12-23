
import React, { useEffect, useState } from 'react';

const Step6Conversion: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="text-center animate-in zoom-in-95 duration-1000">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 font-bold text-xs uppercase tracking-widest mb-8 animate-pulse">
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
        Oferta Limitada: {formatTime(timeLeft)}
      </div>

      <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
        Sua Transformação Começa <span className="gradient-text">Hoje.</span>
      </h2>
      
      <p className="text-white/60 mb-10 max-w-lg mx-auto">
        Junte-se a mais de 5.000 pessoas que recuperaram sua vitalidade. Não deixe sua saúde para amanhã. O corpo que você quer exige a decisão que você toma hoje.
      </p>

      <div className="glass p-8 md:p-12 rounded-[2rem] border-2 border-green-400/30 mb-12 relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-green-500 text-black font-black text-sm uppercase rounded-full">
          Oferta Exclusiva
        </div>
        
        <div className="mb-8">
          <p className="text-white/40 line-through text-lg mb-1">De R$ 350,00</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold">12x de</span>
            <span className="text-6xl font-black text-white">R$ 8,32</span>
          </div>
          <p className="text-green-400 font-bold mt-2">Ou R$ 99,90 à vista sem juros</p>
        </div>

        <ul className="text-left space-y-4 mb-10 max-w-xs mx-auto">
          {[
            'Plano de Treino Customizável',
            'Guia de Nutrição de Alta Performance',
            'Comunidade Exclusiva Vitality',
            'Acesso Vitalício',
            'Garantia Incondicional de 7 Dias'
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-white/80">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              {item}
            </li>
          ))}
        </ul>

        <button className="w-full py-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black text-2xl hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(16,185,129,0.3)] transition-all uppercase tracking-tight">
          Quero Garantir Minha Vaga
        </button>
        
        <div className="mt-6 flex items-center justify-center gap-6 opacity-40">
           <img src="https://picsum.photos/100/30?random=1" alt="Visa" className="grayscale contrast-200" />
           <img src="https://picsum.photos/100/30?random=2" alt="Mastercard" className="grayscale contrast-200" />
           <img src="https://picsum.photos/100/30?random=3" alt="Pix" className="grayscale contrast-200" />
        </div>
      </div>

      <p className="text-[10px] text-white/30 max-w-xs mx-auto">
        Pagamento 100% seguro. Acesso imediato enviado para o seu e-mail. 
        Resultados podem variar de pessoa para pessoa.
      </p>
    </div>
  );
};

export default Step6Conversion;
