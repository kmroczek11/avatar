import * as React from 'react';
import Navbar from '../nav';
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
        </React.Fragment>
    )
}