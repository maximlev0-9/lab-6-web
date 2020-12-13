import React from "react";
import "./normalize.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ItemPage from "./components/ItemPage/ItemPage";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";

import Cart from "./components/Cart/Cart";

function App() {
    return (
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
    );
}

export default App;

