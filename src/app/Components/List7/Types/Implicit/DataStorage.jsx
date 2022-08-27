import React, {
    useState,
    useEffect,
} from "react";

import Identify from "./Identify";
import Level from "./Level";

import { useConfig } from "../../../Config/InitConfig";

const DataStorage = ({
    data = [],
    ...rest
}) => {
    const [ idData, setIdData ] = useState([]);

    const [ fullData, setFullData ] = useState([]);

    const configCtx = useConfig();
    const identity = configCtx.get("identity");

    useEffect(() => {
        setFullData((curFullData = []) => {
            const nextFullData = [...idData];
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
    }, [idData]);

    const updateIdData = (nextIdData = []) => {
        setIdData((curIdData = []) => {
            console.log({
                curIdData,
                nextIdData,
            });
            try {
                if (
                    JSON.stringify(curIdData) ===
                    JSON.stringify(nextIdData)
                ) {
                    return curIdData;
                }
            } catch (ex) {
            }
            return nextIdData;
        });
    };

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

    // Second identify is where merging happens
    // right now we're taking "data" (aka props) as canon
    // this is all hard-coded
    // actually maybe we mock that up?
    /*
            <Identify
                data={data}
                update={updateFullData}
                {...(identity ?? {})}
            />
// First, identify whatever data is in the state
// Second, identify whatever data is in the props
// Third, merge state & props together

<Merge
    state={state}
    props={props}
    canon={whatever.default}
/>

would this be the owner of the data, ultimately?

I don't think it would be, but...?

I don't know, I gotta think it through properly.

here's a question, can I just... execute a component?
can <Identify> return a value, versus being passed an update fn?

actually does that even matter? Identity vals come in through config.

<Merge> can spin that up.

    */
    return (
        <>
            <Identify
                data={data}
                update={updateIdData}
                {...(identity ?? {})}
            />
            <Level items={idData} />
        </>
    );
};

export default DataStorage;
