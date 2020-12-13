import styled from "styled-components";
import theme from "../../themes/main_theme";

export const ContainerForCardItems = styled.div`
background-color: white;
  margin: 0 auto;
  justify-content: space-between;
  alignment: center ;
  align-items: center;
  align-content: center;
  align-self: center;
  `

export const OneMoreContainer = styled.div`
  margin: auto;
  width: 90%;
`

export const ViewMoreButton = styled.button`
  margin: 1rem 46%;
  width: 6rem;
  padding: 0.3rem 0;
  background: ${theme.button_color_primary};
  border-color: ${theme.button_color_primary};
  border-radius: 0.3rem;
  color: white;
  
`

