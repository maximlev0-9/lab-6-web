import React from 'react';
import {Link} from "react-router-dom";
import {Nav, NavMenuIcon, Ul} from "./Navigation.styles";



function Navigation() {
    return (
        <Nav>
            <Ul>
                <li><Link exact={"true"} to={"/"}><NavMenuIcon src={"../../Icons/home.svg"}/>Home</Link></li>
                <li><Link exact={"true"} to={"/catalog"}><NavMenuIcon src={"../../Icons/items-icon.svg"}/>Catalog</Link></li>
                <li><Link exact={"true"} to={"/cart"}><NavMenuIcon src={"../../Icons/shopping-cart.svg"}/>Cart</Link></li>
                <li><Link exact={"true"} to={"/signin"}><NavMenuIcon src={"../../Icons/logo.svg"}/>Sign in</Link></li>
            </Ul>

        </Nav>
    );
}

export default Navigation;