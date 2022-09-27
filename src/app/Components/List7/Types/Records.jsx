import React, {
    useState,
    useEffect,
} from "react";

import ImplicitList from "./Implicit/List";
import ImplicitList2 from "./Implicit3/List";

const Records = ({
    records = [],
    // x => x.parentId === null
    filter = () => false,
    // ({apiId}) => (x => x.parentId === apiId)
    filterFn = () => (() => false),
    ...rest
}) => {
    const conversion = (
        data = {}
    ) => ({
        data,
        list: records
            .filter(filterFn(data))
            .map(conversion),
    });

    const data = records
        .filter(filter)
        .map(conversion);

    return (
        <ImplicitList2 data={data} />
    );
};

export default Records;
