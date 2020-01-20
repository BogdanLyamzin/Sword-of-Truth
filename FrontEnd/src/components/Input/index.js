import React from "react";
import PropTypes from "prop-types";

const Input = ({onChange,className,placeHolder}) => {
    return (
        <input onChange={onChange} className={className} placeholder={placeHolder} />
    )
};
export default Input

Input.propTypes = {
    onChange : PropTypes.func.isRequired,
    className : PropTypes.string,
    placeHolder : PropTypes.string
};
