import React, { useState, useEffect } from 'react';

import ConfigBase from "./Base";

import { ConfigPhaseEnum } from "./enum";

const Assign = ({
    name = "",
    config = {},
    children,
    ...rest
}) => {
    const configProps = {
        phase: ConfigPhaseEnum.assign,
        name,
        config,
    };

    return (
        <ConfigBase {...configProps} />
    );
};

export default Assign;