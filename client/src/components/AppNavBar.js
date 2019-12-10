import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
  } from 'reactstrap';


  class AppNavBar extends Component {

    render() {

        return(
            <div>
                <Navbar color='dark ' dark expand = "sm" className="mb-5">
                    <Nav className="ml-auto" navbar>
                        <NavItem className="text-secondary mx">
                            Test
                        </NavItem>
                    </Nav>



                </Navbar>


            </div>



        );

    }


  }

export default AppNavBar;