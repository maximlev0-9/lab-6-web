import styled from 'styled-components'
import theme from "../../themes/main_theme";

export const ItemPageWrapper = styled.div`
  width: 100%;
  padding: 4rem 0;
  height: fit-content;
  background-color: ${theme.background_second};
`

export const ItemDetailsWrapper = styled.div`
  min-height: 24rem; 
  margin: 0 5rem;
  padding-left: 45%;
  padding-right: 10%;
  background-clip: border-box;
  border-radius: 1rem;
  background: url("../../Icons/${(props) => props.src}.jpg") white no-repeat left 5% top 50%;
  background-size: 40% 90%;
  background-clip: padding-box;
`

export const ItemDetailsTitle = styled.p`
  margin: 0 auto;
  padding: 1rem 0;
  font-size: 2rem; 
`

export const AddToCartButton = styled.button`
  font-weight: 600;
  background-color: ${theme.button_color_primary};
  color: white;
  border-radius: 0.3rem;
  border-color: ${theme.button_color_primary};
  width: 8rem;
  padding: 0.3rem 0; 
`

export const CarOptionsText = styled.p`
  line-height: 1.2rem;
  margin-bottom: 1rem;
`;