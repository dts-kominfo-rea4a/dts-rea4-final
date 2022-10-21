import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from "react-router-dom";

import Home from "../Screens/Home";
import NewsMenu from "../Components/NewsMenu";
import NewsDetail from "../Components/NewsDetail";

const Routes = () => {
    return (
        <>
            <NewsMenu />
            <Router>
                <Switch>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:id" element={<NewsDetail />} />
                </Switch>
            </Router>
        </>
    )
}

export default Routes