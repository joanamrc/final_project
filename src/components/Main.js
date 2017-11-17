import React from 'react';
import { Carousel } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'
import img from "../img/slide1.jpg"
import img2 from "../img/slide2.jpg"
import img3 from "../img/slide3.jpg"

import Home from './Home'
import ShowProducts from './ShowProducts'
import SingleProduct from './SingleProduct'


const Main = () => (
  <div className="Main">
  	<Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/products' component={ShowProducts}/>
      <Route exact path='/products/product' component={SingleProduct}/>
    </Switch>
   </div>

)

export default Main

