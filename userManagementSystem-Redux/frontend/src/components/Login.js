
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../slices/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInputs] = useState({
    email: "",
    password: ""
  });

  const sendRequest = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email: input.email,
        password: input.password
      });
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
      throw err; 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => dispatch(login()))
      .then(() => navigate('/user'))
      .catch((err) => {
        toast.error(err?.response?.data?.message || err.message);
      });
  };
  

  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
       <div className='d-flex justify-content-center align-items-center  vh-100'>
    <div className='bg-white p-3 rounded w-25 border border-dark'>
       <form onSubmit={handleSubmit}>
           <div className='mb-3'>
              <label htmlFor=""><strong>Email</strong></label>
              <input onChange={handleChange}  name='email'  value={input.email}  type="text" placeholder='Enter Email' className='form-control rounded-0'/> 
           </div>
           <div className='mb-3'>
              <label htmlFor=""><strong>Pssword</strong></label>
              <input onChange={handleChange}   name='password'  value={input.password} type="password" placeholder='Enter Password' className='form-control rounded-0'/> 
           </div>
           <button className='btn btn-success w-100'><strong>Login</strong></button>
           <p></p>
           {/* <button className='btn btn-default border w-100 bg-light'><strong>Login</strong></button> */}
       </form>
   </div>
</div>
    </>
  );
};

export default Login;
