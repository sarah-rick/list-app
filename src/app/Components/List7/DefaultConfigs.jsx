import React, {
    useState,
    useEffect,
} from "react";

import Config from "../Config";

import IdentityConfig from "./Config/Identity";
import RefreshConfig from "./Config/Refresh";
import DisplayConfig from "./Config/Display";

const ConfigsNameEnum = {
    display: "display",
    identity: "identity",
    refresh: "refresh",
    initialized: "initialized",
};

const DefaultConfigs = ({
    children,
    ...rest
}) => {
    const initProps = {
        name: ConfigsNameEnum.initialized,
        config: {
            initialized: true,
        },
    };

    return (
        <Config {...initProps}>
            <DisplayConfig>
                <IdentityConfig>
                    <RefreshConfig>
                        {children}
                    </RefreshConfig>
                </IdentityConfig>
            </DisplayConfig>
        </Config>
    );
};

export default DefaultConfigs;

export {
    ConfigsNameEnum
};