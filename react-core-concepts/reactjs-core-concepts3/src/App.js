import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      
        <Counter></Counter>
        <LoadComments></LoadComments>
        
    </div>
  );
}
function LoadComments(){
  const [comments, setComments] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data));
  },[])
  return(
    <div>
      <h2>Comments : {comments.length}</h2>
      {
        comments.map(comment => <Comment email = {comment.email} body = {comment.body}></Comment>)
      }
    </div>
  )
}
function Comment(props){
  return (
    <div>
      <h2>Email : {props.email}</h2>
      <p>Body :   {props.body}</p>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDeccrease = () => setCount(count - 1);
   return(
   <div>
      <h3>Count :{count} </h3>
      <button onClick = {handleIncrease}>Increase</button>
      <button onClick = {handleDeccrease}>Decrease</button>
    </div>
  )
}

export default App;
