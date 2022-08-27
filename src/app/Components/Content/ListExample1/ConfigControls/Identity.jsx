import React, {
    useState,
    useEffect,
} from "react";

import ListContainer from "../../../List7/Containers/List";
import ItemContainer from "../../../List7/Containers/Item";
import NodeContainer from "../../../List7/Containers/Node";

const Identity = ({
    custom = true,
    update = () => null,
    ...rest
}) => {
    const customProps = {
        className: custom === true ? "toggleOn" : "",
        onClick: () => update(true),
    };

    const defaultProps = {
        className: custom === false ? "toggleOn" : "",
        onClick: () => update(false),
    };

    return (
        <div>
            <p>Identity config:</p>
            <ListContainer>
                <ItemContainer>
                    <NodeContainer
                        {...customProps}
                    >
                        <div>
                            Custom
                        </div>
                    </NodeContainer>
                </ItemContainer>
                <ItemContainer>
                    <NodeContainer
                        {...defaultProps}
                    >
                        <div>
                            Default
                        </div>
                    </NodeContainer>
                </ItemContainer>
            </ListContainer>
        </div>
    );
}

export default Identity;
