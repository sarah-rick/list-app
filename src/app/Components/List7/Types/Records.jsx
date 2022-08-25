import React, {
    useState,
    useEffect,
} from "react";

import Implicit from "./Implicit";

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
        <Implicit data={data} />
    );
};

export default Records;
