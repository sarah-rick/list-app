import React, {
    useState,
    useEffect,
} from "react";

import { useConfig } from "./InitConfig";

const ConfigItem = ({
    name = "",
    config = {},
    children,
    ...rest
}) => {
    const configCtx = useConfig();

    useEffect(() => {
        const { add = () => null } = configCtx;
        add(name, config);

        return () => {
            const { del = () => null } = configCtx;
            del(name);
        };
    }, [name]);

    return children;
};

export default ConfigItem;
