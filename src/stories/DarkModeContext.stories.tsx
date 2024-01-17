import React from 'react';
import { ThemeContextProvider } from '../contexts/DarkModeContext';
import { DarkModeToggle } from '../components/DarkModeToggle';

export default {
    title: 'ThemeContext',
    component: ThemeContextProvider,
};

export const ThemeContextProviderComponent = () => {

    return (
        <ThemeContextProvider>
            <DarkModeToggle id='FOO'/>
        </ThemeContextProvider>
    );
};