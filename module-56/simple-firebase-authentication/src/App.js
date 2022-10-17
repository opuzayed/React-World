import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .error(error => {
        console.log('error : ', error);
    })
  }
    const handleSignOut = () =>{
      signOut(auth)
      .then(() =>{
        setUser({});
      })
      .error(error =>{
        setUser({});
      })
    }
  const handleGitHubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .error(error => {
      console.log('error', error);
    })
  }
  const handleFacebookSignIn = () => {
      signInWithPopup(auth, facebookProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .error(error => {
        console.error('error', error);
      })
  }
  return (
    <div className="App">
     {
      user.uid ? <button onClick={handleSignOut}>Sign Out</button>
      :
     <>
     <button onClick={handleGoogleSignIn}>Google Sign In</button>
     <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
     <button onClick={handleGitHubSignIn}>Github Sign In</button>
     </>
     }
     {
        user.uid && <div>
          <h3>DisplayName : {user.displayName} </h3>
          <p>Email :{user.email}</p>
          <img src= {user.photoURL} alt="" />
     </div>
     }
    </div>
  );
}

export default App;
