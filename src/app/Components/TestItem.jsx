import React, {
    useState,
    useEffect,
} from "react";

import { useConfig } from "./InitConfig";

const TestItem = ({
    children,
    ...rest
}) => {
    const configCtx = useConfig();
    const { get = () => ({}) } = configCtx;

    console.log({
        component: "TestItem",
        identity: get("identity"),
        refresh: get("refresh"),
    });
    return (
        <p>Testin</p>
    );
};

export default TestItem;
