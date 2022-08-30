import React, {
    useState,
    useEffect,
} from "react";

import FullData from "../FullData";

import { useConfig } from "../../../../Config/InitConfig";

const Props = ({
    data = [],
    update = () => null,
    ...rest
}) => {
    const configCtx = useConfig();
    const identity = configCtx.get("identity");

    return (
        <FullData
            data={data}
            update={update}
            {...(identity ?? {})}
        />
    );
};

export default Props;
