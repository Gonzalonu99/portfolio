import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, NavbarBrand, NavDropdown, NavLink} from 'react-bootstrap';
import './navbar.css';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Icon from './Icon'
const NavBar = () => {
    const projects = [
        {id:'calculadora', title: 'Calculator', refId: '#projectsCalculator'},
        {id:'clima', title:'Weather App', refId:'#projectsWeather-app'},
        {id:'numen-vinos', title:'Numen Wines', refId:'#projectsNumen-wines'}
    ]
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
                    <NavDropdown  href='#projects' title='Projects'>
                        {projects.map((project)=><NavDropdown.Item href={project.refId} key={project.id}>{project.title}</NavDropdown.Item>)}
                    </NavDropdown>
                <NavLink className='contact-button' href='#contact'>Contact</NavLink>
                </Nav> 
            </NavbarCollapse>
        </Navbar>
    </div>
  )
}

export default NavBar