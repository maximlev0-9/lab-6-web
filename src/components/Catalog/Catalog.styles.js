import styled from "styled-components";
import theme from "../../themes/main_theme";


export const DivForTwoElements = styled.div`
  display: flex;
  
`

export const CatalogWrapper = styled.div`
  background-color: ${theme.background_second};
  padding: 0 10%;
`

export const FilterInput = styled.input`
  border: 1px #888 solid;
  border-radius: 0.3rem;
  padding: 0.2rem;
  margin: 0 1rem;
`

export const SortAndSearchWrapper = styled.div`
background-color: ${theme.background_color};
  align-items: center;
  justify-content: space-between;
  display:flex;
  padding: 0.5rem 4rem 0.5rem 4rem;
`
export const SearchWrapper = styled.div`
  width: 30%;
  display:flex;
  justify-content: space-between;
`

export const SortWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  
`

export const SearchSelect = styled.select`
  border: 0.1rem #888 solid;
  border-radius: 0.2rem;
  margin: 0 0.5rem;
`

export const SortSelect = styled.select`
  border: 0.1rem #888 solid;
  border-radius: 0.2rem;
  margin: 0 0.5rem;
`
