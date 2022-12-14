import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './component/Home/Home';
import Listing from './component/Listing/listingApi'
import Details from './component/details/restDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component = {Home}/>
            <Route path = '/listing/:mealId' component = {Listing}/>
            <Route path = '/details/' component = {Details}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;