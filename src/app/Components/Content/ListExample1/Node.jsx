import React, {
    useState,
    useEffect,
} from "react";

const Node = ({
    value = "",
    ...rest
}) => {
    console.log({rest});
    return (
        <div>
            {value}
        </div>
    );
};

export default Node;
