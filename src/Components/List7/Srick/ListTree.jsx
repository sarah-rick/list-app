import React from 'react';

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
    const foo = tree.map(traversal);

    return (
        <div>
            <p>ListTree</p>
        </div>
    );
};

export default ListTree;