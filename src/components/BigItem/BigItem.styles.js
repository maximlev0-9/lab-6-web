import styled from 'styled-components';
import theme from "../../themes/main_theme";

export const DivWithBorders = styled.div`
  background-color: ${theme.background_color};
  display:flex;
  justify-content: space-between;
  padding: 2rem 4% 2rem 5%;
  width: 90%;
  margin: 0;
`

export const BigItemImage = styled.div`
  width: 70%;
  height: 30rem;
  background-image: url("${({src}) => src}");
  background-attachment: local;
  background-size: cover;
  background-clip: border-box;
  background-origin: border-box;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 2rem;
`

export const DivForDescription = styled.div`
  padding: 1rem;
  width: 26%;
  border: 2px ${theme.bigItem_border} solid;
  border-radius: 1rem;
`

export const ButtonToBuyCar = styled.button`
  background-color: ${theme.button_color_important};
  padding: 0.2rem 0.8rem;
  color: ${theme.button_color_important};
  border: ${theme.button_color_important} 0.1rem solid;
  border-radius: 0.2rem;
  > a {
    color: white;
  }
`