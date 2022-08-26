import React, {
    useState,
    useEffect,
} from "react";

import Level from "./Level";

import { useConfig } from "../../../Config/InitConfig";

const DataStorage = ({
    data = [],
    ...rest
}) => {
    const [ fullData, setFullData ] = useState([]);

    const configCtx = useConfig();
    const identity = configCtx.get("identity");

    useEffect(() => {
        setFullData((curFullData = {}) => {
            if (!identity) {
                return curFullData;
            }

            const {
                keys = [],
                testFn = () => (x => false),
            } = identity;

            // First, we must assign keys to the data
            //
            const filter = (data = {}) => {
                const props = keys.length > 0
                    ? keys
                    : Object.keys(data);
                const value = {};
                props.forEach(prop => value[prop] = data[prop]);
                return value;
            };

            const keyDataFn = ({
                data = {},
                list = {},
            }) => ({
                keys: filter(data),
                data,
                list: list.map(keyDataFn),
            });

            // Next, the test fns
            const testDataFn = ({
                keys = {},
                list = [],
                ...rest
            }) => ({
                keys,
                testFn: testFn(keys),
                ...rest,
                list: list.map(testDataFn),
            });

            const nextFullData = data
                .map(keyDataFn)
                .map(testDataFn);

            console.log({
                curFullData,
                nextFullData,
            });

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
    }, [data, identity]);

    return (
        <Level items={fullData} />
    );
};

export default DataStorage;
