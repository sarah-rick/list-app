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

    const update = (
        name = "",
        updateFn = (cur = {}) => ({}),
    ) => {
        setConfigs((configs = {}) => {
            const oldConfig = configs[name];
            const newConfig = updateFn(oldConfig);

            try {
                if (JSON.stringify(oldConfig) === JSON.stringify(newConfig)) {
                    return configs;
                }
            } catch (ex) {
            }

            return {
                ...configs,
                [name]: {...newConfig},
            };
        });
    };

    const remove = (name = "") => {
        setConfigs((configs = {}) => {
            if (!configs.hasOwnProperty(name)) {
                return configs;
            }
            delete(configs[name]);
            return {...configs};
        });
    };

    const get = (name = "") => configs[name];
    
    const contextValue = {
        update,
        get,
        remove,
    };

    return (
        <ConfigContext.Provider value={contextValue}>
            {children}
        </ConfigContext.Provider>
    );
};

export default InitConfig;

export {
    useConfig,
};