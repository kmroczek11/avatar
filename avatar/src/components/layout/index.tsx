import * as React from 'react';
import Navbar from '../nav';
import { Outlet } from "react-router-dom";
import Footer from "../footer";

export default function Layout() {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}