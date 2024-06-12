export interface IBaseComponentProps {
    id: string;
    className?: string;
    key?: string | number;
    style?: React.CSSProperties;
    componentReference?: any;
}

export interface IBaseActionComponentProps {
    title?: string;
    tabIndex?: -1 | 0;
    readonly?: boolean;
    disabled?: boolean;
    checked?: boolean;
    isHover?: boolean;
    isFocus?: boolean;
    disableHover?: boolean;
    autoFocus?: boolean;
    role?: string;
    name?: string;
}

export interface IAria {
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaChecked?: boolean;
    ariaHidden?: boolean;
    ariaInvalid?: boolean;
    ariaCurrent?: boolean;
    ariaMultiselectable?: boolean;
    ariaHasPopup?: 'listbox';
    ariaActiveDescendant?: string;
    ariaPressed?: boolean;
}