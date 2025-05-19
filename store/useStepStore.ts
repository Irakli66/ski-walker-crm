import { create } from 'zustand';

type StepState = {
  currentStep: number;
  maxSteps: number;
  isStarted: boolean;
  isLanguageSelected: boolean;
  setIsLanguageSelected: (lang: boolean) => void;
  start: () => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  resetSteps: () => void;
  goToStep: (step: number) => void;
};

export const useStepStore = create<StepState>((set) => ({
  currentStep: 1,
  maxSteps: 3,
  isStarted: false,
  isLanguageSelected: false,
  setIsLanguageSelected: (lang: boolean) => set({ isLanguageSelected: lang }),
  start: () => set({ isStarted: true }),
  goToNextStep: () =>
    set((state) =>
      state.currentStep < state.maxSteps
        ? { currentStep: state.currentStep + 1 }
        : state
    ),
  goToPreviousStep: () =>
    set((state) =>
      state.currentStep > 1 ? { currentStep: state.currentStep - 1 } : state
    ),
  resetSteps: () => set({ currentStep: 1, isStarted: false }),
  goToStep: (step: number) =>
    set((state) =>
      step >= 1 && step <= state.maxSteps ? { currentStep: step } : state
    ),
}));
