//React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./store/"
//Pages
import HomePage from "./pages/Home";
import Account from "./pages/Account";
//reset.scss
import "./_reset.scss"
import PersonalData from "./pages/Account/modules/PersonalData";
import OrderList from "./pages/Account/modules/OrderList";
const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/account" component={Account} />
                    <Route exact path ="/account/personal-data" component={PersonalData}/>
                    <Route exact path ="/account/order-list" component ={OrderList}/>
                </Switch>
            </Router>
        </Provider>
    )
};
export default App;