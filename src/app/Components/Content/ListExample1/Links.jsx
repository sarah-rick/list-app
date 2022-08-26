import React from "react";
import { Link } from 'react-router-dom';

const Links = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="tree">
                        <span>
                            Tree data example
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="records">
                        <span>
                            Recordset data example
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Links;
