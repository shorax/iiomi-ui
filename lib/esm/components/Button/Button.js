import React from "react";
const Button = (props) => {
    return (React.createElement("button", { onClick: props.onClick }, props.label));
};
export default Button;
