import React, {
    useState,
    useEffect,
} from "react";

import HandleLatest from "./Latest";

import { useList } from "../List";

import { ConfigsNameEnum } from "../../../../DefaultConfigs";

import { compare } from "../../../../utility";

const Config = ({
    update = () => null,
    ...rest
}) => {
    const [ config, setConfig ] = useState({});
    const [ items, setItems ] = useState([]);

    const list = useList();

    useEffect(() => {
        const next = list.getState();
        setItems((cur = {}) => {
            if (compare(cur, next)) {
                return cur;
            }
            update(next);
            return next;
        });

    }, [config]);

    const updateConfig = (next = {}) => 
        setConfig((cur = {}) =>
            compare(cur, next) ? cur : next
        );

    return (
        <HandleLatest
            data={{
                identity: list.getConfig(ConfigsNameEnum.identity),
            }}
            update={updateConfig}
        />
    );
};

export default Config;
