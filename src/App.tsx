import GlobalStyle from "./styles/global";
import { ThemeProvider } from 'styled-components'
import light from "./styles/themes/light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />  
    </ThemeProvider>
  );
}

export default App;
