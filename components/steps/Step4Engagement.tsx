
import React, { useState } from 'react';
import { UserResponse } from '../../types';

interface Step4Props {
  userResponse: UserResponse;
  onNext: (score: number) => void;
}

const Step4Engagement: React.FC<Step4Props> = ({ userResponse, onNext }) => {
  const [answers, setAnswers] = useState<number[]>([0, 0, 0]);
  const [calculating, setCalculating] = useState(false);

  const questions = [
    "Qual seu nível de disposição ao acordar?",
    "Quantas vezes por semana você pratica exercícios?",
    "Como você avalia sua qualidade de sono?"
  ];

  const handleCalculate = () => {
    setCalculating(true);
    const sum = answers.reduce((a, b) => a + b, 0);
    const score = Math.round((sum / 15) * 10);
    
    setTimeout(() => {
      onNext(score);
    }, 2000);
  };

  return (
    <div className="animate-in fade-in duration-700">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Checklist de Vitalidade</h2>
        <p className="text-white/50">Seja honesto consigo mesmo para um diagnóstico preciso.</p>
      </div>

      <div className="space-y-8 glass p-8 rounded-3xl border border-white/10 mb-8">
        {questions.map((q, qIdx) => (
          <div key={qIdx} className="space-y-4">
            <p className="font-medium text-white/90 text-lg">{q}</p>
            <div className="flex justify-between gap-2">
              {[1, 2, 3, 4, 5].map((val) => (
                <button
                  key={val}
                  onClick={() => {
                    const newAnswers = [...answers];
                    newAnswers[qIdx] = val;
                    setAnswers(newAnswers);
                  }}
                  className={`flex-1 py-3 rounded-xl border transition-all ${
                    answers[qIdx] === val 
                      ? 'bg-green-500 border-green-400 text-white shadow-[0_0_15px_rgba(34,197,94,0.3)]' 
                      : 'bg-white/5 border-white/5 text-white/40 hover:bg-white/10'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/30 font-bold px-1">
              <span>Baixo</span>
              <span>Alto</span>
            </div>
          </div>
        ))}
      </div>

      <button
        disabled={answers.includes(0) || calculating}
        onClick={handleCalculate}
        className={`w-full py-5 rounded-full font-bold text-lg transition-all ${
          answers.includes(0) 
            ? 'bg-white/10 text-white/20 cursor-not-allowed' 
            : 'bg-white text-black hover:bg-green-400'
        }`}
      >
        {calculating ? (
          <div className="flex items-center justify-center gap-3">
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            Processando Biometria...
          </div>
        ) : (
          "Ver meu Resultado"
        )}
      </button>
    </div>
  );
};

export default Step4Engagement;
