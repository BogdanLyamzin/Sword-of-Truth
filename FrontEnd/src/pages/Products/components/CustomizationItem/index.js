import React from "react";

const CustomizationItem = ({header,children}) => {
    return (
        <div>
            <h3>{header}</h3>
            {...children}
        </div>
    )
};
export default CustomizationItem