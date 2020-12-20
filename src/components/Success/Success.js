import React from 'react';
import {SuccessWrapper, LinkButton} from './Success.styles'


function Success(props) {
    return (
        <div>
            <SuccessWrapper>

            <p>Your order has been successfully approved!</p>
            <LinkButton exact to={'/home'}>Go to home page</LinkButton>
            <LinkButton exact to={'/catalog'}>Go to catalog</LinkButton>

            </SuccessWrapper>
        </div>
    );
}

export default Success;