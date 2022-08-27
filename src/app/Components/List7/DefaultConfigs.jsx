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
    const update = (cur = {}, next = {}) => {
        if (!cur || Object.keys(cur).length === 0) {
            return next;
        }
        return cur;
    };

    const initProps = {
        name: ConfigsNameEnum.initialized,
        config: {
            initialized: true,
        },
        update,
    };

    return (
        <Config {...initProps}>
            <DisplayConfig
                update={update}
            >
                <IdentityConfig
                    update={update}
                >
                    <RefreshConfig
                        update={update}
                    >
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