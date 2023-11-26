import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

export const i18n = createInstance({
    fallbackLng: {
        default: ['en'],
        'nl-FORMAL': ['nl'],
    },
    supportedLngs: ['nl', 'en', 'de', 'fr', 'fi'],
    nonExplicitSupportedLngs: true,
    debug: false,
    returnNull: false,
    ns: ['default'],
    defaultNS: 'default'
});

i18n.use(initReactI18next).init().catch(console.error);
