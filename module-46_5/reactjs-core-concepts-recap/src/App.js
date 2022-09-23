import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name = 'noakhali' special = 'backbitting'></District>
      <District name = 'bramonbaria' special = 'fighting'></District>
      <District name = 'cumilla' special = 'itor'></District>
    </div>
  );
}
const districtStyle = {
  backgroundColor : 'skyblue',
  color : 'green',
  borderRadius : '10px',
  margin : '20px',
  padding : '20px'
}
function LoadPosts(){
  const [posts, serPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => serPosts(data));
  },[])
  return (
    <div>
      <h2>Posts : {posts.length}</h2>
      {
        posts.map(post => <Post title = {post.title} body = {post.body}></Post>)
      }
    </div>
  )
}
function Post(props){
  return(
    <div style={{backgroundColor : 'skyblue', color : 'red', margin : '20px', padding : '20px', border : '3px solid black'}}>
      <h2>Title : {props.title} </h2>
      <p>Body : {props.body} </p>
    </div>
  )
}
function District(props){
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return(
    <div style = { districtStyle}>
      <h2>Name : { props.name} </h2>
      <p>Speciality : { props.special} </p>
      <h2>Power :{power} </h2>
      <button onClick = {boostPower}>Boost Power</button>
    </div>
  )
}

export default App;
