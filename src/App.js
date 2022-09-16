import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Checkout from './components/Checkout';
import Registration from './components/Register/Registration';
import Login from './components/Login/Login';
import Protected from './components/Protected';

function App() {
  return (
  <>
   {/* <Header /> */}
   <Routes>
     <Route path='/home' element={<Protected Component={Home}/>} />
     <Route path="/" element={<Login/>}/>
     <Route path="/register" element={<Registration/>}/>
     <Route path='/cards' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
     <Route path='/checkout' element={<Checkout/>} ></Route>
   </Routes>
  </>
  );
}

export default App;
