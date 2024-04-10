import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { theme } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';


const App = () => {

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/search/location/:location' element={<Home />} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
    </>
)
}

export default App