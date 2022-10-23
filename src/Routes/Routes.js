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

const Menu = () => {
    const [hideMenu, setHideMenu] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setHideMenu(false)
        if (pathname === "/login" || pathname === "/register") {
            setHideMenu(true)
        }

    }, [pathname]);

    return (
        <>
            {
                !hideMenu && (<NewsMenu />)
            }
        </>
    )
}

const Routes = () => {
    return (
        <>
            <Menu/>
            <Switch>
                <Route path='/' element={<Home/>}/>
                <Route path='/:id' element={<NewsDetail/>}/>
                <Route path='/News' element={<Home category={'all'}/>}/>
                <Route path='/News/:id' element={<NewsDetail/>}/>
                <Route path='/Sport' element={<Home category={'sports'}/>}/>
                <Route path='/Sport/:id' element={<NewsDetail/>}/>
                <Route
                    path='/Entertainment'
                    element={<Home category={'entertainment'}/>}
                />
                <Route path='/Entertainment/:id' element={<NewsDetail/>}/>
                <Route path='/Business' element={<Home category={'business'}/>}/>
                <Route path='/Business/:id' element={<NewsDetail/>}/>
                <Route path='/Politic' element={<Home category={'politics'}/>}/>
                <Route path='/Politic/:id' element={<NewsDetail/>}/>
                <Route path='/Science' element={<Home category={'science'}/>}/>
                <Route path='/Science/:id' element={<NewsDetail/>}/>
                <Route
                    path='/Technology'
                    element={<Home category={'technology'}/>}
                />
                <Route path='/Technology/:id' element={<NewsDetail/>}/>

                {/* Auth */}
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Switch>
        </>
    );
}

export default Routes