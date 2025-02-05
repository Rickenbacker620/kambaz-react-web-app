import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-4">
      <h1 className="mb-4">Signup</h1>

      <form>
        <input 
          placeholder="username" 
          className="form-control mb-2 wd-username"
        />
        
        <input 
          placeholder="password" 
          type="password" 
          className="form-control mb-2 wd-password"
        />
        
        <input
          placeholder="verify password"
          type="password"
          className="form-control mb-2 wd-password-verify"
        />

        <Link 
          to="/Kambaz/Account/Profile" 
          className="btn btn-primary w-100 mb-2"
        >
          Signup
        </Link>

        <Link 
          to="/Kambaz/Account/Signin"
          className="d-block text-center"
        >
          Signin
        </Link>
      </form>
    </div>
  );
}