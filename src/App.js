import React from "react";
import "./normalize.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";

// fetch data
// create and use context

export const DataContext = React.createContext()

let data = [
    {
        id: 1,
        title: "Ferrari",
        imageSrc: "ferrari-sf90",
        price: 10000000,
        description: "Super-cool modern fast and powerful sexy new Ferrari with which all girls would be yours\n",
        model: "SF90 Stradale"
    },
    {
        id: 2,
        title: "Ferrari",
        imageSrc: "ferrari-812",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "812"
    },
    {
        id: 3,
        imageSrc: "tesla-cybertruck",
        title: "Tesla",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "Cybertruck"
    },
    {
        id: 4,
        imageSrc: "tesla-x",
        title: "Tesla",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "X"
    }, {
        id: 6,
        imageSrc: "tesla-s",
        title: "Tesla",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "S"
    },
    {
        id: 8,
        imageSrc: "porshe-cayenne",
        title: "Porshe",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "Cayenne"
    },
    {
        id: 5,
        imageSrc: "ferrari-f8",
        title: "Ferrari",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "F8"
    },
    {
        id: 7,
        imageSrc: "tesla-y",
        title: "Tesla",
        price: 254000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi nobis quod?\n",
        model: "Y"
    },
]

function App() {
    return (
        <DataContext.Provider value={data}>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/catalog" component={Catalog}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/" component={Home}/>
                </Switch>
                <Footer/>
            </Router>
        </DataContext.Provider>
    );
}

export default App;
