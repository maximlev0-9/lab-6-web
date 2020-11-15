import React from "react";
import "./normalize.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/home" component={Home}>
                </Route>
                {/*<Route path="/catalog" component={}/>*/}
                {/*<Route path="/cart" component={}/>*/}
                <Route path="/" component={Home}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
