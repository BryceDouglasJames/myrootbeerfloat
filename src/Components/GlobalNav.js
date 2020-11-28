import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Button} from 'react-bootstrap'
export default class GlobalNav extends Component{
    render(){  
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Float Time!</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                     
                    <Nav className="mr-auto" className="m-auto p-auto">
                        <Nav.Link href="#stores">Stores</Nav.Link>
                        <Nav.Link href="#Others">Recipes</Nav.Link>
                        <Nav.Link href="#Others">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button color = "info">Root Beers: {this.props.amount}</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}