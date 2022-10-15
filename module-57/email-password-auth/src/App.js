import {getAuth} from 'firebase/auth';
import './App.css';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';
import app from './firebase/firebase.init';

const auth = getAuth(app);
function App() {
  const handleRegister = event =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password);
  }
  const handleEmailBlur = event =>{
    console.log(event.target.value);
  }
  const handlePasswordBlur = event => {
    console.log(event.target.value);
  }
  return (
    <div className="App">
     <RegisterReactBootstrap></RegisterReactBootstrap>
    </div>
  );
}
export default App;
