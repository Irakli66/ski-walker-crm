'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useStepStore } from '@/store/useStepStore';

export default function StartScreen({ start }: { start: () => void }) {
  const { setIsLanguageSelected } = useStepStore();
  const t = useTranslations('StartPage');
  return (
    <motion.div
      className="flex flex-col items-center justify-between h-screen bg-background text-foreground px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top title */}
      <motion.div
        className="w-full relative text-center pt-8 flex justify-between items-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Button onClick={() => setIsLanguageSelected(false)}>
          <ArrowLeft />
        </Button>
        <h1 className="text-3xl font-bold ">SKIWALKER</h1>
        <div></div>
      </motion.div>

      {/* Middle language selection */}
      <motion.div
        className="flex flex-col items-center bg-background text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-gray-600 text-md font-extralight mb-4">
          {t('title')}
        </h1>
        <Button
          variant="default"
          size="xl"
          className="text-xl px-8 py-4"
          onClick={start}
        >
          {t('start')}
        </Button>
      </motion.div>

      {/* Bottom empty space to balance layout */}
      <div className="h-16"></div>
    </motion.div>
  );
}
