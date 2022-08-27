import React, {
    useState,
    useEffect,
} from "react";

import Config from "../../Config";

import { ConfigsNameEnum } from "../DefaultConfigs";

const Display = ({
    component = null,
    children,
    ...rest
}) => {
    const configProps = {
        name: ConfigsNameEnum.display,
        config: {
            component,
        },
    };

    if (rest.hasOwnProperty("update")) {
        configProps.update = rest.update;
    }

    return (
        <Config {...configProps}>
            {children}
        </Config>
    );
};

export default Display;
