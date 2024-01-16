import React from 'react';
import { mergeClassNames } from '../../helpers/domHelpers';
import { componentNames } from './useNames';
import { useDarkMode } from '../../contexts/DarkModecontext';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  isPrimary?: boolean;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, isPrimary, isDisabled }) => {

  const { isDarkMode } = useDarkMode();

  const rootClassName = mergeClassNames(componentNames.button.root, {
    primary: isPrimary,
    disabled: isDisabled,
    darkMode: isDarkMode,
  });

  return (
    <button className={rootClassName} onClick={onClick} disabled={isDisabled}>
      <span className={componentNames.button.label}>{label}</span>
    </button>
  );
};

export default Button;
