import "./App.scss";
import { Navigate, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Hotels from "./Components/Hotels/Hotels";
import { store } from "./store";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/main-page"
          element={
            <Provider store={store}>
              <Main />
            </Provider>
          }
        />
        <Route path="*" element={<Navigate to="/main-page" replace />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/hotels"
          element={
            <Provider store={store}>
              {" "}
              <Hotels />
            </Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
