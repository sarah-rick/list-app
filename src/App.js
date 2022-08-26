import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";

import SidebarList from "./app/Components/Layout/SidebarList";

import ListExample1 from "./app/Components/Content/ListExample1";

const App = (props) => {
    const list = [
        {
            path: "/",
            name: "Home!",
            component: (<></>),
        },
        {
            path: "/ex1",
            name: "Example 1",
            list: [
                {
                    path: "/ex1/tree",
                    name: "Tree Data",
                    component: (<ListExample1 type="tree" />),
                },
                {
                    path: "/ex1/records",
                    name: "Recordset data",
                    component: (<ListExample1 type="records" />),
                },
            ],
            component: (<ListExample1 />),
        },
    ];

    const traversal = ({
        path = "",
        list = [],
        component = (<></>),
    }) => {
        return [
            (
                <Route exact
                    path={path}
                    element={component}
                    key={path}
                />
            ),
            ...list.map(traversal),
        ];
    };

    return (
        <BrowserRouter>
            <div className="container">
                <nav>
                    <SidebarList list={list} />
                </nav>
                <div className="content">
                    <div>
                        <Routes>
                            {list.map(traversal)}
                            <Route
                                path="/"
                                element={(
                                    <p>Hello world</p>
                                )}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
