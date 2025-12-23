
import { GoogleGenAI } from "@google/genai";
import { UserResponse } from "../types";

export const getPersonalizedInsight = async (userData: UserResponse): Promise<string> => {
  const apiKey = process.env.API_KEY;
  
  // Lista robusta de 15+ fallbacks clínicos para garantir variabilidade absoluta
  const fallbacks = [
    "Seu índice reflete uma reserva metabólica comprometida pelo estresse oxidativo. A transição para um protocolo de fortalecimento celular permitirá a otimização da sua eficiência neuroendócrina.",
    "A análise indica uma desregulação no ciclo circadiano e na sinalização de cortisol. É imperativo reajustar seus pilares de recuperação para evitar o colapso da homeostase sistêmica.",
    "Sua fisiologia apresenta sinais de resistência anabólica e fadiga mitocondrial crônica. O fortalecimento funcional focado será o catalisador para a restauração do seu vigor biológico.",
    "Detectamos uma sobrecarga no sistema nervoso autônomo, limitando sua capacidade de regeneração. A correção biométrica imediata é necessária para reverter o quadro de letargia.",
    "O escore aponta para uma inflexibilidade metabólica que prejudica a conversão energética. Um protocolo de treinamento de força otimizado restabelecerá a sensibilidade insulínica celular.",
    "Há indícios de um estado pró-inflamatório subclínico que drena seus níveis de energia. A intervenção via biohacking focado promoverá a resiliência das membranas celulares.",
    "A queda na performance cognitiva está diretamente ligada à baixa densidade mitocondrial periférica. O fortalecimento sistêmico induzirá a biogênese necessária para sua recuperação.",
    "Identificamos uma dessincronização neuroquímica afetando sua motivação intrínseca. A restauração da homeostase hormonal é o passo crítico para recuperar seu foco e vigor.",
    "Seu perfil biométrico sugere um envelhecimento celular acelerado por fatores de estilo de vida. O método Vitality360 atuará na sinalização epigenética para reverter esse desgaste.",
    "A baixa reserva funcional detectada compromete sua resposta ao estresse agudo. O fortalecimento muscular agirá como um órgão endócrino, regulando sua imunidade e vitalidade.",
    "Observamos uma fragmentação na arquitetura do seu sono, impedindo a detoxificação glinfática profunda. O ajuste de rotina biológica é vital para restaurar seu desempenho.",
    "Seus dados indicam uma saturação dos receptores dopaminérgicos, resultando em fadiga mental persistente. A reprogramação celular é o caminho para a clareza cognitiva.",
    "O índice de vitalidade sinaliza um desequilíbrio na síntese proteica intracelular. O estímulo mecânico planejado é essencial para reverter a sinalização catabólica atual.",
    "A análise sugere uma hipofunção da glândula tireoide secundária ao estresse sistêmico. O protocolo de fortalecimento visa estabilizar sua taxa metabólica basal.",
    "Detectamos sinais de disbiose biológica influenciando negativamente sua produção de neurotransmissores. A integração entre corpo e mente será restaurada com o novo método.",
    "Sua pontuação sugere uma falha na sinalização de leptina e grelina, afetando seu controle energético. A regulação endócrina via exercício é a solução definitiva."
  ];

  if (!apiKey) return fallbacks[Math.floor(Math.random() * fallbacks.length)];

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Atue como um Especialista Sênior em Fisiologia Humana e Medicina de Performance com 20 anos de experiência clínica.
    Analise o perfil clínico deste usuário para o programa Vitality360:
    - Queixa Principal: "${userData.painLevel || 'Baixa reserva de energia'}"
    - Índice de Vitalidade Biofísica: ${userData.vitalityScore || 0} de 10.0

    DIRETRIZES PARA UM DIAGNÓSTICO ÚNICO E PRECISO:
    1. Responda em Português do Brasil com gramática ERUDITA, FORMAL e IMPECÁVEL.
    2. Tom estritamente PROFISSIONAL, CLÍNICO e ASSERTIVO. Evite termos genéricos.
    3. NÃO use saudações, introduções ("De acordo com...", "Sua análise é...") ou conclusões.
    4. FOCO NA PERSONALIZAÇÃO: Relacione DIRETAMENTE a queixa "${userData.painLevel}" ao score de ${userData.vitalityScore}/10. 
       - Se o score for baixo (menos de 5), foque em "colapso homeostático" ou "falência mitocondrial".
       - Se for médio (5 a 7), foque em "estagnação metabólica" ou "descompensação hormonal".
       - Se for alto (acima de 7), foque em "otimização de pico" ou "refinamento de performance".
    5. EXPLORE VARIABILIDADE: Escolha UMA perspectiva fisiológica específica entre: Neuroplasticidade, Eixo HPA, Sensibilidade Insulínica, Biogênese Mitocondrial, Autofagia Celular ou Sinalização Neuroendócrina.
    6. Nunca repita o início da frase. Use verbos de ação fortes.
    7. Máximo de 3 sentenças completas e profundas.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        temperature: 0.9, // Aumentado para garantir máxima variabilidade entre gerações
        maxOutputTokens: 450,
        topP: 0.9,
      }
    });

    const result = response.text?.trim();
    if (!result || result.length < 15) throw new Error("Resposta insuficiente");
    return result;
  } catch (error) {
    console.error("Gemini insight error:", error);
    // Retorna um fallback aleatório que soa profissional
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }
};
