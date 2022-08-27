import React, {
    useState,
    useEffect,
} from "react";

const ChangeIdentity = ({
    fullData = [],
    keys = [],
    testFn = () => (x => false),
    update = () => null,
    ...rest
}) => {
    const [ processed, setProcessed ] = useState([]);

    useEffect(() => {
        update(processed);
    }, [processed]);

    useEffect(() => {
        setProcessed((curProcessed = {}) => {
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

            const nextProcessed = fullData
                .map(keyDataFn)
                .map(testDataFn);

            try {
                if (
                    JSON.stringify(curProcessed) ===
                    JSON.stringify(nextProcessed)
                ) {
                    return curProcessed;
                }
            } catch (ex) {
            }

            return nextProcessed;
        });
    }, [keys, testFn]);

    return null;
};

export default ChangeIdentity;
