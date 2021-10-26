import React from 'react';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';

const Header = () => {
    return (
        <header>
            <Navbar className="toLong">
                <NavbarBrand href="/"></NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <h1>Bananas</h1>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;