import React, {
    useState,
    useEffect,
} from "react";

import DefaultConfigs from "../../DefaultConfigs";
import InternalList from "./Internal/List";

const List = ({
    data = [],
    ...rest
}) => {
    return (
        <DefaultConfigs>
            <InternalList
                data={data}
            />
        </DefaultConfigs>
    );
};

export default List;
