import React from 'react';
import {AllRightsReserved, BlackLineForFooter, FooterRoot, Icon, IconsSocialMedia} from "./Footer.styles";

function Footer(props) {
    return (
        <FooterRoot>
            <IconsSocialMedia>
                <Icon path={"../../Icons/svg/facebook.svg"} />
                <Icon path={"../../Icons/svg/instagram.svg"}/>
                <Icon path={"../../Icons/svg/linkedin.svg"} />
                <Icon path={"../../Icons/svg/snapchat.svg"}/>
                <Icon path={"../../Icons/svg/twitter.svg"} />
            </IconsSocialMedia>
            <BlackLineForFooter/>
            <AllRightsReserved>@All rights reserved (nou)</AllRightsReserved>
        </FooterRoot>
    );
}

export default Footer;
