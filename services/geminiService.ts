import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

export const sendMessageToGemini = async (history: { role: string, parts: { text: string }[] }[], message: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing for Gemini Service.");
    return "I'm sorry, I cannot connect to the beauty server right now. Please try again later.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are Élise, a senior beauty consultant at 'Lumière Beauty Lounge'. 
        Your tone is warm, elegant, professional, and slightly feminine. 
        You help clients choose services from our menu (Hair, Skin, Nails, Spa) and offer general beauty advice.
        Keep responses concise (under 80 words) and encouraging. 
        If asked about booking, direct them to the 'Book Appointment' button on the website.
        Do not make up prices that are not in the context, give ranges if unsure.`,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm having a moment of silence. Could you repeat that?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, I am having trouble connecting at the moment.";
  }
};