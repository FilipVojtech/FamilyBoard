import React from 'react'
import cs from "../res/locales/cs.json"
import en from "../res/locales/en.json"
import * as RNLocalize from 'react-native-localize'

export const LanguageContext = React.createContext({});

const languageObj = {
    'en': en,
    'cs': cs,
}

export const LanguagesContext = ({children}) => {
    const evalLanguage = () => RNLocalize.findBestAvailableLanguage(Object.keys(languageObj)).languageTag || 'en';
    const currentLanguage = evalLanguage();
    const langStrings = {currentLanguage, ...languageObj[evalLanguage()]};

    return (
        <LanguageContext.Provider
            value={langStrings}
        >
            {children}
        </LanguageContext.Provider>
    )
}
