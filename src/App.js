import React from "react";
import "./normalize.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";
import DataState from "./context/data/DataState";
import ItemPage from "./components/ItemPage/ItemPage";

function App() {
    return (
        <DataState>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route exact={true} path="/catalog" component={Catalog}/>
                    <Route exact={true} path="/catalog/item/:id" component={ItemPage}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/" component={Home}/>
                </Switch>
                <Footer/>
            </Router>
        </DataState>
    );
}

export default App;
