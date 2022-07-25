import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: #fff;
  &:hover {
    color: #42a5f5;
  }
  &.active {
    color: #42a5f5;
    &:hover {
      color: #fff;
    }
  }
`;
