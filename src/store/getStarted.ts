import { create } from 'zustand';

interface GetStartedState {
  step: number;
  setStep: (step: number) => void;
}

export const useGetStartedStore = create<GetStartedState>((set) => ({
  step: 1,
  setStep: (step: number) => set({ step })
}));