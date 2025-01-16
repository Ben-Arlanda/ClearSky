import { BrowserRouter } from 'react-router-dom';
import Layout from './components/ui/layout';
import { ThemeProvider } from './theme-provider';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>Hello</Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
