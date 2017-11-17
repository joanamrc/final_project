import React, {Component} from 'react';
import { Grid, Row, Col, Thumbnail, Button, Media, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img4 from "../img/masnou.jpg"
import img5 from "../img/capufanda.jpg"
import img6 from "../img/bolsas.jpg"


const ShowProducts = () => (
	<div className="ShowProducts">
              <Grid>
				    <Row>
				      <Col xs={12} md={2}>
				        <div className="sticky-sidebar">
				            <Nav>
				              <NavItem href="#">Link 1</NavItem>
				              <NavItem href="#">Link 2</NavItem>
				              <NavItem href="#">Link 3</NavItem>
				              <NavItem href="#">Link 4</NavItem>
				            </Nav>
					    </div>
				      </Col>
				      <Col xs={12} md={10}>
				       	
						    <Row>
						      <Col xs={12} sm={6} md={4}>
						        <Thumbnail src={img4} alt="242x200">
						          <h3>Thumbnail label</h3>
						          <p>Description</p>
						          <p>
						            <Link to="/products/product"><Button bsStyle="primary">Button</Button></Link>
						          </p>
						        </Thumbnail>
						      </Col>
						      <Col xs={12} sm={6} md={4}>
						        <Thumbnail src={img5} alt="242x200">
						          <h3>Thumbnail label</h3>
						          <p>Description</p>
						          <p>
						            <Button bsStyle="primary">Button</Button>
						          </p>
						        </Thumbnail>
						      </Col>
						      <Col xs={12} sm={6} md={4}>
						        <Thumbnail src={img6} alt="242x200">
						          <h3>Thumbnail label</h3>
						          <p>Description</p>
						          <p>
						            <Button bsStyle="primary">Button</Button>
						          </p>
						        </Thumbnail>
						      </Col>
						    </Row>
						    <Row>
						      <Col xs={12} sm={6} md={4}>
						        <Thumbnail src={img4} alt="242x200">
						          <h3>Thumbnail label</h3>
						          <p>Description</p>
						          <p>
						            <Button bsStyle="primary">Button</Button>
						          </p>
						        </Thumbnail>
						      </Col>
						      <Col xs={12} sm={6} md={4}>
						        <Thumbnail src={img5} alt="242x200">
						          <h3>Thumbnail label</h3>
						          <p>Description</p>
						          <p>
						            <Button bsStyle="primary">Button</Button>
						          </p>
						        </Thumbnail>
						      </Col>
						      <Col xs={12} sm={6} md={4}>
						        <Thumbnail src={img6} alt="242x200">
						          <h3>Thumbnail label</h3>
						          <p>Description</p>
						          <p>
						            <Button bsStyle="primary">Button</Button>
						          </p>
						        </Thumbnail>
						      </Col>
						    </Row>
						  
				      </Col>
				    </Row>
				  </Grid>
				
			  	
			   </div>
)

export default ShowProducts

