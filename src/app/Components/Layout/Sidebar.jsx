import React from "react";
import { Link, Route, Routes, useRoutes } from 'react-router-dom';

import SidebarList from "./SidebarList";

const Sidebar = ({
    list = [],
    ...rest
}) => {
    return (
        <nav>
            <SidebarList list={list} />
        </nav>
    );
}

export default Sidebar;
