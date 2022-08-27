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
    // This is what we want to store, ultimately
    const [ items, setItems ] = useState([]);

    // This is what actually is stored
    const [ fullData, setFullData ] = useState([]);

    useEffect(() => {
        console.log({
            component: "List",
            fullData,
        });

        const nextItems = [...fullData];
        setItems((curItems = []) => {
            try {
                if (
                    JSON.stringify(curItems) ===
                    JSON.stringify(nextItems)
                ) {
                    return curItems;
                }
            } catch (ex) {
            }
            return nextItems;
        });
    }, [fullData]);

    const updateFullData = (nextFullData = []) => {
        setFullData((curFullData = []) => {
            try {
                if (
                    JSON.stringify(curFullData) ===
                    JSON.stringify(nextFullData)
                ) {
                    return curFullData;
                }
            } catch (ex) {
            }
            return nextFullData;
        });
    };
    return (
        <DefaultConfigs>
            <Initialize
                data={data}
                fullData={fullData}
                update={updateFullData}
                updateFullData={updateFullData}
            />
            <Level items={items} />
        </DefaultConfigs>
    );
};

export default List;
