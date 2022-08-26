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

    const display = configCtx.get("display");

    console.log({
        component: "List",
        identity: get("identity"),
        refresh: get("refresh"),
        display: get("display"),
        data,
    });

    if (
        data.length === 0 ||
        !React.isValidElement(display.component)
    ) {
        return null;
    }

    // Inner div used for things like onClick events etc
    return (
        <ListContainer>
            {data.map(({
                data = {},
                list = {}
            }, idx) => (
                <ItemContainer key={idx}>
                    <NodeContainer>
                        <display.component.type
                            {...display.component.props}
                            {...data}
                        />
                    </NodeContainer>
                    <List data={list} />
                </ItemContainer>
            ))}
        </ListContainer>
    );
};

export default List;
