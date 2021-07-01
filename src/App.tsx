import { ColorModeContext } from './contexts/ColorModeContext';
import Layout from './layout';

function App() {
  return (
    <ColorModeContext>
      <Layout />
    </ColorModeContext>
  );
}

export default App;
