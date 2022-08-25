import React from "react";
import { Link, Route, Routes, useRoutes } from 'react-router-dom';

import SidebarItem from "./SidebarItem";

const SidebarList = ({
    list = [],
    ...rest
}) => {
    if (list.length === 0) {
        return null;
    }

    return (
        <ul>
            {list.map((item = {}) => (
                <li key={item.path}>
                    <SidebarItem {...item} />
                </li>
            ))}
        </ul>
    );
}

export default SidebarList;
