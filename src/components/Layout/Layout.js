import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import './Layout.scss';

function Layout({ children }) {
    return (
        <Router>
            <div>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </Router>
    );
}

export default Layout;