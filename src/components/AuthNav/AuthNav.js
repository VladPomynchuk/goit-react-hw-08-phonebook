import { StyledNavLink } from 'components/AppBar/AppBar.styled';

const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/login">Login</StyledNavLink>
      <StyledNavLink style={{ marginLeft: 20 }} to="/register">
        Register
      </StyledNavLink>
    </div>
  );
};

export default AuthNav;
