import styled from 'styled-components';

export const DivWithBorders = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 1rem 3% 1rem 7%;
  //border-bottom: 0.3rem black dotted;
  //border-top: 0.3rem black dotted;
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

export const Price = styled.p`
  margin: 1rem;
  font-size: 0.5rem;
  color: darkgray;
`

export const ButtonToBuyCar = styled.button`
  background-color: red;
  //position: absolute;
  //right: 2rem;
  //bottom: 1rem;
  //margin: 1rem;
  padding: 0.2rem 0.8rem;
  color: red;
  border: red 0.1rem solid;
  border-radius: 0.2rem;
  > a {
    color: white;
  }
  
`