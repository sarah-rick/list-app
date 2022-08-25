import React from "react";
import { Link, Route, Routes, useMatch } from 'react-router-dom';

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
                                <SidebarItem
                                    path={path}
                                    name={name}
                                    list={list}
                                />
                            )}
                        />
                        <Route
                            path={`/*`}
                            element={(
                                <SidebarItem
                                    path={path}
                                    name={name}
                                    list={[]}
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
