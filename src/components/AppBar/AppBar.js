import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './AppBar.styled';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Header>
        <Navigation />

        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </Header>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};

export default AppBar;
