import React, {
    useState,
    useEffect,
} from "react";

import { useConfig } from "./InitConfig";

import IdentityConfig from "./List7/Config/Identity";
import RefreshConfig from "./List7/Config/Refresh";

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
        <IdentityConfig>
            <RefreshConfig>
                <p>Testin</p>
            </RefreshConfig>
        </IdentityConfig>
    );
};

export default TestItem;
