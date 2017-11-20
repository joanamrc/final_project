import React, {Component} from 'react'
import { Grid, Row, Col, Thumbnail, Button, Media, Nav, NavItem } from 'react-bootstrap'
import Quantity from './qty.js'
import img4 from "../img/masnou.jpg"



const SingleProduct = () => (
	<div className="SingleProduct">
        <Grid>
        	<Row>
        		<Col xs={12} md={6}>
			       <div>
			       		<Thumbnail src={img4} alt="242x200">
				          
				        </Thumbnail>
			       </div> 
		     	</Col>
		     	<Col xs={12} md={6}>
		     		<h3>Product 1</h3>
		     		<Row>
		     			<Col xs={12} md={8}>
		     				<p>Me cago en tus muelas ese que llega por la gloria de mi madre condemor está la cosa muy malar te voy a borrar el cerito a peich papaar papaar va usté muy cargadoo.</p>	
		     			</Col>
		     			<Col xs={12} md={4}>
		     				<h4>XXX €</h4>	
		     			</Col>
		     		</Row>
		     		<Row>
		     			<Col xs={2} md={2}>
				   			<Quantity />	
		     			</Col>
		     			<Col xs={4} md={4}>
				   			<Button bsStyle="primary">Add to cart</Button>	
		     			</Col>
		     		</Row>
			          
		     	</Col>
        	</Row>
        </Grid>  	
	</div>
)

export default SingleProduct


