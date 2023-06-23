import React from 'react';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import Header from "./components/header/Header";

export const SearchContext = React.createContext('');

function App() {
  const [searchTitle, setSearchTitle] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchTitle, setSearchTitle }}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}
          />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
