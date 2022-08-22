import React, { useState, useEffect } from 'react';

import FinalizeConfig from "./Configs/Finalize";

const ImplicitList = ({
    data = [],
    ...rest
}) => {
    if (!Array.isArray(data)) {
        throw new Error("[PH] ImplicitList requires data prop to be array");
    }

    return (
        <div>
            <p>ImplicitList</p>
            <FinalizeConfig />
        </div>
    );
};

export default ImplicitList;