import img1 from '../../images/img1.png'
import {AiFillFacebook} from 'react-icons/ai'
import './register.css'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import Login from '../login/Login'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'

import React, {useState} from 'react'
import axios from 'axios'
function Register(props) {
  
  let navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const {name, email, password} = data

  const handleChange = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post("/auth/register", {
        name, email, password
      },

      {headers : {"Content-Type" : "application/json",'Access-Control-Allow-Origin': '*' }}
      
      )

      navigate("/login")
    }

    catch(err) {
      console.log(err)
    }
  }


  return (

    <div className="container10">
      <div className="box1010">
        <img src={img1} alt="image" />
      </div>

      <div className='box20'>
          <div className='cadr'>

            <h1>Instagram</h1>
            <p>Sign up to see photos and videos<br/> from your friends.</p>
            <div className='btn1'>
              <a href="#"><AiFillFacebook className='btn3'/>Log in with Facebook</a>
        </div>

        <div className="or">
          <div className='line1'></div>
          <h3>OR</h3>
          <div className='line1'></div>
        </div>

        <form onSubmit={handleSubmit}>

        <div className='inputs'>
            
          {/* <input type="text" placeholder='Mobile Number Or Email' /> */}
          <input type="text" value={name} name="name" onChange={handleChange} placeholder='Full Name' />
          <input type="email" name="email" value={email} onChange={handleChange}  placeholder='Username' />
          <input type="password" name="password"
            value={password}
            onChange={handleChange} placeholder='Password' />

        </div>

        <div className='btn22'>
            <button>Sign Up</button>
        </div>
      </form>
        <p className='text1'>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
        </div>
         

           <p className='card2'>Have an account?  <Link to='/login'>   Log in</Link></p>


          <p className='last'>Get the app.</p>
          
          <div className='box3'>
            <img src={img2} alt="image1" />
            <img src={img3} alt="image2" />

          </div>
        </div>
         
    </div>
  );
}

export default Register;
