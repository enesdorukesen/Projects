import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";

const AddUser = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");

  const onClickAddUser = () => {
    dispatch(addUser(userName));
    setUserName("");
  };

  const addUserLogic = Boolean(userName);
  return (
    <div>
      <h2>Add a New User</h2>
      <label htmlFor="UserName">User Name</label>
      <input
        type="text"
        id="UserName"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <button disabled={!addUserLogic} onClick={onClickAddUser}>
        Add User
      </button>
    </div>
  );
};

export default AddUser;
