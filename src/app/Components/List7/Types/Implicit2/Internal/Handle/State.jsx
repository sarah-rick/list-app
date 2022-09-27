import React, {
    useState,
    useEffect,
} from "react";

import HandleConfig from "./Config";

const State = ({
    update = () => null,
    ...rest
}) => {
    return (
        <HandleConfig
            update={update}
        />
    );
};

export default State;
