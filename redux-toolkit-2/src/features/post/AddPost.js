import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPost } from "./postSlice";
import { selectAllUsers } from "../user/userSlice";

const AddPostForm = () => {
  const dispatch = useDispatch(); //im

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);
  const onChangeAuthor = (e) => setUserId(e.target.value);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const saveClickHandler = () => {
    dispatch(addPost(title, content, userId));
    setContent("");
    setTitle("");
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <section>
      <h2>Add a New Post</h2>
      <label htmlFor="postTitle"> Post Title : </label>
      <input
        type="text"
        id="postTitle"
        value={title}
        onChange={onChangeTitle}
      />
      <div style={{ display: "flex" }}>
        <label htmlFor="postContent"> Post Title : </label>
        <textarea
          type="text"
          id="postContent"
          value={content}
          onChange={onChangeContent}
        />
      </div>
      <select name="postAuthor" id="postAuthor" onChange={onChangeAuthor}>
        <option value="ccc">Select Author</option>
        {userOptions}
      </select>
      <button type="button" disabled={!canSave} onClick={saveClickHandler}>
        Save Post
      </button>
    </section>
  );
};

export default AddPostForm;
