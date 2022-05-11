import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ErrorPage from "./components/ErrorPage";

const RouteSwitch = () => {
  return (
    <HashRouter basename="/">
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/shop"> Shop </Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;