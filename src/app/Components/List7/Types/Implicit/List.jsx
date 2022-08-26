import React, {
    useState,
    useEffect,
} from "react";

import { useConfig } from "../../../Config/InitConfig";

import ListContainer from "../../Containers/List";
import ItemContainer from "../../Containers/Item";
import NodeContainer from "../../Containers/Node";

const List = ({
    data = [],
    ...rest
}) => {
    const configCtx = useConfig();
    const { get = () => ({}) } = configCtx;

    console.log({
        component: "List",
        identity: get("identity"),
        refresh: get("refresh"),
        data,
    });

    // Inner div used for things like onClick events etc
    return (
        <ListContainer>
            <ItemContainer>
                <NodeContainer>
                    <div>
                        Hello!
                    </div>
                </NodeContainer>
            </ItemContainer>
        </ListContainer>
    );
};

export default List;
