// src/Navbar.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo-Yacht.png';

// Contenedor principal del Navbar
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center; // Centrar horizontalmente
  align-items: center;
  background-color: #182432;
  padding: 10px 20px;
`;

// Contenedor para los elementos del Navbar
const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; // Usar el 100% del ancho del Navbar
  max-width: 1200px; // Limitar el ancho máximo
`;

// Estilo para el Logo
const Logo = styled.img`
  height: 70px; /* Ajusta el tamaño según tu logo */
`;

// Lista de navegación
const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  font-family: 'Roboto', sans-serif;
`;

// Elemento de la lista
const NavItem = styled.li`
  margin: 0;
`;

// Enlace de navegación
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavContent>
        <Logo src={logo} alt="Logo" />
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/CrearUsuario">Crear Usuario</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/IniciarSesion">Iniciar sesion</NavLink>
          </NavItem>
        </NavList>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;