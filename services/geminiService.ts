
import { GoogleGenAI, Type } from "@google/genai";
import { UserResponse } from "../types";

export const getPersonalizedInsight = async (userData: UserResponse): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "Prepare-se para uma transformação profunda. Seu corpo é capaz de muito mais.";

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Baseado nestas informações de um usuário interessado em saúde:
    - Sentimento/Dor: ${userData.painLevel || 'Não informado'}
    - Hábitos atuais: ${userData.habits?.join(', ') || 'Não informados'}
    - Score de Vitalidade: ${userData.vitalityScore || 0}/10

    Crie um insight motivador e curto (máximo 3 frases) em Português do Brasil. 
    O tom deve ser inspirador, focado em fortalecimento e autoridade.
    Não use introduções formais. Vá direto ao ponto.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        maxOutputTokens: 150,
      }
    });

    return response.text || "Sua jornada rumo ao ápice físico começa agora. O próximo passo é decisivo.";
  } catch (error) {
    console.error("Gemini insight error:", error);
    return "O poder de mudança está nas suas mãos. Fortaleça seu corpo e sua mente hoje.";
  }
};
