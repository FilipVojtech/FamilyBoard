import React from 'react';

export const ThemeContext = React.createContext({
    mainColor: '',
    backgroundColor: '',
});

export const ThemesContext = ({children}) => {
    return (
        <ThemeContext.Provider value={{
            mainColor: '#10c3ff', //40E0D0
            backgroundColor: '#ffffff',
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
