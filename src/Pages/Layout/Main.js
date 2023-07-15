import React from 'react';
import Navbar from '../../Share-page/Navbar/Navbar';
import Footer from '../../Share-page/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;