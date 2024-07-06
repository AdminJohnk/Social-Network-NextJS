import { create } from 'zustand';

interface AiChatState {
  aiChatStatus: boolean;
  setAIChatStatus: (aiChatStatus: boolean) => void;
}

export const useAIChatStore = create<AiChatState>()((set) => ({
  aiChatStatus: false,
  setAIChatStatus: (aiChatStatus: boolean) => set({ aiChatStatus })
}));
