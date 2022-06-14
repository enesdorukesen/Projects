import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentItem = ({ student }) => {
  const { changeColor } = useContext(StudentContext);

  const { name, age, color, id } = student;
  return (
    <div style={{ background: color, padding: 0, margin: 0 }}>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      Color :
      <input
        type="text"
        // value={color}
        onChange={(e) => changeColor(e.target.value, id)}
      />
    </div>
  );
};

export default StudentItem;
