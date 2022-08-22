import React, { useState, useEffect } from 'react';

import ImplicitList from "./ImplicitList";

const ListTree = ({
    tree = [],
    traversal = () => ({}),
    ...rest
}) => {
    if (!Array.isArray(tree)) {
        throw new Error("[PH] ListTree requires tree prop to be array");
    }
    if (typeof traversal !== "function") {
        throw new Error("[PH] ListTree requires traversal prop to be a function");
    }

    const [ data, setData ] = useState([]);

    useEffect(() => {
        setData((curData = []) => {
            const nextData = tree.map(traversal);
            try {
                if (JSON.stringify(curData) === JSON.stringify(nextData)) {
                    return curData;
                }
            } catch (ex) {
            }
            return nextData;
        });
    }, [tree]);

    return (
        <ImplicitList data={data} />
    );
};

export default ListTree;