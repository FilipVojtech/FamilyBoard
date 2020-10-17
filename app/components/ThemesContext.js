import React from 'react';

export const ThemeContext = React.createContext({
    mainColor: '',
});

/**
 * Tenot komponent poskytuje v celé aplikaci hlavní barvu
 */
export const ThemesContext = ({children}) => {
    return (
        <ThemeContext.Provider value={{mainColor: '#10c3ff', /*40E0D0, 10c3ff*/}}>
            {children}
        </ThemeContext.Provider>
    );
};
