import React, {
    useState,
    useEffect,
} from "react";

import { compare } from "../../../../utility";

const ConfigInternal = ({
    items = [],
    identity = {},
    update = () => null,
    ...rest
}) => {
    const [ config, setConfig ] = useState({});

    useEffect(() => {
        const next = {
            identity,
        };
        setConfig((cur = {}) => {
            if (compare(cur, next)) {
                return cur;
            }

            // so we know something has changed.
            const curItems = items;
            const nextItems = [...curItems];

            if (!compare(cur.identity, next.identity)) {
                // code to convert identity here
            }

            // Finally, update
            if (!compare(curItems, nextItems)) {
                update(nextItems);
            }

            return next;
        });
    }, [identity]);


    return null;
};

export default ConfigInternal;
