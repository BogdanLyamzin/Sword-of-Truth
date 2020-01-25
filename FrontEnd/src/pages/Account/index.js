import React from "react";
import {BrowserRouter as Link} from "react-router-dom";
import PersonalDataImg from "./image/black-male-user-symbol.png"
import OrderListImg from "./image/documents-check-interface-symbol-of-text-lines-in-rounded-square (1).png"
/*modules*/
import OrderList from "./modules/OrderList";
import PersonalData from "./modules/PersonalData";

const Account = (props) => {
    return (
        <div>
            <Link to="/account/personal-data">
                <img src={PersonalDataImg} alt="PersonalData"/>
            </Link>

            <Link to="/account/order-list" >
                <img src={OrderListImg} alt="OrderList"/>
            </Link>
        </div>
    )
};
export default Account
