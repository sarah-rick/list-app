import React, {
    useState,
    useEffect,
} from "react";

import ProcessIdentity from "./Process/Identity";
import ProcessProps from "./Process/Props";

import { ConfigsNameEnum } from "../../DefaultConfigs";

import { useConfig } from "../../../Config/InitConfig";

const Initialize = ({
    data = [],
    fullData = [], // currently stored data
                   // eventually this will be current items
    update = () => null,
    updateFullData = () => null, // identical to update
                                 // but may not always be
    ...rest
}) => {
    const [ processed, setProcessed ] = useState([]);

    const configCtx = useConfig();

    useEffect(() => {
        update(processed);
    }, [processed]);

    const updateProcessed = (nextProcessed = []) => {
        setProcessed((curProcessed = []) => {
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
    };

    const initialized = configCtx.get(ConfigsNameEnum.initialized);
    return initialized !== undefined && (
        <>
            <ProcessIdentity
                fullData={fullData}
                update={updateFullData}
            />
            <ProcessProps
                data={data}
                update={updateProcessed}
            />
        </>
    );
};

export default Initialize;
