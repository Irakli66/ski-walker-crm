'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function NavigationButtons({
  currentStep,
  maxSteps,
  goToNextStep,
  goToPreviousStep,
}: {
  currentStep: number;
  maxSteps: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}) {
  const t = useTranslations('StepperButtons');
  return (
    <motion.div
      className="flex gap-4 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        onClick={goToPreviousStep}
        disabled={currentStep === 1}
        variant="secondary"
        className="disabled:opacity-50"
      >
        {t('previous')}
      </Button>

      <Button
        onClick={goToNextStep}
        disabled={currentStep === maxSteps}
        variant="default"
        className="disabled:opacity-50"
      >
        {t('next')}
      </Button>
    </motion.div>
  );
}
