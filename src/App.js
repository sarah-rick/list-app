import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";

import Layout from "./app/Components/Layout";

import ListExample1 from "./app/Components/Content/ListExample1";

const App = (props) => {
    return (
        <BrowserRouter>
            <Layout>
                <ListExample1 />
            </Layout>
        </BrowserRouter>
    );
}

export default App;
