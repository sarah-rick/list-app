import React from "react";
import { Route, Routes } from 'react-router-dom';

import SidebarList from "./SidebarList";
import SidebarLink from "./SidebarLink";

const SidebarItem = ({
    path = "",
    name = "",
    list = [],
    ...rest
}) => {
    return (
        <>
            <SidebarLink
                path={path}
                name={name}
            />
            <SidebarList list={list} />
        </>
    );
}

export default SidebarItem;
