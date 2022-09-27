import React, {
    useState,
    useEffect,
} from "react";

import DefaultConfigs from "../../DefaultConfigs";
import InternalContext from "./Internal/Context";
import InternalMerge from "./Internal/Merge";

const List = ({
    data = [],
    ...rest
}) => {
    return (
        <DefaultConfigs>
            <InternalContext>
                <InternalMerge
                    data={data}
                />
            </InternalContext>
        </DefaultConfigs>
    );
};

export default List;
