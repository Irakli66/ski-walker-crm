'use client';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { US, GE } from 'country-flag-icons/react/3x2';
import { usePathname, useRouter } from 'next/navigation';
import { useStepStore } from '@/store/useStepStore';

export default function LanguagePick() {
  const { setIsLanguageSelected } = useStepStore();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;

    const newPath = `/${newLocale}${pathname.replace(`/${locale}`, '')}`;
    router.replace(newPath);
  };
  return (
    <motion.div
      className="flex flex-col items-center justify-between h-screen bg-background text-foreground px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top title */}
      <motion.div
        className="w-full text-center pt-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-wider">SKIWALKER</h1>
      </motion.div>

      {/* Middle language selection */}
      <motion.div
        className="flex flex-col gap-6 items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex gap-6 flex-wrap justify-center">
          <Button
            variant="default"
            size="xl"
            className="text-lg flex flex-col gap-5 px-12 py-6 rounded-xl hover:scale-105 transition-transform shadow-md"
            onClick={() => {
              handleLanguageChange('ka');
              setIsLanguageSelected(true);
            }}
          >
            <GE title="Georgia" style={{ width: '40px', height: '30px' }} />
            ქართული
          </Button>
          <Button
            variant="default"
            size="xl"
            className="text-2xl flex flex-col gap-2 uppercase font-bold px-12 py-6 rounded-xl hover:scale-105 transition-transform shadow-md"
            onClick={() => {
              handleLanguageChange('en');
              setIsLanguageSelected(true);
            }}
          >
            <US
              title="United States"
              style={{ width: '40px', height: '30px' }}
            />
            English
          </Button>
        </div>
      </motion.div>

      {/* Bottom empty space to balance layout */}
      <div className="h-16"></div>
    </motion.div>
  );
}
