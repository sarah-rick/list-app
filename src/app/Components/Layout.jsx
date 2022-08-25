import React from "react";
import { Link, Route, Routes } from 'react-router-dom';

import SidebarList from "./Layout/SidebarList";

const Layout = ({
    children,
    ...rest
}) => {
    const list = [
        {
            path: "/hello",
            name: "Hello World!",
            list: [
                {
                    path: "/hello/world",
                    name: "Subitem!",
                }
            ],
        },
    ];

    return (
        <div className="container">
            <nav>
                <SidebarList list={list} />
            </nav>
            <div className="content">
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
