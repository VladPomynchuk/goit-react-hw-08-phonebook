import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from 'utils/PrivateRoute';
import PublicRoute from 'utils/PublicRoute';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';
import { Toaster } from 'react-hot-toast';
import GlobalStyle from './components/GlobalStyle';
import AppBar from './components/AppBar';
import LoginView from 'views/LoginView';
import RegisterView from 'views/RegisterView';
import ContactsView from 'views/ContactsView';
import Container from 'components/Container';
import HomeView from 'views/HomeView';

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    ''
  ) : (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
}
