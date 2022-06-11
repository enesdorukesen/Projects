import { useReducer } from "react";
import { initialState2, reducer2 } from "./reducer2";

const ReducerExample2 = () => {
  const [state2, dispatch] = useReducer(reducer2, initialState2);
  const { name, lastname, age, email } = state2;

  const changeHandler = (e) => {
    const text = e.target.value;
    const field = e.target.name;
    dispatch({ type: field, payload: text });
    console.log(state2);
  };

  return (
    <>
      <div>
        <input type="text" name="NAME" onChange={changeHandler} />
        <input type="text" name="LASTNAME" onChange={changeHandler} />
        <input type="text" name="AGE" onChange={changeHandler} />
        <input type="text" name="COLOR" onChange={changeHandler} />
      </div>
      <div>
        <h4>Name:{name}</h4>
        <h4>Lastname:{lastname}</h4>
        <h4>Age:{age}</h4>
        <h4>Email:{email}</h4>
      </div>
    </>
  );
};

export default ReducerExample2;
