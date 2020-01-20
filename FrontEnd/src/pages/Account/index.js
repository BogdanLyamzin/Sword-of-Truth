import React from "react";
import { BrowserRouter as Link} from "react-router-dom";
/*modules*/
import OrderList from "./modules/OrderList";
import PersonalData from "./modules/PersonalData";
const Account = (props) => {
    return (
        <div>
            <Link to = "order list" component={OrderList}/>
            <Link to = "personal data" component={PersonalData}/>
        </div>
    )
};
export default Account