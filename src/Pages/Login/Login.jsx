import { Link,  useLocation, useNavigate } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
  const{singIn}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
  console.log('location in the login page 0',location);

  const handelLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email'); // Get the email field
    const password = form.get('password'); // Get the password field
    console.log(email); // Outputs the entered email
    console.log(password); // Outputs the entered password

    

    // user singin
    singIn(email,password)
    .then((result) => {
      console.log(result.user);
      // navigate
      navigate(location?.state?location.state:'/')
    })
    .catch((error) => {
      console.error(error);
    });
  };
  return (
    <div>
      <Navber></Navber>
      <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold">Login your account</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handelLogin} className="card-body ">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name="email"
           placeholder="email"
            className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" 
          name="password"
          placeholder="password" 
           className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>Don't Have An Account ?<Link to="/register"> <span className="text-blue-600">Register</span></Link></p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;