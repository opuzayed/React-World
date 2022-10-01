import { Button, Spinner } from "react-bootstrap";
import "./App.css";
import GridCard from "./components/GridCard/GridCard";
import Navbars from "./components/Nabvar/Nabvar";
import Toasts from "./components/Toasts/Toast";


function App() {
  return <div className="App">
    <Navbars></Navbars>
    <button>plain html</button>
    <Button variant='danger'>MyButton</Button>
    <Spinner animation="grow" variant="danger" />
    <GridCard></GridCard>
    <Toasts></Toasts>
  </div>;
}

export default App;
