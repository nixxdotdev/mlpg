import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<LoginPage />} />
      <Route path="/tools" element={<MainPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
