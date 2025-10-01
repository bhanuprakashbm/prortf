import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.isScrolled ? 'rgba(10, 12, 15, 0.9)' : 'transparent'};
  transition: background 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 3rem;
  padding: 0.5rem 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0.5rem 1rem;
  }
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  text-transform: capitalize;
  letter-spacing: 1px;

  &:hover {
    color: #FF6B48;
  }
`;

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Header isScrolled={isScrolled}>
      <NavContainer>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
      </NavContainer>
    </Header>
  );
}

export default Navbar; 