import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import theme from './Components/Library/theme';
import Home from './Pages/Home';
import Feed from './Pages/Feed';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/feed" element={<Feed/>}/>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
