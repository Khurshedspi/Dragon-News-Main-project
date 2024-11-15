import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";
const SocialLogin = () => {
  const {signInWithGooglePopUp, signInWithGithub} = useContext(AuthContext)
  const handleGoogleSignIn = () =>{
    signInWithGooglePopUp()
    .then((result)=>{
      console.log(result.user);
    }).catch((error)=>{
      console.log('eRROR', error.message);
    })
  }
  const handleSignInWithGitHub = ()=>{
    signInWithGithub()
    .then((result) =>{
      console.log(result.user);
    }).catch((error) =>{
      console.log('ERROR:', error.message);
    })
  }
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button onClick={handleGoogleSignIn} className="btn ">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button onClick={handleSignInWithGitHub} className="btn ">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
