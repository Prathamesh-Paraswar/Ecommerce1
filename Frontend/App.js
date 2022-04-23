import React, { useState } from "react";
import Item from "./Components/Item";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
          <Routes>
                <Route exact path="/" element={<Item/>}></Route>
                <Route exact path="/cart" element={<Cart />}></Route>
                <Route exact path="/contact" element={<Contact/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

