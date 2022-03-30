
import './App.css';
import NavBar from './Components/Header/NavBar';
import {Routes ,Route } from 'react-router-dom'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer/Footer';
import ViewProduct from './Components/Pages/ViewProduct';

function App() {
  return (
    <div className="App">
    <NavBar/>
      <Routes>
          <Route path="/pridhiMart/" exact element={<Home/>}></Route>
          <Route path="/about" exact element={<About/>}></Route>
          <Route path="/contact" exact element={<Contact/>}></Route>
          <Route path="/view/product" exact element={<ViewProduct/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
