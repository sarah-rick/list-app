import React, {
    useState,
    useEffect,
} from "react";

import ProcessProps from "./ProcessProps";

import { ConfigsNameEnum } from "../../DefaultConfigs";

import { useConfig } from "../../../Config/InitConfig";

const Initialize = ({
    data = [],
    update = () => null,
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
        <ProcessProps
            data={data}
            update={updateProcessed}
        />
    );
};

export default Initialize;
