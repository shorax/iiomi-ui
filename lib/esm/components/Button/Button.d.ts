import React from "react";
export interface ButtonProps {
    label: string;
    onClick?: () => void;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;
export default Button;
