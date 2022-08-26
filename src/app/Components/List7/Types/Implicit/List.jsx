import React, {
    useState,
    useEffect,
} from "react";

import DefaultConfigs from "../../DefaultConfigs";
import DataStorage from "./DataStorage";

const List = ({
    data = [],
    ...rest
}) => {
    return (
        <DefaultConfigs>
            <DataStorage data={data} />
        </DefaultConfigs>
    );
};

export default List;
