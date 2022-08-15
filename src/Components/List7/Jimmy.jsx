import React from 'react';

import ListTree from "./Srick/ListTree";

const Jimmy = (props) => {
    // test data

    // Tree-type: parent-child relationships are implicit
    // tree, traversal
    //
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

    // Or! Record-type; parent-child relationships are explicit
    // records, start, connect
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
    const start = ({parentId}) => parentId === null;
    const connectFn = ({apiId}) => (
        (x) => x.parentId === apiId
    );

    return (
        <div>
            <p>
                Hi, I'm Jimmy the hypothetical engineer at
                Google or whatever that's gonna use the List!
            </p>
            <ListTree
                tree={tree}
                traversal={traversal}
            />
        </div>
    );
};

export default Jimmy;