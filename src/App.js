import React from "react";

import "./App.css";

import IdentityConfig from "./app/Components/List7/Config/Identity";
import RefreshConfig from "./app/Components/List7/Config/Refresh";

import {
    RefreshCanonEnum,
    RefreshMergeEnum,
} from "./app/Components/List7/Config/Refresh";

import TestItem from "./app/Components/TestItem";

const App = (props) => {
    return (
        <div className="container">
            <div className="content">
                <div>
                    <p>hello world!</p>
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
                            <TestItem />
                        </RefreshConfig>
                    </IdentityConfig>
                </div>
            </div>
        </div>
    );
}

export default App;
