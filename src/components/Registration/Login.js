import React from 'react';
import './Login.css'
import IMG from '../imgs/section1.jpg'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
   
            <div className='body' >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    
            




            <form className='bg container mt-5'>
            <br></br>
            <br></br>
                <h4>Login</h4>
                <br></br>
                
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                   
                    <button  style={{marginTop:'20px',width:'289px'}} type="button" class="btn btn-success"> 
               <Link style={{color:'whitesmoke',textDecoration:'none'}} to='/'> Login </Link>
               
               </button>
                
                    <p className='text-center'>Or</p>
                   

                    <button  style={{marginTop:'3px',width:'289px'}} type="button" class="btn btn-success"> 
               <Link style={{color:'whitesmoke',textDecoration:'none'}} to='/'> <FcGoogle></FcGoogle> Google </Link>
               
               </button>
          </form>
    </div>
    );
};

export default Login;