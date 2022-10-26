import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import HotNews from '../components/HotNews';
import Footer from '../components/Footer';

export default function HomePage1() {

    return (
        <div>
            <Header />
            <HotNews />
            <LatestNews />
            <Footer />
            <nav>
                <Link to="/homeDetail" />
            </nav>
        </div>
    )
}

