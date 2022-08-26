import React, {
    useState,
    useEffect,
} from "react";

import { useConfig } from "../../Config/InitConfig";

import IdentityConfig from "../Config/Identity";
import RefreshConfig from "../Config/Refresh";

import ListContainer from "../Containers/List";
import ItemContainer from "../Containers/Item";
import NodeContainer from "../Containers/Node";

const Implicit = ({
    data = [],
    ...rest
}) => {
    const configCtx = useConfig();
    const { get = () => ({}) } = configCtx;

    console.log({
        component: "Implicit",
        identity: get("identity"),
        refresh: get("refresh"),
        data,
    });

    // Inner div used for things like onClick events etc
    return (
        <IdentityConfig>
            <RefreshConfig>
                <ListContainer>
                    <ItemContainer>
                        <NodeContainer>
                            <div>
                                Hello!
                            </div>
                        </NodeContainer>
                    </ItemContainer>
                </ListContainer>
            </RefreshConfig>
        </IdentityConfig>
    );
};

export default Implicit;
