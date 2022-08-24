import React, {
    useState,
    useEffect,
} from "react";

import Config from "../../Config";

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
    const config = {
        keys,
        testFn,
    };

    return (
        <Config
            name="identity"
            config={config}
        >
            {children}
        </Config>
    );
};

export default Identity;
