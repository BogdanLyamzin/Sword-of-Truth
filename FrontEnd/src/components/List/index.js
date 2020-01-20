import React from "react";
import PropTypes from "react";
import ListItemComponent from "./ListItem";
const ListComponent  = ({listHeader,listItems}) => {
    listItems = listItems.map((elem,index) => {
        return <ListItemComponent array={elem} key={index}/>
    });
    return(
        <ul>
            {listHeader && <p>{listHeader}</p>}
            {listItems}
        </ul>
    )
};
export default ListComponent
