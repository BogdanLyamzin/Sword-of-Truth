//React
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./store/"
//Pages
import HomePage from "./pages/Home"
//reset.scss
import "./_reset.scss"
const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </Router>
        </Provider>
    )
};
export default App;