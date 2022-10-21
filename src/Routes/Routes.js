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
            <Router>
                <NewsMenu/>
                <Switch>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:id" element={<NewsDetail/>}/>
                    <Route path="/News" element={<Home category={"all"}/>}/>
                    <Route path="/News/:id" element={<NewsDetail/>}/>
                    <Route path="/Sport" element={<Home category={"sports"}/>}/>
                    <Route path="/Sport/:id" element={<NewsDetail/>}/>
                    <Route path="/Entertainment" element={<Home category={"entertainment"}/>}/>
                    <Route path="/Entertainment/:id" element={<NewsDetail/>}/>
                    <Route path="/Business" element={<Home category={"business"}/>}/>
                    <Route path="/Business/:id" element={<NewsDetail/>}/>
                    <Route path="/Politic" element={<Home category={"politics"}/>}/>
                    <Route path="/Politic/:id" element={<NewsDetail/>}/>
                    <Route path="/Science" element={<Home category={"science"}/>}/>
                    <Route path="/Science/:id" element={<NewsDetail/>}/>
                    <Route path="/Technology" element={<Home category={"technology"}/>}/>
                    <Route path="/Technology/:id" element={<NewsDetail/>}/>

                </Switch>
            </Router>
        </>
    )
}

export default Routes