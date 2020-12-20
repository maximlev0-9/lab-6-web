import styled from "styled-components";
import theme from '../../themes/main_theme';

export const RemoveButton = styled.button`
  background: url("../../Icons/svg/red_cross.svg") center no-repeat;
  background-size: cover;
  position: absolute;
  right: 0.7rem;
  top: 0.7rem;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
`;

export const CartTitleText = styled.p`
  font-size: 2.5rem;
  margin: 0 auto;
  width: fit-content;
`;

export const BuyButton = styled.button`
  margin: 1rem auto;
  padding: 0.3rem;
  width: 6rem;
  color: ${theme.background_second};
  background-color: ${theme.button_color_primary};
  border-radius: 0.4rem;
`;

export const BuyButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  
`