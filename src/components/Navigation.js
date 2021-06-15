import React from "react";
import {Link} from "react-router-dom";

const Navigation = ({userObj}) => {
    return (<nav>
        <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to='/profile'>
                    Profile
                </Link>

            </li>
            <li>
                <Link to="/game">
                    Game Page
                </Link>
            </li>
            <li>
                <Link to="/ranking">
                    Ranking
                </Link>
            </li>
        </ul>
    </nav>);
};

export default Navigation;