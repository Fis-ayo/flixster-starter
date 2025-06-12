import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Watched from "./pages/Watched/Watched";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="src/pages/Favorites/Favorites.jsx"
          element={<Favorites />}
        />
        <Route path="src/pages/Watched/Watched.jsx" element={<Watched />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
