import React from "react";
import { Route, Routes } from 'react-router-dom';

import SidebarLink from "./SidebarLink";

const SidebarList = ({
    list = [],
    ...rest
}) => {
    if (list.length === 0) {
        return null;
    }

    return (
        <ul>
            {list.map(({
                path = "",
                name = "",
                list = [],
            }) => (
                <li key={path}>
                    <Routes>
                        <Route
                            path={`${path}/*`}
                            element={(
                                <>
                                    <SidebarLink
                                        path={path}
                                        name={name}
                                    />
                                    <SidebarList list={list} />
                                </>
                            )}
                        />
                        <Route
                            path={`/*`}
                            element={(
                                <SidebarLink
                                    path={path}
                                    name={name}
                                />
                            )}
                        />
                    </Routes>
                </li>
            ))}
        </ul>
    );
}

export default SidebarList;
