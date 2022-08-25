import React, {
    useState,
    useEffect,
} from "react";

import { useConfig } from "../../InitConfig";

import IdentityConfig from "../Config/Identity";
import RefreshConfig from "../Config/Refresh";

const Implicit = ({
    data = [],
    ...rest
}) => {
    const configCtx = useConfig();
    const { get = () => ({}) } = configCtx;

    console.log({
        component: "Implicit",
        identity: get("identity"),
        refresh: get("refresh"),
        data,
    });
    return (
        <IdentityConfig>
            <RefreshConfig>
                <p>ImplicitList</p>
            </RefreshConfig>
        </IdentityConfig>
    );
};

export default Implicit;
