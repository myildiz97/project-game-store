import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Games from "../components/Games";
import Home from "../components/Home";
import About from "../components/About";
import GameDetails from "../components/GameDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="games" element={<Games />} />
          <Route path="games/:id" element={<GameDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;