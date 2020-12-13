import styled from "styled-components";
import React from "react";
import theme from "../../themes/main_theme";

export const FooterRoot = styled.div`
  padding: 1rem;
  background-color: ${theme.background_color};
`

export const BlackLineForFooter = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: black;
`

export const IconsSocialMedia = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0.2rem;
`

export const Icon = styled.div`
  margin: 0.2rem;
  width: 1.5rem;
  height: 1.5rem;
  background: url("${(props) => props.path}")  center;
  background-size: cover;
`

export const AllRightsReserved = styled.div`
  width: 12rem;
  margin: 0 0 0 auto;
`