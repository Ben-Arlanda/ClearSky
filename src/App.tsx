import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/ui/layout';
import { ThemeProvider } from './theme-provider';
import WeatherDashboard from './pages/WeatherDashboard';
import CityPage from './pages/CityPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard />} />
            <Route path="/city/:cityName" element={<CityPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
