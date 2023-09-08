import { BrowserRouter, Route,Routes } from "react-router-dom";
import './assets/App.css';
import Home from './pages/Home';
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contacto";

function App() {


  return (
    <div className="App">
       <BrowserRouter basename="/">
         <Routes>
           <Route exact path="/Farmpro" element={<Home/>} />
           <Route exact path="/About" element={<About/>} />
           <Route exact path="/Products" element={<Products/>} />
           <Route exact path="/Contact" element={<Contact/>} />
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
