import React, {
    useState,
    useEffect,
} from "react";

import ConfigItem from "../../ConfigItem";

import { useConfig } from "../../InitConfig";

const Refresh = ({
    enabled = true,
    canon = "props",
    prune = true,
    merge = "default",
    children,
    ...rest
}) => {
    const config = {
        enabled,
        canon,
        prune,
        merge
    };

    return (
        <ConfigItem
            name="refresh"
            config={config}
        >
            {children}
        </ConfigItem>
    );
};

export default Refresh;
