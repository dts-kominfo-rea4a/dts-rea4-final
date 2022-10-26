import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function HomeDetails() {
    return (
        <div>
            <Header />
            <h1>foto berenang</h1><br />
            <h2>isi beritanya</h2>
            <nav>
                <Link to="/"> To Home</Link>
                <Link to="/postingan">to postingan</Link>
            </nav>
            <Footer />
        </div>
    )
}

