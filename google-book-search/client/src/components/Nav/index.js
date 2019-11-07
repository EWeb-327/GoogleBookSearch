import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Google Book Search</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <NavLink 
                            className="nav-link" 
                            activeClassName="active"
                            to="/"
                            isActive={() => window.location.pathname === "/" || window.location.pathname === "/search"}
                        >
                            Search
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink 
                            className="nav-link" 
                            activeClassName="active"
                            to="/saved"
                        >
                            Saved
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;