import React from 'react';

import "./Containers.css";

const Node = ({
    children,
    ...rest
}) => {
    const divProps = {
        ...rest,
        className: [
            "node",
            rest.className ?? "",
        ].join(" "),
    };

    return (
        <div {...divProps}>
            {children}
        </div>
    );
};

export default Node;
