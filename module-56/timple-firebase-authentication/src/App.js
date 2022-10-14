import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from './firebase/firebase.init';
const auth = getAuth(app);
function App() {
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
