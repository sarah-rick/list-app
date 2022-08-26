import React, {
    useState,
    useEffect,
} from "react";

import { useConfig } from "../Config/InitConfig";

import IdentityConfig from "./Config/Identity";
import RefreshConfig from "./Config/Refresh";
import DisplayConfig from "./Config/Display";

const DefaultConfigs = ({
    children,
    ...rest
}) => {
    const configCtx = useConfig();
    const { get = () => ({}) } = configCtx;

    return (
        <DisplayConfig>
            <IdentityConfig>
                <RefreshConfig>
                    {children}
                </RefreshConfig>
            </IdentityConfig>
        </DisplayConfig>
    );
};

export default DefaultConfigs;
