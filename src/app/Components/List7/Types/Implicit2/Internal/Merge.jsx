import React, {
    useState,
    useEffect,
} from "react";

import HandleState from "./Handle/State";
import HandleProps from "./Handle/Props";

import { useList } from "./List";

import { compare } from "../../../utility";

const Merge = ({
    ...rest
}) => {
    const [ propItems, setPropItems ] = useState([]);
    const [ stateItems, setStateItems ] = useState([]);
    const [ items, setItems ] = useState([]);

    const list = useList();

    useEffect(() => {
        // We don't do any merging; just directly save this
        const next = stateItems;
        setItems((cur = []) => {
            if (compare(cur, next)) {
                return cur;
            }
            list.update(next);
            return next;
        });
    }, [stateItems]);

    useEffect(() => {
        // merge processing here
        const next = propItems;
        setItems((cur = []) => {
            if (compare(cur, next)) {
                return cur;
            }
            list.update(next);
            return next;
        });
        list.update(propItems);
    }, [propItems]);

    const updateState = (next = []) =>
        setStateItems((cur = []) =>
            compare(cur, next) ? cur : next
        );

    const updateProps = (next = []) =>
        setPropItems((cur = []) =>
            compare(cur, next) ? cur : next
        );

    return (
        <HandleProps
            update={updateProps}
        />
    );

    return (
        <>
            <HandleState
                update={updateState}
            />
            <HandleProps
                update={updateProps}
            />
        </>
    );
};

export default Merge;
