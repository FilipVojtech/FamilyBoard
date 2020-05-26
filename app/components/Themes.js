import React from 'react';

export const ThemeContext = React.createContext({
    mainColor: '',
    backgroundColor: '',
});

export const Themes = ({children}) => {
    return (
        <ThemeContext.Provider value={{
            mainColor: '#40E0D0',
            backgroundColor: '#ffffff',
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
