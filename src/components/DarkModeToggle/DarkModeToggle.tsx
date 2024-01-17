import React from 'react';
import { useThemeContext } from '../../contexts';
import { mergeClassNames } from '../../helpers/dom/domHelpers';
import { Button } from '../Button';
import { IBaseComponentProps } from '../../interfaces/BaseComponentInterface';
import { Moon, Sun } from '../../Images';
import storageHelpers from '../../helpers/storageHelpers';
import useNames from './useNames';
import useCss from './useCss';

export interface IDarkModeToggleProps extends IBaseComponentProps {
}

const DarkModeToggle: React.FC<IDarkModeToggleProps> = (props: IDarkModeToggleProps) => {

    const { theme, setTheme } = useThemeContext();
    const { ID, CLASS } = useCss(useNames(props.id))

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        storageHelpers.localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
        window.location.reload();
    };

    const rootClassName = mergeClassNames(CLASS.ROOT, props.className, {});

    return (
        <>
            <p>Dark Mode Toggle, Theme: {theme}</p>
            <Button
                id={ID.ROOT}
                className={rootClassName}
                onClick={toggleTheme}
                icon={theme === 'light' ? <Moon className={CLASS.ICON} /> : <Sun className={CLASS.ICON} />}
            />
        </>
    );
}

export default DarkModeToggle;
