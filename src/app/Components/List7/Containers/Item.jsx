import React from 'react';

import "./Containers.css";

const Item = ({
    children,
    ...rest
}) => {
    const liProps = {
        ...rest
    };

    return (
        <li {...liProps}>
            {children}
        </li>
    );
};

export default Item;
