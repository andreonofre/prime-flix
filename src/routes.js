import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Filme from "./Pages/Filme/Filme";
import Header from "./components/Header/Header";
import React from 'react'



function RoutesApp () {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/filme/:id" element={ <Filme />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;