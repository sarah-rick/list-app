import React from "react";

import IdentityConfig from "../../List7/Config/Identity";
import RefreshConfig from "../../List7/Config/Refresh";
import DisplayConfig from "../../List7/Config/Display";

import {
    RefreshCanonEnum,
    RefreshMergeEnum,
} from "../../List7/Config/Refresh";

import TreeList from "../../List7/Types/Tree";

const Tree = (props) => {
    const tree = [
        {value: "A", apiId: 7056, createId: "00", parentId: null, disabled: true, children: [
            {value: "A1", apiId: 9026, createId: "01", parentId: 7056, disabled: true, favorite: true, children: [
                {value: "A1a", apiId: 4254, createId: "02", parentId: 9026, disabled: true},
                {value: "A1b", apiId: 1965, createId: "03", parentId: 9026, disabled: true},
                {value: "A1c", apiId: 3031, createId: "04", parentId: 9026, disabled: true},
            ]},
            {value: "A2", apiId: 2707, createId: "05", parentId: 7056, disabled: true},
            {value: "A3", apiId: 1290, createId: "06", parentId: 7056, disabled: true, children: [
                {value: "A3a", apiId: 9967, createId: "07", parentId: 1290, disabled: true},
            ]},
        ]},
        {value: "B", apiId: 1496, createId: "08", parentId: null, focus: true},
        {value: "C", apiId: 491, createId: "09", parentId: null, checked: true, children: [
            {value: "C1", apiId: 8172, createId: "10", parentId: 491, checked: true, children: [
                {value: "C1a", apiId: 1139, createId: "11", parentId: 8172, checked: true},
                {value: "C1b", apiId: 6045, createId: "12", parentId: 8172, checked: true},
                {value: "C1c", apiId: 4092, createId: "13", parentId: 8172, checked: true},
            ]},
        ]},
    ];
    const traversal = ({
        children = [],
        ...data
    }) => ({
        data,
        list: children.map(traversal),
    });

    return (
        <DisplayConfig
            component={(
                <div>
                    Hello!
                </div>
            )}
        >
            <IdentityConfig
                keys={["apiId", "createId"]}
                testFn={({createId = ""}) => (
                    x => x.createId === createId
                )}
            >
                <RefreshConfig
                    enabled={true}
                    canon={RefreshCanonEnum.state}
                    prune={false}
                    merge={RefreshMergeEnum.default}
                >
                    <TreeList
                        tree={tree}
                        traversal={traversal}
                    />
                </RefreshConfig>
            </IdentityConfig>
        </DisplayConfig>
    );
}

export default Tree;
