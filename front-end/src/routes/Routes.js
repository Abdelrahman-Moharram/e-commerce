import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Shops from '../pages/Shops'
import CategoryDetails from '../pages/CategoryDetails'
import ShopsDetails from '../pages/ShopDetails'
import Nav from "./Nav";
import Products from "../../src/components/product/Products" 

const Routes = ({handleToggler}) =>{
    return(
        <BrowserRouter>

        <Nav handleToggler={handleToggler} />

        <Switch>
            <Route path="/products/:name" render={props =><Products {...props} />} />
            <Route path="/shops/:name" component={ShopsDetails} />
            <Route path="/shops" component={Shops} />
            <Route path="/category/:name" component={CategoryDetails} />
            <Route path="/category" component={Category} />
            <Route exact path="/" component={Home} />
        </Switch>

    </BrowserRouter>
    )
}

export default Routes;