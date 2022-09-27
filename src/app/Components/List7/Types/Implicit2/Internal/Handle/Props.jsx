import React, {
    useState,
    useEffect,
} from "react";

import GetItems from "./Props/GetItems";

import { compare } from "../../../../utility";

const Props = ({
    update = () => null,
    ...rest
}) => {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        update(items);
    }, [items]);

    const updateItems = (next = []) =>
        setItems((cur = []) =>
            compare(cur, next) ? cur : next
        );

    console.log({
        component: "HandleProps",
        items,
    });
    return (
        <GetItems
            update={updateItems}
        />
    );
};

export default Props;
