import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {userLogIn, setUser} = useContext(AuthContext);
    const handleLogIn = (e)=>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        console.log({email, password});
        userLogIn(email, password)
        .then((result) =>{
            const user = result.user;
            setUser(user);
        })
        .catch((error) =>{
            alert(error.code)
        })
    }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <form onSubmit={handleLogIn} className="card-body">
            <h1 className="text-center text-3xl font-semibold mb-10">Login your Account</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">Don't Have An Account ? <Link className="text-red-500 ml-1" to="/auth/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
