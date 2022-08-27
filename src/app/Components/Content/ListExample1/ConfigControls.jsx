import React, {
    useState,
    useEffect,
} from "react";

import IdentityConfig from "./ConfigControls/Identity";

import ListContainer from "../../List7/Containers/List";
import ItemContainer from "../../List7/Containers/Item";
import NodeContainer from "../../List7/Containers/Node";

const ConfigControls = ({
    identity = true,
    updateIdentity = () => null,
    ...rest
}) => {
    return (
        <>
            <IdentityConfig
                custom={identity}
                update={updateIdentity}
            />
        </>
    );
}

export default ConfigControls;
