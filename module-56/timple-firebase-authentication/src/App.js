import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import app from './firebase/firebase.init';
import { useState } from 'react';
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
  }
  const handleSignOut = () => {
    signOut(auth)
    .then(() =>{
      setUser({})
    })
  }
  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleSignOut}>Sign Out</button>
        :
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
      }
     { 
          user.uid && <div>
              <h2>Name : {user.displayName}</h2>
              <p>Email : {user.email}</p>
              <img src={user.photoURL} alt=''/>
            </div>
    }
    </div>
  );
}

export default App;
