import React, {useState} from 'react';
import {
    CatalogWrapper,
    DivForTwoElements,
    FilterInput, SearchSelect,
    SearchWrapper,
    SortAndSearchWrapper, SortSelect,
    SortWrapper
} from "./Catalog.styles";
import CardItem from "../CardItem/CardItem";
import DataContext from '../../context/data/DataContext';


function Catalog(props) {

    const data = React.useContext(DataContext)
    const [viewedData, setViewedData] = useState(data);
    const [filterSelectValue, setFilterSelectValue] = useState("title");
    const [filterInputValue, setFilterInputValue] = useState("")


    const updateData = (currFilterInput = filterInputValue, currFilterSelect = filterSelectValue) => {
        if (currFilterInput.trim()) {
            setViewedData(data.filter(item => {
                let compareBy;
                switch (currFilterSelect) {
                    case "title":
                        compareBy = item.title;
                        break;
                    case "model":
                        compareBy = item.model;
                        break;
                    case "price":
                        compareBy = item.price.toString();
                        break;
                    default:
                        compareBy = item.title
                }
                return compareBy.startsWith(currFilterInput);
                }
            ))
        } else {
            setViewedData(data)
        }
    }
    const handleChangeSearchInput = (event) => {
        let currSearch = event.target.value;
        setFilterInputValue(currSearch)
        updateData(currSearch);
    }

    const handleChangeSearchSelect = (event) => {
        let newFilterBy = event.target.value;
        setFilterSelectValue(newFilterBy);
        updateData(filterInputValue, newFilterBy)
    }

    const handleChangeSortSelect = (event) => {
        console.log(viewedData)
        let sortBySth = event.target.value;
        console.log(sortBySth);
        let tempData = [...viewedData]
        tempData.sort((a, b) => {
            switch (sortBySth) {
                case "title":
                    return a.title > b.title ? 1 : -1;
                case "model":
                    return a.model > b.model ? 1 : -1;
                case "price":
                    return a.price - b.price;
                default:
                    return a.title > b.title ? 1 : -1;
            }
        })
        setViewedData(tempData)
        console.log(viewedData)
    };

    return (
        <div>
            <SortAndSearchWrapper>
                <SearchWrapper>
                    <DivForTwoElements>
                        Search
                        <FilterInput value={filterInputValue} name={"filterInputValue"} title={"filterInputValue"} placeholder={"Kek"}
                                     onChange={handleChangeSearchInput}/>
                    </DivForTwoElements>
                    <DivForTwoElements>
                        Search by:
                        <SearchSelect value={filterSelectValue} placeholder={"model"} name={"search_by"} id={"search_by"}
                                      onChange={handleChangeSearchSelect}>
                            <option value="title">Title</option>
                            <option value="model">Model</option>
                            <option value="price">Price</option>
                        </SearchSelect>
                    </DivForTwoElements>
                </SearchWrapper>

                <SortWrapper>
                    Sort by:
                    <SortSelect name={"sort_by"}
                                onChange={handleChangeSortSelect}
                    >
                        <option value="title">Title</option>
                        <option value="model">Model</option>
                        <option value="price">Price</option>
                    </SortSelect>
                </SortWrapper>
            </SortAndSearchWrapper>
            <CatalogWrapper>
                {viewedData.map(item => <CardItem key={item.id}
                                                  car={item}/>)}
            </CatalogWrapper>
        </div>
    );
}

export default Catalog;