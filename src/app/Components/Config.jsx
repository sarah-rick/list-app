import React, {
    useState,
    useEffect,
} from "react";

import InitConfig from "./InitConfig";
import ConfigItem from "./ConfigItem";

import { useConfig } from "./InitConfig";

const Config = ({
    name = "",
    config = {},
    children,
    ...rest
}) => {
    // If config context has already been set up,
    //     use that instance
    //
    try {
        useConfig();
        return (
            <ConfigItem
                name={name}
                config={config}
            >
                {children}
            </ConfigItem>
        );
    } catch (ex) {
    }

    return (
        <InitConfig>
            <ConfigItem
                name={name}
                config={config}
            >
                {children}
            </ConfigItem>
        </InitConfig>
    );
};

export default Config;
