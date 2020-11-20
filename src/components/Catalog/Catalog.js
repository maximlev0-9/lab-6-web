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
import {DataContext} from "../../App";

function Catalog(props) {

    const data = React.useContext(DataContext)
    const [viewedData, setViewedData] = useState(data);
    const [filterBy, setFilterBy] = useState("title");

    const [filter, setFilter] = useState("")


    const updateData = (currSearch, filterByTwo=filterBy) => {
        if (currSearch.trim()) {
            setViewedData(data.filter(item => {
                    let compareBy;
                    switch (filterByTwo) {
                        case "title":
                            compareBy = item.title;
                            break;
                        case "model":
                            compareBy = item.model;
                            break;
                        case "price":
                            compareBy = item.price;
                            break;
                        default:
                            compareBy = item.title
                    }
                    return compareBy.startsWith(currSearch);
                }
            ))
        } else {
            setViewedData(data)
        }
    }
    const handleChangeSearchInput = (event) => {
        let currSearch = event.target.value;
        setFilter(currSearch)

        updateData(currSearch);

    }


    const handleChangeSearchSelect = (event) => {
        let newFilterBy = event.target.value;
        setFilterBy(newFilterBy);
        updateData(filter, newFilterBy)
    }

    return (
        <div>
            <SortAndSearchWrapper>
                <SearchWrapper>
                    <DivForTwoElements>
                        Search
                        <FilterInput value={filter} name={"filter"} title={"filter"} placeholder={"Kek"}
                                     onChange={handleChangeSearchInput}/>
                    </DivForTwoElements>
                    <DivForTwoElements>
                        Search by:
                        <SearchSelect value={filterBy} placeholder={"model"} name={"search_by"} id={"search_by"}
                                      onChange={handleChangeSearchSelect}>
                            <option value="title">Title</option>
                            <option value="model">Model</option>
                            <option value="price">Price</option>
                        </SearchSelect>
                    </DivForTwoElements>
                </SearchWrapper>

                <SortWrapper>
                    Sort by:
                    <SortSelect name={"sort_by"}>
                        <option value="title">Title</option>
                        <option value="model">Model</option>
                        <option value="price">Price</option>
                    </SortSelect>
                </SortWrapper>


            </SortAndSearchWrapper>


            <CatalogWrapper>
                {viewedData.map(item => <CardItem title={item.title}
                                                  price={item.price}
                                                  model={item.model}
                                                  description={item.description}
                                                  imageSrc={item.imageSrc}/>)}

            </CatalogWrapper>
        </div>
    );
}

export default Catalog;