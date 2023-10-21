// @flow
import * as React from 'react';
import { Footer } from '../footer/footer';
import { Outlet } from 'react-router-dom';
import Navbar from './../navbar/navbar';

export function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};