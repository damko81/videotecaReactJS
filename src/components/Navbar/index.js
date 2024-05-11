import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from "./NavbarElements";
import {getUsername, logoutUserAction } from "../../pages/Action";

const Navbar = () => {

    let username = getUsername();
    
    const handleLogout = () => {
        logoutUserAction(); 
        window.location.reload(true);
    };

    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to="/movies" activeStyle>
                        VIDEOTECA
                    </NavLink>
                    <NavLink to="/movies" activeStyle>
                        Movies
                    </NavLink>
                    { (username===null  || username===undefined) &&
                        <NavLink to="/log-in" activeStyle>
                            Log In
                        </NavLink>
                    }
                    { (username===null  || username===undefined) &&
                        <NavLink to="/sign-up" activeStyle>
                            Sign Up
                        </NavLink>
                    }
                    { (username!==null && username!==undefined) &&
                    <NavLink to="/loaddeletemovies" activeStyle>
                        Load/Delete
                    </NavLink>
                    }
                    { (username!==null && username!==undefined) &&
                    <NavLink to="/createmovie" activeStyle>
                        Add Movie
                    </NavLink>
                    }
                    { (username!==null && username!==undefined) &&
                    <NavLink to="/fileupload" activeStyle>
                        Imp/Exp XML
                    </NavLink>
                    }
                    <NavLink to="/profile" activeStyle>
                        {username}
                    </NavLink>
                    { (username!==null && username!==undefined) &&
                        <NavLink onClick={handleLogout} activeStyle>
                               Log Out
                        </NavLink>
                    }
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;