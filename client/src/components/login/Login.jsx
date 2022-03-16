import img1 from '../../images/img1.png'
import {AiFillFacebook} from 'react-icons/ai'
import './login.css'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import Register from '../register/Register'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = props => {
  

  let navigate = useNavigate();

  const [data, setData] = useState({    
    email: "",
    password: "",
  })

  const { email, password } = data

  const handleChange = (e)  => {
     setData({ ...data, [e.target.name]: e.target.value })
     
  }
  const handleSubmit = async (e) => {
    if (data.email === "" ||data.password=== "") {
      alert("Please Enter A Valid Input")
      }
    e.preventDefault()


    try {
      const res = await axios.post(
        "/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      )
      localStorage.setItem("token", res.data.token)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (

    <div className="container11">
      <div className="box102">
        <img src={img1} alt="image" />
      </div>

      <div className='box2'>
          <div className='cadr'>

            <h1>Instagram</h1>
            
             

      <form onSubmit={handleSubmit}>        
        <div className='inputs'>
            
          <input  type="email"
            name="email"
            value={email}
            onChange={handleChange} placeholder='Mobile Number Or Email' required/>
          <input  type="password"
            name="password"
            value={password}
            onChange={handleChange} placeholder='Password' required/>

        </div>

        <div className='btn2'>
            <button>Login</button>
        </div>
      </form>
        <div className="or">
          <div className='line1'></div>
          <h3>OR</h3>
          <div className='line1'></div>
        </div>
        <div className='btn11'>
              <a href="#"><AiFillFacebook className='btn33'/>Log in with Facebook</a>
        </div>
         

           
    </div>
 
    <p className='card2'>Don't have an account  <Link to='/register'>   Sign Up</Link></p>
          <p className='last'>Get the app.</p>
          
          <div className='box3'>
            <img src={img2} alt="image1" />
            <img src={img3} alt="image2" />

          </div>
        </div>
    </div>
  );
}

export default Login;
