import styled from "styled-components";
import theme from '../../themes/main_theme';


export const CheckoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  padding-bottom: 1rem;
  // display: flex;
`

export const DivWithBorders = styled.div`
  border: 0.1rem black solid;
  border-radius: 1rem;
  padding: 1rem 3rem;
  margin: 0 auto 1rem;
  display: flex;
  flex-direction: column;
  // align-items: center;
`


export const LabelForInput = styled.label`
  display: block;

`



export const ResetButton = styled.button`
  width: 5rem;
  background-color: ${theme.button_color_important};
  border: 0.1rem #222222 solid;
  padding: 0.3rem 0;
  border-radius: 0.4rem;
  color: black;
  margin: 1rem;
`

export const SubmitButton = styled.button`
  margin: 1rem;
  width: 5rem;
  background-color: #28e;
  border: 0.1rem black solid;
  padding: 0.3rem 0;
  border-radius: 0.4rem;
  color: black;
`
export const DivForButtons = styled.div`
  display: flex;
  justify-content: space-between;
`