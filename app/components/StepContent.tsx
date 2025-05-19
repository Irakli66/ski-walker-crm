'use client';
import { motion } from 'framer-motion';

export default function StepContent({
  steps,
  currentStep,
}: {
  steps: React.ReactNode[];
  currentStep: number;
}) {
  return (
    <div className="w-full">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className={`${index + 1 === currentStep ? 'block' : 'hidden'}`}
        >
          {step}
        </motion.div>
      ))}
    </div>
  );
}
