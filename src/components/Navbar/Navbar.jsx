import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: rgba(192, 192, 192, 0.2);
  backdrop-filter: blur(50px);
  padding: 15px 20px;
  width: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 600px) {
    padding: 20px;
    bottom: 0;
    top: auto;
    box-shadow: none; 
  }
`;

const NavbarDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    margin-right: 30px;
  }
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  margin-right: 20px;

  @media only screen and (max-width: 600px) {
    margin: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(20% - 20px);
    
    span.text {
      display: none;
    }
    
    span.icon {
      display: inline;
    }
  }
  
  @media only screen and (min-width: 601px) {
    span.text {
      display: inline;
    }
    
    span.icon {
      display: none;
    }
  }
`;

const Icon = styled.span`
  font-size: 1.5rem;
  margin-right: 10px;
`;

function Navbar() {
  const navItems = [
    { to: '/', text: 'Home', icon: '🏠' },
    { to: '/products', text: 'Products', icon: '📦' },
    { to: '/shop', text: 'Shop', icon: '🛒' },
    { to: '/about', text: 'About', icon: 'ℹ️' },
    { to: '/contact', text: 'Contact', icon: '✉️' },
  ];

  return (
    <NavbarContainer>
      <NavbarDiv>
        <NavItems>
          {navItems.map(({ to, text, icon }) => (
            <NavLink key={to} to={to}>
              <Icon>
                <span className="text">{text}</span>
                <span className="icon">{icon}</span>
              </Icon>
            </NavLink>
          ))}
        </NavItems>
      </NavbarDiv>
    </NavbarContainer>
  );
}

export default Navbar;
