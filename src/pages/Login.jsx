import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from 'react'
import { auth } from "../config/firebase/firebaseconfig";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const email = useRef();
    const password = useRef();

    const loginUser = (event) => {
        event.preventDefault();
        console.log(email.current.value);
        console.log(password.current.value);
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate('/')
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  email.current.value = ''
  password.current.value = ''
  }
  const navigate = useNavigate()
  return (

    <>
          <div className='flex items-center justify-center h-[100vh] bg-gray-100'>
        <div className='text-center'>
          <h1 className='mt-5 text-3xl'>Login</h1>
          <form onSubmit={loginUser}>
            <input
              type="email"
              placeholder="Type here"
              className="mt-5 input input-bordered w-[20rem]"
              ref={email}
            />
            <br />
            <input
              type="password"
              placeholder="Type here"
              className="mt-5 input input-bordered w-[20rem]"
              ref={password}
            />
            <br />
            <button className="btn btn-info mt-5">Login</button>
          </form>
          <h3 className='mt-3'>
          <Link to="/Register" className="text-blue-500 hover:underline">Don't have an account?</Link>
        </h3>
        </div> 
      </div>

    </>

  )
}

export default Login