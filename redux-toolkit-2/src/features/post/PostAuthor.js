import { useSelector } from "react-redux";
import { selectAllUsers } from "../user/userSlice";
import { selectAllPosts } from "./postSlice";

const PostAuthor = () => {
  const users = useSelector(selectAllUsers);
  const posts = useSelector(selectAllPosts);
  const author = users.find((user) => user.id === userId);
  return;
};
