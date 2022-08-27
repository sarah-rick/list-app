import React, {
    useState,
    useEffect,
} from "react";

import ConfigControls from "./ListExample1/ConfigControls";
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
    const [ identity, setIdentity ] = useState(true);
    const updateIdentity = (val = true) => setIdentity(val);

    return (
        <div>
            {type !== ListExample1Enum.none && (
                <ConfigControls
                    identity={identity}
                    updateIdentity={updateIdentity}
                />
            )}
            {type === ListExample1Enum.tree && (
                <Tree
                    identity={identity}
                />
            )}
            {type === ListExample1Enum.records && (
                <Records
                    identity={identity}
                />
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