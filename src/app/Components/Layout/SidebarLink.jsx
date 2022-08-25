import React from "react";
import { Link, useMatch } from 'react-router-dom';

const SidebarLink = ({
    path = "",
    name = "",
    ...rest
}) => {
    const classNames = [];
    try {
        if (useMatch(path)) {
            classNames.push("currentPage");
        }
    } catch (ex) {
    }

    const className = classNames.join(" ");

    return (
        <Link to={path}>
            <span className={className}>
                {name}
            </span>
        </Link>
    );
}

export default SidebarLink;
