import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Hero from '../sections/hero/Hero';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Hero></Hero>
        </div>
    );
};

export default MainLayout;