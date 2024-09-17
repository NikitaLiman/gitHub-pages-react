import './app.scss';
import './reset.css';
import React from 'react';
import Header from './Components/header';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import Cart from './pages/cart';
import More from './pages/More';
import { Routes, Route } from 'react-router-dom';
import Fav from './pages/Fav';
import Fotter from './Components/fotter';
export const searchContext = React.createContext();

function App() {
  const [searchValue, setsearchValue] = React.useState('');
  return (
    <searchContext.Provider value={{ searchValue, setsearchValue }}>
      <div className="Wrapper">
        <div className="header">
          <Header />
        </div>
        <div className="BigBox">
          <Routes>
            <Route path="Fav" element={<Fav />} />
            <Route path="" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="More" element={<More />} />
          </Routes>
        </div>
        <div className="Footer">
          <Fotter />
        </div>
      </div>
    </searchContext.Provider>
  );
}

export default App;
