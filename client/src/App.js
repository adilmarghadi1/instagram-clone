import logo from './logo.svg';
import './App.css';
import {AiFillFacebook} from 'react-icons/ai'
import Register from './components/register/Register';
import Login from './components/login/Login'
import Home from './components/home/Home';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
   <div>
      <Router>
           <Routes>
           <Route path='/' element={<Home />}></Route>
             <Route path='/register' element={<Register />}></Route>
             <Route path='/login' element={<Login />}></Route>
           </Routes>
           </Router>
    </div>
  );
}

export default App;
