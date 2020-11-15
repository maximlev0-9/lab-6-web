import styled from 'styled-components'

export const Nav = styled.div`
width: 40%;
min-width: 20rem;
  align-items: center;
  display:flex;
  justify-content: flex-end;
`

export const Ul = styled.ul`
max-width: 24rem;
width: 90%;
  align-items: center;
  justify-content: space-between;
  display:flex;
`

export const NavMenuIcon = styled.div`
  margin-left: 1rem;
  margin-right: 0.3rem;
  
   background-image: url("${({src = "../../../"}) => src}");
   background-size: cover;
  width: 1rem;
  height: 1rem;
`