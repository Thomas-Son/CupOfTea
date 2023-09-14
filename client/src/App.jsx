import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Home from "./Components/Home"
import Teas from "./Components/Teas"

function App() {
  
  return (
    <>
    
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/v1/tea/all" element={<Teas />} />
      </Routes>

    </>
  );
}

export default App;
