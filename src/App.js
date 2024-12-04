import { Outlet, Route, Routes } from 'react-router-dom';
import './css/App.css'
import './css/normalize.css'
import './css/all.min.css'
import HomePage from './HomePage';
import NavBar from './NavBar';
import Footer from './Footer';
import Product from './Product'
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Cart from './Cart';
//import 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      <Outlet/>
    </div>
  );
}

export default App;
