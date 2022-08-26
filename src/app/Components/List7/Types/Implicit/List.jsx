import React, {
    useState,
    useEffect,
} from "react";

import DefaultConfigs from "../../DefaultConfigs";
import Level from "./Level";

const List = ({
    data = [],
    ...rest
}) => {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        setItems(data);
    }, [data]);

    return (
        <DefaultConfigs>
            <Level items={items} />
        </DefaultConfigs>
    );
};

export default List;
