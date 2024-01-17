import React, { createContext, useContext, useState} from 'react';
import storageHelpers from '../helpers/storageHelpers';

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

type Theme = 'light' | 'dark';

type ThemeContext = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {

    const [theme, setTheme] = useState<Theme>(storageHelpers.localStorage.getItem('theme') as Theme || 'light');

    return (
        <ThemeContext.Provider 
        value={{
            theme, 
            setTheme
        }}
        >
            {children}
        </ThemeContext.Provider>
    );
};


export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider');
    }
    return context;
}