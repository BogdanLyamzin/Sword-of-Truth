import React from "react";
import PropTypes from "prop-types";
import ListComponent from "../../../components/List"
import HoverComponent from "../../../components/Hover"
const NavbarItemComponent = ({categoryName, categoryItems,className}) => {
    return (
        <li className={className}>
            <HoverComponent onHover={<ListComponent listItems={categoryItems}/>}>
                {categoryName}
            </HoverComponent>
        </li>
    )
};
export default NavbarItemComponent