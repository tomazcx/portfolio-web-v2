import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from '../../en.json'
import ptBrTranslations from '../../pt-BR.json'

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslations
        },
        'pt-BR': {
            translation: ptBrTranslations
        }
    },
    fallbackLng: 'pt-BR',
    lng: 'pt-BR',
    interpolation: {
        escapeValue: false
    }
})

export default i18next