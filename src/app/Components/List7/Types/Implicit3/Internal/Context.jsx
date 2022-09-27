import React, {
    useState,
    useEffect,
    useReducer,
    createContext,
    useContext,
} from "react";

import { useConfig } from "../../../../Config/InitConfig";

import { ConfigsNameEnum } from "../../../DefaultConfigs";

import { compare } from "../../../utility";

import {
    reducer as listReducer,
    initialState
} from "./reducer";

const ListContext = createContext();
const useList = () => {
    const ctx = useContext(ListContext);

    if (ctx === undefined) {
        throw Error(
            'The `useList` hook must be called from a descendent of the `List`.'
        );
    }

    return ctx;
};

const Context = ({
    children,
    ...rest
}) => {
    const [ state, dispatch ] = useReducer(listReducer, initialState);
    const [ items, setItems ] = useState([]);

    const config = useConfig();

    const update = (next = []) => {
        setItems((cur = []) =>
            compare(cur, next) ? cur : next
        );
    };

    const contextProps = {
        get: () => items,
        update,
        getIdentity: () => config.get(ConfigsNameEnum.identity),
        getRefresh: () => config.get(ConfigsNameEnum.refresh),
        getDisplay: () => config.get(ConfigsNameEnum.display),
    };

    console.log({
        state: contextProps.get(),
        identity: contextProps.getIdentity(),
        refresh: contextProps.getRefresh(),
        display: contextProps.getDisplay(),
    });

    const initialized = config.get(ConfigsNameEnum.initialized);
    return initialized !== undefined && (
        <ListContext.Provider value={contextProps}>
            {children}
        </ListContext.Provider>
    );
};

export default Context;

export {
    useList
};