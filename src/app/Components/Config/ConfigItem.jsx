import React, {
    useState,
    useEffect,
} from "react";

import { useConfig } from "./InitConfig";

const ConfigItem = ({
    name = "",
    config = {},
    update = (orig = {}, next = {}) => next,
    children,
    ...rest
}) => {
    const configCtx = useConfig();

    useEffect(() => {
        configCtx.update(
            name,
            (orig = {}) => update(orig, config)
        );

        return () => {
            configCtx.remove(name);
        };
    }, [name]);

    useEffect(() => {
        console.log({
            name,
            config,
        });
        configCtx.update(
            name,
            (orig = {}) => update(orig, config)
        );
    }, [config]);

    return children;
};

export default ConfigItem;
