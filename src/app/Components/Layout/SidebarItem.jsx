import React from "react";
import { Link, Route, Routes, useLocation, useMatch } from 'react-router-dom';

import SidebarList from "./SidebarList";

const SidebarItem = ({
    path = "",
    name = "",
    list = [],
    ...rest
}) => {
    const location = useLocation();

    let matches = false;
    try {
        if (useMatch(path)) {
            matches = true;
        }
    } catch (ex) {
    }

    const className = matches ? "currentPage" : "";

    return (
        <>
            <Link to={path}>
                <span className={className}>
                    {name}
                </span>
            </Link>
            <Routes>
                <Route
                    path={`${path}/*`}
                    element={(
                        <SidebarList list={list} />
                    )}
                />
            </Routes>
        </>
    );
}

export default SidebarItem;
