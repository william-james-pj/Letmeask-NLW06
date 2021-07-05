import GlobalStyle from './styles/global';

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
    </ColorModeContext>
  );
}

export default App;
