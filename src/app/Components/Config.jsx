import React, {
    useState,
    useEffect,
} from "react";

import InitConfig from "./Config/InitConfig";
import ConfigItem from "./Config/ConfigItem";

import { useConfig } from "./Config/InitConfig";

const Config = ({
    name = "",
    config = {},
    children,
    ...rest
}) => {
    const configProps = {
        name,
        config,
    };

    if (rest.hasOwnProperty("update")) {
        configProps.update = rest.update;
    }

    // If config context has already been set up,
    //     use that instance
    //
    try {
        useConfig();
        return (
            <ConfigItem {...configProps}>
                {children}
            </ConfigItem>
        );
    } catch (ex) {
    }

    return (
        <InitConfig>
            <ConfigItem {...configProps}>
                {children}
            </ConfigItem>
        </InitConfig>
    );
};

export default Config;
