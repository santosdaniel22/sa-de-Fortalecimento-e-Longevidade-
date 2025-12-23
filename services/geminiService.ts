
import { GoogleGenAI } from "@google/genai";
import { UserResponse } from "../types";

export const getPersonalizedInsight = async (userData: UserResponse): Promise<string> => {
  const apiKey = process.env.API_KEY;
  
  // Lista robusta de 20 fallbacks clínicos com foco em clareza e autoridade
  const fallbacks = [
    "Sua fadiga persistente indica um quadro de inflamação sistêmica de baixo grau. Precisamos reprogramar sua resposta imune através do fortalecimento muscular estratégico para restaurar sua energia vital.",
    "O escore aponta uma desregulação severa no seu ciclo de cortisol. Sem um ajuste na higiene do sono e na carga tensional, seu corpo continuará operando em modo de esgotamento biológico.",
    "Identificamos uma baixa eficiência mitocondrial, o que explica a falta de vigor físico. O protocolo Vitality360 focará na biogênese celular para que suas células voltem a produzir energia de forma otimizada.",
    "Seu perfil sugere resistência anabólica, dificultando a recuperação pós-esforço. É necessário um estímulo metabólico específico para reverter a perda de massa e fortalecer sua estrutura óssea.",
    "A análise indica uma sobrecarga no sistema nervoso simpático. Sua mente está em alerta constante, drenando sua glicose cerebral e impedindo a regeneração dos tecidos durante o repouso.",
    "Detectamos sinais de inflexibilidade metabólica. Seu corpo perdeu a capacidade de alternar eficientemente entre fontes de combustível, resultando em quedas bruscas de energia ao longo do dia.",
    "Sua queixa está diretamente ligada a um desequilíbrio no eixo intestino-cérebro. A saúde da sua microbiota está comprometendo a síntese de neurotransmissores essenciais para seu foco e disposição.",
    "O índice de vitalidade reflete um estado de estresse oxidativo acelerado. Precisamos de uma intervenção focada em microcirculação e fortalecimento funcional para proteger suas células contra o envelhecimento precoce.",
    "Observamos uma falha na sinalização da leptina, o que desregula sua saciedade e gestão energética. O exercício de força será a chave para reequilibrar seus hormônios metabólicos.",
    "Seu quadro sugere uma 'névoa mental' decorrente de baixa perfusão cerebral. O treinamento de alta performance agirá como um potente neuroprotetor, devolvendo sua clareza cognitiva imediata.",
    "Há evidências de fadiga adrenal incipiente. Seu corpo não está processando o estresse diário, o que resulta em fraqueza muscular e letargia. O método atuará na modulação da sua resposta hormonal.",
    "A baixa reserva funcional detectada compromete sua longevidade. O fortalecimento sistêmico é urgente para evitar a degradação das articulações e manter sua autonomia física nos próximos anos.",
    "Identificamos uma dessincronização neuroquímica. Seus níveis de dopamina estão instáveis, afetando sua motivação. A reprogramação física através do Vitality360 restaurará seu ímpeto natural.",
    "Sua análise aponta para uma redução na síntese proteica intracelular. Sem o estímulo mecânico correto, seu metabolismo permanecerá em um estado catabólico, consumindo suas próprias reservas de força.",
    "Detectamos sinais de acidose metabólica latente. Sua dieta e falta de movimento estão tornando seu ambiente interno hostil. O protocolo de correção biológica restabelecerá o equilíbrio do seu pH sistêmico.",
    "O escore de vitalidade indica uma falha na regeneração glinfática. Seu cérebro não está sendo devidamente 'limpo' durante o sono, o que explica a irritabilidade e o cansaço mental crônico.",
    "Seu perfil biométrico sugere sarcopenia funcional precoce. A perda de qualidade das fibras musculares está afetando sua taxa metabólica basal, tornando seu corpo mais lento e pesado.",
    "A análise técnica revela uma descompensação no sistema renina-angiotensina. Sua hidratação celular está comprometida, o que afeta diretamente a contratilidade muscular e o vigor físico.",
    "Observamos uma saturação dos receptores de insulina. Para recuperar sua energia, precisamos aumentar a densidade de transportadores de glicose através do fortalecimento muscular profundo.",
    "Seu diagnóstico indica um estado de hipofunção tireoidiana secundária ao estresse. O método Vitality360 ajudará a sinalizar para o seu corpo que o ambiente é seguro para acelerar o metabolismo novamente."
  ];

  if (!apiKey) return fallbacks[Math.floor(Math.random() * fallbacks.length)];

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Atue como um Especialista Sênior em Performance Humana.
    Analise o perfil clínico deste usuário:
    - Queixa: "${userData.painLevel || 'Baixa energia'}"
    - Índice de Vitalidade: ${userData.vitalityScore || 0}/10.0

    DIRETRIZES PARA A RESPOSTA:
    1. Responda em Português do Brasil com autoridade médica, mas com CLAREZA TOTAL.
    2. O texto deve soar como um diagnóstico personalizado e impactante.
    3. NÃO use introduções como "Sua análise indica..." ou "Baseado nos dados...". Comece direto no ponto central do problema.
    4. Relacione a queixa com um processo fisiológico específico (Ex: Mitocôndrias, Cortisol, Inflamação, Eixo HPA).
    5. O tom deve ser sério, profissional e urgente.
    6. Gere uma resposta ÚNICA e ORIGINAL. Evite clichês de autoajuda.
    7. Máximo de 2 a 3 frases curtas e poderosas.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        temperature: 1.0, // Máxima criatividade para evitar repetições
        maxOutputTokens: 300,
        topP: 0.95,
      }
    });

    const result = response.text?.trim();
    if (!result || result.length < 15) throw new Error("Resposta insuficiente");
    return result;
  } catch (error) {
    console.error("Gemini insight error:", error);
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }
};
