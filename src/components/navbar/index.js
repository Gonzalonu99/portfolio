import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavbarBrand, NavDropdown, NavLink} from 'react-bootstrap';
import './navbar.css';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
const NavBar = () => {
    const projects = [
        {id:'calculadora', title: 'Calculator', ref: '#projects/calculator'},
        {id:'clima', title:'Weather App', ref:'#projects/weather-app'},
        {id:'numen-vinos', title:'Numen Wines', ref:'#projects/numen-wines'}
    ]
  return (
    <div>
         <Navbar bg='myColor' variant='dark' sticky='top' expand='sm' collapseOnSelect>
            <NavbarBrand href='https://github.com/Gonzalonu99?tab=repositories'>Gonzalonu99</NavbarBrand>
            <NavbarToggle/>
            <NavbarCollapse>
                <Nav>
                <NavLink  href='#about'>About</NavLink>
                    <NavDropdown  href='#projects' title='Projects'>
                        {projects.map((project)=><NavDropdown.Item href={project.ref} key={project.id}>{project.title}</NavDropdown.Item>)}
                    </NavDropdown>
                <NavLink className='contact-button'    href='#contact'>Contact</NavLink>
                </Nav> 
            </NavbarCollapse>
            
        </Navbar>
    </div>
  )
}

export default NavBar