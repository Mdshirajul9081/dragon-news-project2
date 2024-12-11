import React, { useContext } from 'react';
import Navber from '../Shared/Navber/Navber';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const {createUser}=useContext(AuthContext)
  const handelRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
  
    const name = form.get('name'); // Get the name field
    const photoURL = form.get('Photo URL'); // Get the Photo URL field
    const email = form.get('email'); // Get the email field
    const password = form.get('password'); // Get the password field
  
    console.log(name);
    console.log(photoURL);
    console.log(email);
    console.log(password);
  
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
 
  return (
    <div>
      <Navber></Navber>
      
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Register your account</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handelRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"
          name='name'
           placeholder="name"
            className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text"
          name='Photo URL'
           placeholder="Url Link"
            className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name='email'
           placeholder="email"
            className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"
           name='password'
           placeholder="password"
           className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">register</button>
        </div>
      </form>
      <p>Already have an account? <Link to="/login" >please <span className='text-blue-500'>login</span></Link> </p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Register;