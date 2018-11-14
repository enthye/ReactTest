import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};