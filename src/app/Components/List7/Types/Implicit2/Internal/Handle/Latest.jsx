import React, {
    useState,
    useEffect,
} from "react";

import { compare } from "../../../../utility";

const Latest = ({
    data,
    update = () => null,
    ...rest
}) => {
    const [ internal, setInternal ] = useState([]);

    useEffect(() => {
        const next = data;
        setInternal((cur) => {
            if (compare(cur, next)) {
                return cur;
            }

            update(next);
            return next;
        });
    }, [data]);

    console.log({
        component: "Latest",
        data,
        internal,
    });
    return null;
};

export default Latest;
