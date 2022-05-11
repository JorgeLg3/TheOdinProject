import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ErrorPage from "./components/ErrorPage";
import ItemPage from "./components/ItemPage";
import items from "./items";

const App = () => {
  return (
    <HashRouter basename="/">
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/shop"> Shop </Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop items={items}/>} />
        <Route path="/shop/:id" element={<ItemPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;