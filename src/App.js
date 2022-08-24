import React from "react";

import "./App.css";

import InitConfig from "./app/Components/InitConfig";
import ConfigItem from "./app/Components/ConfigItem";

import IdentityConfig from "./app/Components/List7/Config/Identity";
import RefreshConfig from "./app/Components/List7/Config/Refresh";

import TestItem from "./app/Components/TestItem";

const App = (props) => {
    return (
        <div className="container">
            <div className="content">
                <div>
                    <p>hello world!</p>
                    <InitConfig>
                        <IdentityConfig
                            keys={["apiId", "createId"]}
                            testFn={({createId = ""}) => (
                                x => x.createId === createId
                            )}
                        >
                            <RefreshConfig
                                enabled={true}
                                canon="state"
                                prune={false}
                                merge={(canon = {}, other = {}) => ({
                                    ...other,
                                    ...canon,
                                })}
                            >
                                <TestItem />
                            </RefreshConfig>
                        </IdentityConfig>
                    </InitConfig>
                </div>
            </div>
        </div>
    );
}

export default App;
