import React, {
    useState,
    useEffect,
} from "react";

import GetFullData from "./GetFullData";
import { compare } from "../../../../../utility";

const FlattenData = ({
    update = () => null,
    ...rest
}) => {
    const [ full, setFull ] = useState([]);
    const [ flat, setFlat ] = useState([]);

    useEffect(() => {
        const next = full; // processing
        setFlat((cur = []) => {
            if (compare(cur, next)) {
                return cur;
            }
            update(next);
            return next;
        });
    }, [full]);

    const updateFull = (next = []) =>
        setFull((cur = []) =>
            compare(cur, next) ? cur : next
        );

    console.log({
        component: "FlattenData",
        full,
        flat,
    });
    return (
        <GetFullData
            update={updateFull}
        />
    );
};

export default FlattenData;
