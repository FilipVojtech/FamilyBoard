import React from 'react'
import cs from '../res/locales/cs.json'
import en from '../res/locales/en.json'
import * as RNLocalize from 'react-native-localize'

export const LanguageContext = React.createContext({});

const languageObj = {
    en: en,
    cs: cs,
}

export const Languages = ({children}) => {
    const evalLanguage = () => RNLocalize.findBestAvailableLanguage(Object.keys(languageObj)).languageTag || 'en';
    return (
        <LanguageContext.Provider
            value={evalLanguage() === 'cs' ? languageObj.cs : languageObj.en}
        >
            {children}
        </LanguageContext.Provider>
    )
}
