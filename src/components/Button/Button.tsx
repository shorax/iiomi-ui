import React from 'react';
import { mergeClassNames } from '../../helpers/dom/domHelpers';
import useNames from './useNames';
import useCss from './useCss';
import { IWebComponentProps } from '../../interfaces/BaseComponentInterface';

export interface IButtonProps extends IWebComponentProps {
  type?: 'primary' | 'secondary' | 'tertiary',
  disabled?: boolean,
  label?: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {

  const {ID, CLASS} = useCss(useNames(props.id));

  const rootClassName = mergeClassNames(CLASS.ROOT, props.className,{
    [CLASS.DISABLED]: props.disabled,
  });

  return (
    <button id={ID.ROOT} className={rootClassName} onClick={props.onClick}>
      {props.label && <span className={CLASS.LABEL}>{props.label}</span>}
      {props.icon && props.icon}
    </button>
  );
};

export default Button;
