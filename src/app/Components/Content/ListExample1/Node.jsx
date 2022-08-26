import React, {
    useState,
    useEffect,
} from "react";

const Node = ({
    value = "",
    ...rest
}) => {
    return (
        <div>
            {value}
        </div>
    );
};

export default Node;
