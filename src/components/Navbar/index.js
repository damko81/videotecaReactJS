import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to="/movies" activeStyle>
                        Movies
                    </NavLink>
                    <NavLink to="/log-in" activeStyle>
                        Log In
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;