import { AxiosResponse } from 'axios';
import { BaseService } from './BaseService';
import { IResponse } from '@/types';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey: string = process.env.NEXT_PUBLIC_GEMINI_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro'
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain'
};

class AIChatService extends BaseService {
  constructor() {
    super();
  }
  chatAI = async (message: string): Promise<{ data: string }> => {
    const chatSession = model.startChat({
      generationConfig,
      // safetySettings: Adjust safety settings
      // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: []
    });
    const result = await chatSession.sendMessage(message + '\n');
    console.log('result:: ', result);
    return {
      data: result.response.text()
    };
  };
}

export const aiChatService = new AIChatService();
