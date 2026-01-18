import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/tools" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
