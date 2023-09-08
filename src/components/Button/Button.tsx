import React from "react";

export interface ButtonProps {
    label: string;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>
            {props.label}
        </button>
    );
}

export default Button;
