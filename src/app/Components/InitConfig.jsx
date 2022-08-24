import React, {
    useState,
    useEffect,
    createContext,
    useContext,
} from "react";

const ConfigContext = createContext();
const useConfig = () => {
    const ctx = useContext(ConfigContext);

    if (ctx === undefined) {
        throw Error(
            'The `useConfig` hook must be called from a descendent of the `InitConfig`.'
        );
    }

    return ctx;
};


const InitConfig = ({
    children,
    ...rest
}) => {
    const [ configs, setConfigs ] = useState({});

    const add = (
        name = "",
        config = {},
    ) => {
        setConfigs((configs = {}) => {
            try {
                if (
                    configs.hasOwnProperty(name) &&
                    JSON.stringify(configs[name]) === JSON.stringify(config)
                ) {
                    return configs;
                }
            } catch (ex) {
            }
            return {
                ...configs,
                [name]: {...config},
            };
        });
    };

    const del = (name = "") => {
        setConfigs((configs = {}) => {
            if (!configs.hasOwnProperty(name)) {
                return configs;
            }
            delete(configs[name]);
            return {...configs};
        });
    };

    const get = (name = "") => configs[name] ?? {};
    
    const contextValue = {
        name: "a",
        config: "b",
        add,
        get,
        del,
    };

    return (
        <ConfigContext.Provider value={contextValue}>
            {children}
        </ConfigContext.Provider>
    );
};

export default InitConfig;

export {
    useConfig
};