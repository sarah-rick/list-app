import React, {
    useState,
    useEffect,
    useContext,
    createContext,
} from 'react';

import { ConfigPhaseEnum } from "./enum";


const ConfigContext = createContext();
const useConfig = () => {
    const ctx = useContext(ConfigContext);
    if (ctx !== undefined) {
        return ctx;
    }
    throw new Error(
        "The `useConfig` hook must be called from a descendent of the `ConfigBase`."
    );
};


const Base = ({
    phase = "",
    name = "",
    config = {},
    children,
    ...rest
}) => {
    let value = {};

    try {
        const configCtx = useConfig();

        // Regardless of current context's phase
        //     if previous context was in "assign", we can safely port those values over
        if (configCtx.phase === ConfigPhaseEnum.assign) {
            value = configCtx;
        }
    } catch (ex) {
    }

    value.phase = phase;

    // If current context is in "assign", then we have more config values to save
    if (phase === ConfigPhaseEnum.assign) {
        value[name] = config;
    }

    return (
        <ConfigContext.Provider value={value}>
            {children}
        </ConfigContext.Provider>
    );
};

export default Base;

export {
    useConfig
};