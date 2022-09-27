import React, {
    useState,
    useEffect,
} from "react";

import HandleLatest from "../Latest";

import { useList } from "../../List";

import { ConfigsNameEnum } from "../../../../../DefaultConfigs";

import { compare } from "../../../../../utility";

const GetFullData = ({
    update = () => null,
    ...rest
}) => {
    const [ data, setData ] = useState([]);
    const [ full, setFull ] = useState([]);

    const list = useList();

    useEffect(() => {
        update(full);
    }, [full]);

    useEffect(() => {
        // process here
        const identity = list.getConfig(ConfigsNameEnum.identity);

        const next = data;
        setFull((cur = []) =>
            compare(cur, next) ? cur : next
        );
    }, [data]);

    const updateData = (next = []) =>
        setData((cur = []) =>
            compare(cur, next) ? cur : next
        );

    console.log({
        component: "GetFullData",
        data,
        full,
    });
    return (
        <HandleLatest
            data={list.getProps()}
            update={updateData}
        />
    );
};

export default GetFullData;
