// @flow
import * as React from 'react';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};