import React, {
    useState,
    useEffect,
} from "react";

import ConfigItem from "../../ConfigItem";

import { useConfig } from "../../InitConfig";

const Identity = ({
    keys = [],
    testFn = (keys = {}) => (
        x => Object.keys(keys).every(key =>
            x.hasOwnProperty(key) && x[key] === keys[key]
        )
    ),
    children,
    ...rest
}) => {
    const config = {
        keys,
        testFn,
    };

    return (
        <ConfigItem
            name="identity"
            config={config}
        >
            {children}
        </ConfigItem>
    );
};

export default Identity;
