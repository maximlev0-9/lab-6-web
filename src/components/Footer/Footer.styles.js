import styled from "styled-components";
import theme from "../../themes/main_theme";

export const FooterRoot = styled.div`
  background-color: ${theme.background_color};
  // position: absolute;
  bottom:0;
  padding-bottom:1rem;
  clear: both;
  width: 100%;
`;

export const BlackLineForFooter = styled.div`
  margin: 0 1rem;
  height: 0.1rem;
  background-color: black;
`;

export const IconsSocialMedia = styled.div`
  display: flex;
  // width: 100%;
  justify-content: center;
  margin: 0.2rem;
`;

export const Icon = styled.div`
  margin: 0.2rem;
  width: 1.5rem;
  height: 1.5rem;
  background: url("${(props) => props.path}") center;
  background-size: cover;
`;

export const AllRightsReserved = styled.div`
  width: 12rem;
  margin: 0 0.5rem 1rem auto;
`;
