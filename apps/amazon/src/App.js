import axios from "axios";
import './App.css';

const data = axios.get(
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>console.log(json)))

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
