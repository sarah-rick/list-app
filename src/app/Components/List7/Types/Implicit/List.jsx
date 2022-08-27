import React, {
    useState,
    useEffect,
} from "react";

import DefaultConfigs from "../../DefaultConfigs";
import Initialize from "./Initialize";
import Level from "./Level";

const List = ({
    data = [],
    ...rest
}) => {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        console.log({
            component: "List",
            items,
        });
    }, [items]);

    const updateItems = (nextItems = []) => {
        setItems((curItems = []) => {
            try {
                if (JSON.stringify(curItems) === JSON.stringify(nextItems)) {
                    return curItems;
                }
            } catch (ex) {
            }
            return nextItems;
        });
    };
    return (
        <DefaultConfigs>
            <Initialize
                data={data}
                update={updateItems}
            />
            <Level items={items} />
        </DefaultConfigs>
    );
};

export default List;
