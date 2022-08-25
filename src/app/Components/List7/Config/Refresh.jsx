import React, {
    useState,
    useEffect,
} from "react";

import Config from "../../Config";

const RefreshCanonEnum = {
    props: "props",
    state: "state",
    default: "props",
};

const RefreshMergeEnum = {
    default: "default",
};

const Refresh = ({
    enabled = true,
    canon = RefreshCanonEnum.default,
    prune = true,
    merge = RefreshMergeEnum.default,
    children,
    ...rest
}) => {
    if (!RefreshCanonEnum.hasOwnProperty(canon)) {
        throw new Error("Erroneous canon property");
    }

    const mergeVal = merge === RefreshMergeEnum.default
        ? (prune === true
            ? (canon = {}) => ({...canon})
            : (canon = {}, other = {}) => ({...other, ...canon})
        )
        : merge;

    const configProps = {
        name: "refresh",
        config: {
            enabled,
            canon,
            prune,
            merge: mergeVal,
        },
    };

    if (rest.hasOwnProperty("update")) {
        configProps.update = rest.update;
    }

    return (
        <Config {...configProps}>
            {children}
        </Config>
    );
};

export default Refresh;

export {
    RefreshCanonEnum,
    RefreshMergeEnum,
}