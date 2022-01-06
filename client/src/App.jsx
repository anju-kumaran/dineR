import React from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import UpdatePage from './routes/UpdatePage';

const App = () => {
  return <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
          <Route path="/restaurants/:id/update" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  </div>
};

export default App;