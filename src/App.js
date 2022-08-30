import Home from "./Home";
import Result from "./Result";
import Qus from "./Qus";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="result" element={<Result />} />
        <Route path="qus" element={<Qus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
