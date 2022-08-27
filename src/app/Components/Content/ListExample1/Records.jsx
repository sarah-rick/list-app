import React from "react";

import IdentityConfig from "../../List7/Config/Identity";
import RefreshConfig from "../../List7/Config/Refresh";
import DisplayConfig from "../../List7/Config/Display";

import {
    RefreshCanonEnum,
    RefreshMergeEnum,
} from "../../List7/Config/Refresh";

import RecordsList from "../../List7/Types/Records";

import Node from "./Node";

const Records = ({
    identity = true,
    ...rest
}) => {
    const records = [
        {apiId: 7056, createId: "00", parentId: null, value: "A", disabled: true},
        {apiId: 9026, createId: "01", parentId: 7056, value: "A1", disabled: true, favorite: true},
        {apiId: 4254, createId: "02", parentId: 9026, value: "A1a", disabled: true},
        {apiId: 1965, createId: "03", parentId: 9026, value: "A1b", disabled: true},
        {apiId: 3031, createId: "04", parentId: 9026, value: "A1c", disabled: true},
        {apiId: 2707, createId: "05", parentId: 7056, value: "A2", disabled: true},
        {apiId: 1290, createId: "06", parentId: 7056, value: "A3", disabled: true},
        {apiId: 9967, createId: "07", parentId: 1290, value: "A3a", disabled: true},
        {apiId: 1496, createId: "08", parentId: null, value: "B", focus: true},
        {apiId: 491, createId: "09", parentId: null, value: "C", checked: true},
        {apiId: 8172, createId: "10", parentId: 491, value: "C1", checked: true},
        {apiId: 1139, createId: "11", parentId: 8172, value: "C1a", checked: true},
        {apiId: 6045, createId: "12", parentId: 8172, value: "C1b", checked: true},
        {apiId: 4092, createId: "13", parentId: 8172, value: "C1c", checked: true},
    ];

    const filter = ({parentId}) => parentId === null;
    const filterFn = ({apiId}) => (
        x => x.parentId === apiId
    );

    const identityConfigProps = identity !== true
        ? {}
        : {
            keys: ["apiId", "createId"],
            testFn: ({createId = ""}) => (
                x => x.createId === createId
            ),
        };

    return (
        <DisplayConfig
            component={(<Node />)}
        >
            <IdentityConfig
                {...identityConfigProps}
            >
                <RefreshConfig
                    enabled={true}
                    canon={RefreshCanonEnum.state}
                    prune={false}
                    merge={RefreshMergeEnum.default}
                >
                    <RecordsList
                        records={records}
                        filter={filter}
                        filterFn={filterFn}
                    />
                </RefreshConfig>
            </IdentityConfig>
        </DisplayConfig>
    );
}

export default Records;
