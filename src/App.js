import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/main.scss";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Error from "./pages/error";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/user/:userId" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
