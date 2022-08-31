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
    const [ newFullData, setNewFullData ] = useState([]);

    const configCtx = useConfig();

    useEffect(() => {
        update(newFullData);
    }, [newFullData]);

    const updateNewFullData = (next = []) => {
        setNewFullData((cur = []) => {
            try {
                if (JSON.stringify(cur) === JSON.stringify(next)) {
                    return cur;
                }
            } catch (ex) {
            }

            return next;
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
                update={updateNewFullData}
            />
        </>
    );
};

export default Initialize;
