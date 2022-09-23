import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name = 'noakhali' specila = 'backbitting'></District>
      <District name = 'bramonbaria' special = 'fighting'></District>
      <District name = 'cumilla' special = 'itor'></District>
    </div>
  );
}
const districtStyle = {
  backgroundColor : 'gray',
  color : 'green',
  borderRadius : '10px',
  margin : '20px'
}
function District(props){
  return(
    <div style = { districtStyle}>
      <h2>Name : { props.name} </h2>
      <p>Speciality : { props.special} </p>
    </div>
  )
}

export default App;
