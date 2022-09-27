import React, {
    useState,
    useEffect,
} from "react";

import ImplicitList from "./Implicit/List";
import ImplicitList2 from "./Implicit3/List";

const Tree = ({
    tree = [],
    traversal = () => ({}),
    ...rest
}) => {
    const data = tree.map(traversal);

    return (
        <ImplicitList2 data={data} />
    );
};

export default Tree;
