import React from "react";
import NavdbarItemComponent from "./NavbarItem";
import "./style.scss";
const NavbarArray = [
        {name : "mans", arr: ["cloth","shoos","coats"]},
        {name : "girls", arr: ["cloth","shoos","coats"]}
    ];
const NavbarComponent = ({NavbarItems}) => {
    NavbarItems = NavbarArray.map((elem,index) => {
       return  <NavdbarItemComponent categoryName={elem.name} categoryItems={elem.arr} key={index} className="navbar-item"/>
    });
    return (
        <nav className="navbar">
            {NavbarItems}
        </nav>
    )
};
export default NavbarComponent