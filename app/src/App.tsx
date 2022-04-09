import React from 'react';
import MainPage from './components/pages/MainPage'
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import SampleHeader from './components/SampleHeader';

const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <SampleHeader />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
