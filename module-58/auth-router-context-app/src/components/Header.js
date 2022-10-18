import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log('context', user);

  const handleSignout = () => {
    logOut()
    .then( () => {

    })
    .catch(error => {
      console.error('error', error);
    })
  }
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
        {user?.email && <span> Welcome,{user.email}</span>}
        {
          user?.email ?
          <button onClick={handleSignout} className="btn btn-sm">Sign out</button>
          :
          <Link to='/login'>
            <button className="btn btn-sm">Log In</button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Header;
