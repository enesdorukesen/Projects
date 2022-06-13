import { useSelector } from "react-redux";
import { selectAllUsers } from "../user/userSlice";
import { selectAllPosts } from "./postSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectAllUsers);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <div className="postCredit">
        {users.find(({ id }) => id === post.userId).name}
      </div>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
