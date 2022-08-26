import React from 'react';

import "./Containers.css";

const List = ({
    children,
    ...rest
}) => {
    const ulProps = {
        ...rest,
        className: [
            "tree",
            rest.className ?? "",
        ].join(" "),
    };

    return (
        <ul {...ulProps}>
            {children}
        </ul>
    );
};

export default List;
