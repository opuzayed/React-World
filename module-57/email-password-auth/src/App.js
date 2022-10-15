import {getAuth} from 'firebase/auth';
import './App.css';
import app from './firebase/firebase.init';

const auth = getAuth(app);
function App() {
  const handleRegister = event =>{
    event.preventDefault();
    console.log(event.target);
  }
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input type="email" name="email" id="" placeholder='Enter your email'/>
        <br />
        <input type="password" name="password" id="" placeholder='Enter your password'/>
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default App;
