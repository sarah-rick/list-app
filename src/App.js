import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";

import SidebarList from "./app/Components/Layout/SidebarList";

import ListExample1 from "./app/Components/Content/ListExample1";

const App = (props) => {
    const list = [
        {
            path: "/hello",
            name: "Hello World!",
            /*
            list: [
                {
                    path: "/hello/world",
                    name: "Subitem!",
                }
            ],
            */
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
