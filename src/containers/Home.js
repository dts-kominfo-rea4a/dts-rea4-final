import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";
import '../App.css';
import Row from '../components/Row';
import requests from '../stores/requests';
import Banner from '../components/Banner';
import Navbar from "../components/Navbar";

    const Home = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    const [user, isLoading] = useAuthState(auth);

    useEffect(() => {
    if (isLoading) {
        return;
        }
        if (!user) {
        navigate("/");
        }
    });

    const buttonLogoutOnClickHandler = async () => {
    await logout();
    navigate("/");
    };


    return (
        <>
        <Navbar isLoggedIn={isLoggedIn} logout={buttonLogoutOnClickHandler} />
        <Banner />
        <Row title="Top Watched" fetchUrl={requests.fetchOriginals} isLargeRow />
        <Row title="Trending Films" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action" fetchUrl={requests.fetchAction} />
        <Row title="Horror" fetchUrl={requests.fetchHorror} />
        <Row title="Comedy" fetchUrl={requests.fetchComedy} />
        <Row title="Documentary" fetchUrl={requests.fetchDocumentary} />
        <Row title="Romance" fetchUrl={requests.fetchRomance} />
        
        
    </>
    );
};

export default Home;


