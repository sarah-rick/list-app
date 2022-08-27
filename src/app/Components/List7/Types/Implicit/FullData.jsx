import React, {
    useState,
    useEffect,
} from "react";

const FullData = ({
    data = [],
    keys = [],
    testFn = () => (x => false),
    update = () => null,
    ...rest
}) => {
    const [ fullData, setFullData ] = useState([]);

    useEffect(() => {
        update(fullData);
    }, [fullData]);

    useEffect(() => {
        setFullData((curFullData = {}) => {
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
    }, [data]);

    return null;
};

export default FullData;
