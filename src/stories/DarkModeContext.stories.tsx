import React from 'react';
import { Button } from '../components';
import ThemeContextProvider, { useThemeContext } from '../contexts/DarkModeContext';

export default {
    title: 'ThemeContext',
    component: ThemeContextProvider,
};

export const ThemeContextProviderComponent = () => {

    const {theme, setTheme} = useThemeContext();

    return (
        <ThemeContextProvider>
        <ThemeContextProvider>
            <div>
                <p>{theme ? 'Dark Mode' : 'Light Mode'}</p>
                <Button
                    label={`Toggle Dark Mode (currently ${theme})`}
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                />
            </div>
        </ThemeContextProvider>
        </ThemeContextProvider>
    );
};