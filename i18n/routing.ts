import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ka', 'en'],

  // Used when no locale matches
  defaultLocale: 'ka',
  localePrefix: 'always',
});
