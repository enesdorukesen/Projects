import AddPostForm from "./features/post/AddPost";
import PostList from "./features/post/PostList";
import AddUser from "./features/user/AddUser";

function App() {
  return (
    <main className="App">
      <div>
        <AddUser />
        <AddPostForm />
      </div>
      <PostList />
    </main>
  );
}

export default App;
