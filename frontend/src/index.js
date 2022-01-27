import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Sign from "./routes/Sign";
import Home from "./routes/Home";
import Info from "./routes/Info";
import Register from "./routes/Register";
import Service1 from "./routes/Service1";
import Service2 from "./routes/Service2";
import Service3 from "./routes/Service3";
import HowItWorks from "./routes/HowItWorks";
import Accounts from './routes/Accounts';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Sign" element={<Sign />} />
        <Route path="Home" element={ <Home />} />
        <Route path="HowItWorks" element={ <HowItWorks />} />
        <Route path="Accounts" element={ <Accounts />} />
        <Route path="Register" element={<Register />} />
        <Route path="Service1" element={<Service1 />} />
        <Route path="Service2" element={<Service2 />} />
        <Route path="Service3" element={<Service3 />} />
        <Route path="Info/:id" element={<Info />} />
      </Route>
    </Routes>
  </BrowserRouter>
  , document.getElementById('root'));

