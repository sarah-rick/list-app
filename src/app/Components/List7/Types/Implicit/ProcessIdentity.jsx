import React, {
    useState,
    useEffect,
} from "react";

import FullData from "./FullData";
import ChangeIdentity from "./ChangeIdentity";

import { useConfig } from "../../../Config/InitConfig";

const ProcessIdentity = ({
    fullData = [],
    update = () => null,
    ...rest
}) => {
    const configCtx = useConfig();
    const identity = configCtx.get("identity");

    return (
        <ChangeIdentity
            fullData={fullData}
            update={update}
            {...(identity ?? {})}
        />
    );
};

export default ProcessIdentity;
