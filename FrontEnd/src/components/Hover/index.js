import React from "react"
import "./style.scss"
export default ({ onHover, children }) => {
    return (
        <div className="hover">
            <div className="hover__no-hover">{children}</div>
            <div className="hover__hover">{onHover}</div>
        </div>
    )
};