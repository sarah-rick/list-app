import React, {
    useState,
    useEffect,
} from "react";

import DefaultConfigs from "../DefaultConfigs";
import ImplicitList from "./Implicit/List";

const Tree = ({
    tree = [],
    traversal = () => ({}),
    ...rest
}) => {
    const data = tree.map(traversal);

    return (
        <ImplicitList data={data} />
    );
};

export default Tree;
