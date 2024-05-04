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
                    <NavLink to="/loaddeletemovies" activeStyle>
                        Load/Delete
                    </NavLink>
                    <NavLink to="/createmovie" activeStyle>
                        Add Movie
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;