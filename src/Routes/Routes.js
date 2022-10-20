import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from "react-router-dom";

import Home from "../Screens/Home";
import NewsMenu from "../Components/NewsMenu";

const Routes = () => {
    return (
        <>
            <NewsMenu />
            <Router>
                <Switch>
                    <Route path="/" element={<Home/>}/>
                </Switch>
            </Router>
        </>
    )
}

export default Routes