import React, { createContext, useContext, useState, useCallback } from 'react';

export interface DarkModeContextProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

let DarkModeContext = createContext<DarkModeContextProps>({
    isDarkMode: false,
    toggleDarkMode: () => {},
});

export interface DarkModeProviderProps {
    children: React.ReactNode | React.ReactNode[];
    isDarkMode?: boolean;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children, isDarkMode = true }) => {

    const [darkMode, setDarkMode] = useState<boolean>(isDarkMode);
    const toggleDarkMode = useCallback(() => {
        setDarkMode((prev) => !prev);
    }, []);

    return (
        <DarkModeContext.Provider value={{ isDarkMode: darkMode, toggleDarkMode: toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = (): DarkModeContextProps  => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider. Wrap your component with DarkModeProvider.');
  }
  return context;
};
