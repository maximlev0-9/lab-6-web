import styled from 'styled-components';

export const CardItemDiv = styled.div`
  display: inline-block;
  //align-self: center;
  //justify-content: space-between;
  width: 30%;
  padding: 0.5rem;
  margin: 0.5rem;
  border: #555555 0.1rem solid;
  border-radius: 1rem;
`

export const CardItemIcon = styled.img`
  // background-image: url("${({src}) => src}");
  background-clip: border-box;
  border-radius: 1rem;
`