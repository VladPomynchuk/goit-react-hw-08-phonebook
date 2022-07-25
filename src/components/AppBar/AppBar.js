import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';
import { AppBar as StyledAppBar, Toolbar } from '@mui/material';
import { StyledNavLink } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </Toolbar>
      </StyledAppBar>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};

export default AppBar;
