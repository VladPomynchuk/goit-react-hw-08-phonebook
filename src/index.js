import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { createTheme, ThemeProvider } from '@mui/material';
// import { dark } from '@mui/material/styles/createPalette';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
console.log(theme);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename={'/goit-react-hw-08-phonebook/'}>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
