'use client';

import { useStepStore } from '@/store/useStepStore';
import StepperHeader from '../../components/StepperHeader';
import StepContent from '../../components/StepContent';
import NavigationButtons from '../../components/NavigationButtons';
import StartScreen from '../../components/StartScreen';
import LanguagePick from '../../components/LanguagePick';
import { motion } from 'framer-motion';

export default function PlaceOrderLayout({
  first,
  second,
  third,
}: {
  first: React.ReactNode;
  second: React.ReactNode;
  third: React.ReactNode;
}) {
  const {
    currentStep,
    goToNextStep,
    goToPreviousStep,
    maxSteps,
    isStarted,
    isLanguageSelected,
    start,
  } = useStepStore();
  const steps = [first, second, third];
  const stepLabels = [
    { label: '1', description: 'პირადი ინფორმაცია' },
    { label: '2', description: 'მეორე ნაბიჯი' },
    { label: '3', description: 'მესამე ნაბიჯი' },
  ];

  if (!isLanguageSelected) {
    return <LanguagePick />;
  } else if (!isStarted) {
    return <StartScreen start={start} />;
  }

  return (
    <div className="flex flex-col items-center h-full  py-10 bg-background text-foreground space-y-15 px-20 2xl:px-110">
      <motion.div
        className="w-full text-center pt-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-wider">SKIWALKER</h1>
      </motion.div>
      <StepperHeader stepLabels={stepLabels} currentStep={currentStep} />
      <div className="w-full flex flex-col items-center justify-center">
        <StepContent steps={steps} currentStep={currentStep} />
        <NavigationButtons
          currentStep={currentStep}
          maxSteps={maxSteps}
          goToNextStep={goToNextStep}
          goToPreviousStep={goToPreviousStep}
        />
      </div>
    </div>
  );
}
