
const rekeyItem = (item = {}, keyProps) => {
    const {
        data = {},
        keys = {},
        test = () => false,
        ...rest
    } = item;

    const newKeys = generateKeysFromData(data, keyProps);
    const newTest = generateTestFromKeys(newKeys, keyProps);

    if (newTest(newKeys) !== true) {
        throw new Error("Help");
    }

    return {
        ...rest,
        data,
        keys: newKeys,
        test: newTest
    };
};

const generateKeysFromData = (
    data = {},
    { keys = [] }
) => filter(data, keys);

const generateTestFromKeys = (
    keys = {},
    { testFn = () => (() => false) }
) => testFn(keys);

const filter = (data = {}, props = []) => {
    if (props.length === 0) {
        return { ...data };
    }

    const value = {};
    props.forEach(key => value[key] = data[key]);
    return value;
};

const itemsAreUnique = (items = []) => {
    let unique = true;
    items.forEach(({ test = () => false }) => {
        if (!unique) {
            return;
        }
        const found = items.filter(
            ({ keys = {} }) => test(keys)
        );

        if (found.length !== 1) {
            unique = false;
        }    
    });
    return unique;
};

// --------------------------

const rekey = (state = {}) => {
    const {
        stateItems = [],
        keyProps = {},
    } = state;

    const items = stateItems.map(
        item => rekeyItem(item, keyProps)
    );

    if (!itemsAreUnique(items)) {
        throw new Error("Help 2");
    }

    return {
        ...state,
        stateItems: items,
    };
};

const update = (state = {}) => {
    const {
        initialized = true,
        propItems = [],
        stateItems = [],
    } = state;

    if (!initialized) {
        return {
            ...state,
            stateItems: [ ...propItems ],
            initialized: true,
        };
    } else {
        // true merge!
        return state;
    }
};

// --------------------------

const ActionsEnum = {
    rekey: "rekey",
    update: "update",
};

const initialState = {
    items: [],
    stateItems: [], // the true item list
    propItems: [],  // reload will use this
    keyProps: {
        keys: [],
        testFn: () => (() => false),
    },
    mergeProps: {
        enabled: false,
        canon: "state",
        prune: true,
        merge: canon => canon,
    },
    init: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case ActionsEnum.rekey: {
            const newState = {
                ...state,
                keyProps: action.value.keyProps,
            };
            return rekey(newState);
        }
        case "update": {
            const newState = {
                ...state,
                propItems: action.value.items,
                mergeProps: action.value.mergeProps,
            };
            return update(newState);
        }
        default:
            return state;
    }
};

export {
    initialState,
    reducer,
};