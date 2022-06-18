import "./App.css";
import axios from "axios";

const data = async () => {
  await axios
    .get("https://code.org/schools.json")
    .then((res) => console.log(res))
    .then((res) => console.log(res));
};
const onClickHandler = () => {
  data();
};
function App() {
  return (
    <div>
      <button onClick={onClickHandler}>Data</button>
    </div>
  );
}

export default App;
