import styled from 'styled-components';

export const CardItemDiv = styled.div`
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

export const CardItemButtonMoreInfo = styled.button`
  margin: 0.4rem 0 0;
  align-self: center;
  align-items: center;
  padding: 0.3rem 1rem;
  border: 0.1rem orange solid;
  color: orange;
  border-radius: 0.5rem;
  background-color: initial;
`;