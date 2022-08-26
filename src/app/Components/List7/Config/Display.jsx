import React, {
    useState,
    useEffect,
} from "react";

import Config from "../../Config";

const Display = ({
    component = null,
    children,
    ...rest
}) => {
    const configProps = {
        name: "identity",
        component,
    };

    return (
        <Config {...configProps}>
            {children}
        </Config>
    );
};

export default Display;
