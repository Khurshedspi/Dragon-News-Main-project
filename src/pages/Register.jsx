import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
const {createNewUser,setUser} = useContext(AuthContext)

    const handleSubmit= (e) =>{
        e.preventDefault();
// get form data
// const name = e.target.name.value;
// const photo = e.target.photo.value;
// const email = e.target.email.value;
// const password =e.target.password.value;

const form = new FormData(e.target);
const name = form.get("name");
const photo = form.get("photo");
const email = form.get("email");
const password = form.get("password");
console.log({name, photo, email,password});

createNewUser(email, password).then((result) =>{
    const user = result.user;
    console.log(user);
    setUser(user)
})
.catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.Message
    console.log('ERROR', errorCode, errorMessage);
})

    };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <form onSubmit={handleSubmit} className="card-body">
        <h1 className="text-center text-3xl font-semibold mb-10">
              Register your Account
            </h1>
          <div className="form-control">   
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">   
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
            name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
       Already Have An Account ? 
            <Link className="text-red-500 ml-1" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
