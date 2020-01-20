import React from "react";
import PropTypes from "prop-types"

const Button = ({text,onClick,className}) => {
    return (
        <button onClick={onClick} className={className}>{text}</button>
    )
};
export default Button

Button.propTypes = {
    text : PropTypes.string,
    className : PropTypes.string,
    onClick : PropTypes.func.isRequired
};

Button.defaultProps = {
    text : "Click",
    className : "btn"
};