import React, {
    useState,
    useEffect,
} from "react";

import FlattenData from "./FlattenData";

import { compare } from "../../../../../utility";

const GetItems = ({
    update = () => null,
    ...rest
}) => {
    const [ flat, setFlat ] = useState([]);
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        const next = flat; // do processing here
        setItems((cur = []) => {
            if (compare(cur, next)) {
                return cur;
            }
            update(next);
            return next;
        });
    }, [flat]);

    const updateFlat = (next = []) =>
        setFlat((cur = []) =>
            compare(cur, next) ? cur : next
        );

    console.log({
        component: "GetItems",
        flat,
        items,
    });
    return (
        <FlattenData
            update={updateFlat}
        />
    );
};

export default GetItems;
