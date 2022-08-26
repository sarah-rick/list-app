import React from "react";
import { Link } from 'react-router-dom';

import Records from "./ListExample1/Records";
import Tree from "./ListExample1/Tree";
import Links from "./ListExample1/Links";

const ListExample1Enum = {
    default: "none",

    tree: "tree",
    records: "records",
    none: "none",
};

const ListExample1 = ({
    type = ListExample1Enum.default,
    ...rest
}) => {
    return (
        <div>
            {type === ListExample1Enum.tree && (
                <Tree />
            )}
            {type === ListExample1Enum.records && (
                <Records />
            )}
            {type === ListExample1Enum.none && (
                <Links />
            )}
        </div>
    );
}

export default ListExample1;

export {
    ListExample1Enum
};