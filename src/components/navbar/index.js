import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavbarBrand, NavLink} from 'react-bootstrap';
import './navbar.css';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Icon from './Icon'
const NavBar = () => {
  return (
    <div>
         <Navbar bg='myColor' variant='light' sticky='top' expand='sm' collapseOnSelect>
            <NavbarBrand href='https://github.com/Gonzalonu99?tab=repositories'>
            <Icon/>
            Gonzalonu99</NavbarBrand>
            <NavbarToggle/>
            <NavbarCollapse>
                <Nav>
                <NavLink  href='#about'>About</NavLink>
                <NavLink href='#skills'>Skills</NavLink>
                <NavLink href='#projects'>Projects</NavLink>
                <NavLink className='contact-button' href='#contact'>Contact</NavLink>
                </Nav> 
            </NavbarCollapse>
        </Navbar>
    </div>
  )
}

export default NavBar