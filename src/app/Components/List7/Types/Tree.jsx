import React, {
    useState,
    useEffect,
} from "react";

import Implicit from "./Implicit";

const Tree = ({
    tree = [],
    traversal = () => ({}),
    ...rest
}) => {
    const data = tree.map(traversal);

    return (
        <Implicit data={data} />
    );
};

export default Tree;
