import styled from 'styled-components';
import {Link} from "react-router-dom";
import theme from "../../themes/main_theme";

export const CardItemDiv = styled.div`
position: relative;
  display: inline-block;
  width: 31%;
  min-width: 15rem;
  padding: 0.4%;
  margin: 0.4%;
  border: #555555 0.1rem solid;
  border-radius: 1rem;
`

export const CardItemIcon = styled.div`
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 14rem;
  background-clip: border-box;
  border-radius: 1rem;
  margin-bottom: 0.2rem;
`

export const CardItemLinkMoreInfo = styled(Link)`
  width: fit-content;
  align-self: center;
  align-items: center;
  padding: 0.3rem 1rem;
  border: 0.1rem ${theme.button_color_primary} solid;
  color: ${theme.button_color_primary};
  border-radius: 0.5rem;
  background-color: initial;
`;

export const AddToCartButton = styled.button`
  width: fit-content;
  align-self: center;
  align-items: center;
  padding: 0.3rem 1rem;
  border: 0.1rem ${theme.button_color_important} solid;
  color: ${theme.button_color_important};
  border-radius: 0.5rem;
  background-color: initial;
`

export const CardItemButtonsWrapper = styled.div`
  display:flex;
  width: 94%;
  margin: 0 3% 0.3rem;
  justify-content: space-between;
`