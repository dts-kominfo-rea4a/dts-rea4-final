import React, {useEffect, useState} from "react";
import {
    Routes as Switch,
    Route,
    useLocation
} from "react-router-dom";

import Home from "../Screens/Home";
import NewsDetail from "../Components/NewsDetail";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import NewsMenu from "../Components/NewsMenu";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../Firebase";
import SearchResult from "../Screens/SearchResult";


const Menu = () => {
    const [hideMenu, setHideMenu] = useState(false);
    const {pathname} = useLocation();

    const [user, isLoading, error] = useAuthState(auth)

    useEffect(() => {
        setHideMenu(false)
        if (pathname === "/login" || pathname === "/register") {
            setHideMenu(true)
        }

    }, [pathname]);

    return (
        <>
            {
                !hideMenu && (<NewsMenu/>)
            }
        </>
    )
}

const Routes = () => {
    return (
        <>
            <Menu/>
            <Switch>
                <Route path='/' element={<Home category={'indonesia'} />}/>
                <Route path='/:id' element={<NewsDetail/>}/>
                <Route path='/Indonesia' element={<Home category={'indonesia'}/>}/>
                <Route path='/Indonesia/:id' element={<NewsDetail/>}/>
                <Route path='/Business' element={<Home category={'business'}/>}/>
                <Route path='/Business/:id' element={<NewsDetail/>}/>
                <Route path='/World' element={<Home category={'world'}/>}/>
                <Route path='/World/:id' element={<NewsDetail/>}/>
                <Route path='/Culture' element={<Home category={'life'}/>}/>
                <Route path='/Culture/:id' element={<NewsDetail/>}/>
                <Route path='/Travel' element={<Home category={'travel'}/>}/>
                <Route path='/Travel/:id' element={<NewsDetail/>}/>
                <Route path='/Sports' element={<Home category={'sports'}/>}/>
                <Route path='/Sports/:id' element={<NewsDetail/>}/>
                <Route path='/Search' element={<SearchResult/>}/>
                {/* Auth */}
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Switch>
        </>
    );
}

export default Routes