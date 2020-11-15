import React from 'react';
import Navigation from "../Navigation/Navigation";
import {HeaderDiv, Logo} from "./Header.styles";

function Header(props) {
    return (
        <HeaderDiv>
            <Logo/>
            <Navigation/>
        </HeaderDiv>
    );
}

export default Header;