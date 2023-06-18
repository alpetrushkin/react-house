import React from 'react';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import Header from "./components/header/Header";

function App() {
  const [searchTitle, setSearchTitle] = React.useState('');

  return (
    <div className="wrapper">
      <Header searchTitle={searchTitle}
              setSearchTitle={setSearchTitle}
      />
      <Routes>
        <Route path="/" element={<Home searchTitle={searchTitle}/>}
        />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
