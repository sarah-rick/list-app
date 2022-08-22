import React, { useState, useEffect } from 'react';

import ConfigBase from "./Base";

import { ConfigPhaseEnum } from "./enum";

const Finalize = ({
    children,
    ...rest
}) => {
    const configProps = {
        phase: ConfigPhaseEnum.finalize,
    };

    return (
        <ConfigBase {...configProps} />
    );
};

export default Finalize;