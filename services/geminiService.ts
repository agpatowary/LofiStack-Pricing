
import { GoogleGenAI, Type } from "@google/genai";
import { SurveyAnswers, AIRecommendation } from '../types';
import { PRICING_DATA } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateRecommendation = async (answers: SurveyAnswers): Promise<AIRecommendation[]> => {
  const prompt = `
    You are an expert consultant for LofiStack, a digital services agency. Your task is to analyze a potential client's needs and recommend the best service(s) from the LofiStack pricing structure.

    Here is the full LofiStack pricing structure in JSON format:
    ${JSON.stringify(PRICING_DATA)}

    Here are the client's answers to our survey:
    - Business Type/Industry: ${answers.businessType}
    - Primary Goal: ${answers.primaryGoal}
    - Approximate Budget: ${answers.budget}
    - Key Challenges: ${answers.challenges}

    Based on this information, identify the top 1 or 2 most suitable services or tiers. For each recommendation, provide the exact service name, the recommended tier, and a brief, encouraging justification (2-3 sentences) explaining why it's a good fit for the client. Be concise and helpful. 
    
    Respond ONLY with the JSON object matching the provided schema. Do not include any other text or markdown formatting.
  `;

  const responseSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        serviceName: {
          type: Type.STRING,
          description: 'The name of the recommended service category (e.g., "Website & Application Development").',
        },
        tier: {
          type: Type.STRING,
          description: 'The specific tier recommended (e.g., "Scale Tier: Custom Growth Engine").',
        },
        justification: {
          type: Type.STRING,
          description: 'A brief explanation of why this service/tier is a good fit for the client.',
        },
      },
      required: ["serviceName", "tier", "justification"],
    },
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.5,
      },
    });

    const jsonText = response.text.trim();
    const recommendations: AIRecommendation[] = JSON.parse(jsonText);
    
    if (!Array.isArray(recommendations)) {
        throw new Error("Invalid response format from AI.");
    }
    
    return recommendations;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get recommendation from AI.");
  }
};
