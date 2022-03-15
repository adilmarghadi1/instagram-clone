import img1 from '../../images/img1.png'
import {AiFillFacebook} from 'react-icons/ai'
import './login.css'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import Register from '../register/Register'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
function Login() {
  return (

    <div className="container11">
      <div className="box102">
        <img src={img1} alt="image" />
      </div>

      <div className='box2'>
          <div className='cadr'>

            <h1>Instagram</h1>
            
             

        

        <div className='inputs'>
            
          <input type="text" placeholder='Mobile Number Or Email' />
          <input type="password" placeholder='Password' />

        </div>

        <div className='btn2'>
            <a href="#">Login</a>
        </div>

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
