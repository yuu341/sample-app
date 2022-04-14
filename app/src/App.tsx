import React, { useState } from 'react';
import MainPage from './components/pages/MainPage'
import './App.css';

import { Button, createTheme, Drawer, List, ThemeProvider } from '@mui/material';
import Header from 'components/Header';
import SideNavigation from 'components/SideNavigation';
const theme = createTheme();

function App() {
  const [ open , setOpen ] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      
      {/* <Drawer variant="permanent" open={open}>
        <List component="nav">
          <SideNavigation />
        </List>
      </Drawer> */}
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
