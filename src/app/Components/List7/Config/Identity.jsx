import React, {
    useState,
    useEffect,
} from "react";

import Config from "../../Config";

import { ConfigsNameEnum } from "../DefaultConfigs";

const Identity = ({
    keys = [],
    testFn = (data = {}) => (
        x => Object.keys(data).every(key =>
            x.hasOwnProperty(key) && x[key] === data[key]
        )
    ),
    children,
    ...rest
}) => {
    const configProps = {
        name: ConfigsNameEnum.identity,
        config: {
            keys,
            testFn,
        }
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

export default Identity;
