import React from 'react';
import { Button } from '../components';
import { DarkModeProvider, useDarkMode } from '../contexts/DarkModecontext';

export default {
    title: 'DarkModeContext',
    component: DarkModeProvider,
};

export const DarkModeProviderComponent = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <DarkModeProvider>
            <div>
                <p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
                <Button
                    label={`Toggle Dark Mode (currently ${isDarkMode ? 'Dark' : 'Light'})`}
                    onClick={toggleDarkMode}
                />
            </div>
        </DarkModeProvider>
    );
};