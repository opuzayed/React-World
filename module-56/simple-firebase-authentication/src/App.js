import './App.css';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
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
  
  return (
    <div className="App">
     <button onClick={handleGoogleSignIn}>Google Sign In</button>
     <button onClick={handleSignOut}>Sign Out</button>
     <div>
          DisplayName : {user.displayName} 
          <p>Email :{user.email}</p>
          
     </div>
    </div>
  );
}

export default App;
