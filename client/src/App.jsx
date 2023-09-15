import { Routes, Route } from "react-router-dom";
import Header from "./Components/Containers/Header"
import Home from "./Components/Pages/Home"
import Teas from "./Components/Pages/Teas"
import About from "./Components/Pages/About"
import Login from "./Components/Pages/Login"
import Register from "./Components/Pages/Register"

function App() {

  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="the" element={<Teas />} />
        <Route path="notre-histoire" element={<About />} />

        <Route path="connexion" element={<Login />} />
        <Route path="inscription" element={<Register />} />        
      </Routes>

    </>
  );
}

export default App;
