import React, {
    useState,
    useEffect,
} from "react";

import Merge from "./Merge";

import { useList } from "./List";

const Display = ({
    ...rest
}) => {
    const list = useList();
    const items = list.getState();

    return (
        <div>hi display</div>
    );
};

export default Display;
