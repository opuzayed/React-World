import {getAuth} from 'firebase/auth';
import './App.css';
import app from './firebase/firebase.init';

const auth = getAuth(app);
function App() {
  const handleRegister = event =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password);
  }
  const handleEmailChange = event =>{
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input onChange={handleEmailChange} type="email" name="email" id="" placeholder='Enter your email'/>
        <br />
        <input type="password" name="password" id="" placeholder='Enter your password'/>
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default App;
