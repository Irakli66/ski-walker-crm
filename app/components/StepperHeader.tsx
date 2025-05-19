'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';

export default function StepperHeader({
  stepLabels,
  currentStep,
  className = '',
}: {
  stepLabels: { label: string; description: string }[];
  currentStep: number;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Progress bar (connector line) */}
      <div className="absolute top-8 lg:top-6 left-0 right-0 h-0.5 bg-muted">
        <div
          className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
          style={{
            width: `${
              Math.max(0, (currentStep - 1) / (stepLabels.length - 1)) * 100
            }%`,
          }}
        />
      </div>

      {/* Steps container */}
      <div className="flex justify-between w-full">
        {stepLabels.map((step, index) => {
          // Determine the status of this step
          const isCompleted = index + 1 < currentStep;
          const isCurrent = index + 1 === currentStep;
          // const isPending = index + 1 > currentStep;

          return (
            <div key={index} className="flex flex-col items-center z-10">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Step circle */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-full w-16 h-16 lg:w-12 lg:h-12 flex items-center justify-center border-2 transition-all duration-200 ${
                    isCompleted
                      ? 'bg-primary text-white border-primary'
                      : isCurrent
                      ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                      : 'bg-muted text-muted-foreground border-muted'
                  }`}
                >
                  {isCompleted ? (
                    <CheckIcon className="h-5 w-5" />
                  ) : (
                    <span className="text-xl lg:text-base font-medium">
                      {index + 1}
                    </span>
                  )}
                </motion.div>

                {/* Step description */}
                {/* {step.description && (
                  <div className="mt-2 text-center">
                    <p
                      className={`text-xs max-w-[80px] ${
                        isCurrent
                          ? 'text-foreground font-medium'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                )} */}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
