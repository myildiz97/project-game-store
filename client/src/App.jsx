import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Games from "./pages/Games";
import Home from "./pages/Home";
import About from "./pages/About";
import GameDetails from "./components/GameDetails";

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