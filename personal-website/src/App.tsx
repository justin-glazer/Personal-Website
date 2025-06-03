import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Projects from './Projects';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3372d6',
        light: '#22c0f0', 
        dark: '#0c0878',
      }
      
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
    }
  })
  
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/Projects" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
