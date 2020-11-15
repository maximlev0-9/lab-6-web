import styled from 'styled-components';

export const DivWithBorders = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 1rem 3% 1rem 7%;
  width: 90%;
  margin: 1rem 0;
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
  border: 2px darkgray solid;
  border-radius: 1rem;
`

export const ButtonToBuyCar = styled.button`
  background-color: red;
  padding: 0.2rem 0.8rem;
  color: red;
  border: red 0.1rem solid;
  border-radius: 0.2rem;
  > a {
    color: white;
  }
`