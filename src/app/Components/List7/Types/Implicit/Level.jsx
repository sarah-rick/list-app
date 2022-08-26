import React, {
    useState,
    useEffect,
} from "react";

import { useConfig } from "../../../Config/InitConfig";

import ListContainer from "../../Containers/List";
import ItemContainer from "../../Containers/Item";
import NodeContainer from "../../Containers/Node";

const Level = ({
    items = [],
    ...rest
}) => {
    const configCtx = useConfig();
    const { get = () => ({}) } = configCtx;

    const display = configCtx.get("display");

    console.log({
        component: "Level",
        identity: get("identity"),
        refresh: get("refresh"),
        display: get("display"),
        items,
    });

    if (
        items.length === 0 ||
        !React.isValidElement(display.component)
    ) {
        return null;
    }

    // Inner div used for things like onClick events etc
    return (
        <ListContainer>
            {items.map(({
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
                    <Level items={list} />
                </ItemContainer>
            ))}
        </ListContainer>
    );
};

export default Level;
