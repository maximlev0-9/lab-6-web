import React from "react";
import "./normalize.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";
import DataState from "./context/data/DataState";

// fetch data

export const DataContext = React.createContext()


function App() {
    return (
        <DataState>
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
        </DataState>
    );
}

export default App;
