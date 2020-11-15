import React from 'react';
import {Link} from "react-router-dom";
import {Nav, NavMenuIcon, Ul} from "./Navigation.styles";



function Navigation() {
    return (
        <Nav>
            <Ul>
                <li><Link exact to={"/"}><NavMenuIcon src={"../../../Icons/home.svg"}/>Home</Link></li>
                <li><Link exact to={"/catalog"}><NavMenuIcon src={""}/>Catalog</Link></li>
                <li><Link exact to={"/cart"}><NavMenuIcon/>Cart</Link></li>
                <li><Link exact to={"/signin"}><NavMenuIcon/>Sign in</Link></li>
            </Ul>

        </Nav>
    );
}

export default Navigation;