import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';

import { AuthContextProvider } from './contexts/AuthContext';
import { ColorModeContext } from './contexts/ColorModeContext';

import { Router } from 'react-router-dom';
import { Routes } from './routes';
import { history } from './services/history';

function App() {
  return (
    <ColorModeContext>
      <GlobalStyle />
      <Router history={history}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </Router>
      <ToastContainer />
    </ColorModeContext>
  );
}

export default App;
