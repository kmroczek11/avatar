import * as React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../footer";

export default function Layout() {
    return (
        <React.Fragment>
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}