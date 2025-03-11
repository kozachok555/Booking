import "./App.scss";
import { Navigate, Routes, Route } from "react-router";
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Hotels from "./Components/Hotels/Hotels";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/main-page" element={<Main />} />
        <Route path="*" element={<Navigate to="/main-page" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </div>
  );
}

export default App;
