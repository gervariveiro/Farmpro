import React, { useState } from 'react';
import FarmLogo from '../assets/FarmLogo.JPG';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


export default function MenuNav() {

  const [showNavColor, setShowNavColor] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' className='navbar'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/Farmpro' className='navBrand'>
            <img src={FarmLogo} alt='' width='90' height='90' className='ms-5'/>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            className='text-light'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0 navItems'>
              <MDBNavbarItem className='active box-1'>
                <Link to='/' className='btn btn-one d-flex flex-column justify-content-center navLink'>
                    Home
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem >
                  <Link to='/About' className='btn btn-one d-flex flex-column justify-content-center navLink'>
                    About
                  </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to='/Products' className='btn btn-one d-flex flex-column justify-content-center align-items-center navLink'>
                    Products
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to='/Contact' className='btn btn-one d-flex flex-column justify-content-center navLink align-items-center'>
                    Contact
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    
    </>
  );
}