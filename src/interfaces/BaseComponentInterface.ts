export interface IBaseComponentProps {
    id: string;
    key?: string | number;
    style?: React.CSSProperties;
    className?: string;
    componentReference?: any;
}

export interface IWebComponentProps extends IBaseComponentProps {
    class?: string;
    children?: any
}