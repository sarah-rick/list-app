import React, {
    useState,
    useEffect,
    createContext,
    useContext,
} from "react";

import Merge from "./Merge";
import Display from "./Display";

import { useConfig } from "../../../../Config/InitConfig";

import { ConfigsNameEnum } from "../../../DefaultConfigs";

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

const List = ({
    data = [],
    ...rest
}) => {
    const [ items, setItems ] = useState([]);

    const config = useConfig();

    const updateItems = (next = []) => {
        setItems((cur = []) => {
            try {
                if (JSON.stringify(cur) === JSON.stringify(next)) {
                    return cur;
                }
            } catch (ex) {
            }
            return next;
        });
    };

    const contextProps = {
        getProps: () => data,
        getState: () => items,
        getConfig: (name = "") => config.get(name),
        update: updateItems,
    };

    console.log({
        props: contextProps.getProps(),
        state: contextProps.getState(),
        identity: contextProps.getConfig("identity"),
        reload: contextProps.getConfig("refresh"),
        display: contextProps.getConfig("display"),
    });

    const initialized = config.get(ConfigsNameEnum.initialized);
    return initialized !== undefined && (
        <ListContext.Provider value={contextProps}>
            <Merge />
        </ListContext.Provider>
    );
    return initialized !== undefined && (
        <ListContext.Provider value={contextProps}>
            <Merge />
            <Display />
        </ListContext.Provider>
    );
};

export default List;

export {
    useList
};