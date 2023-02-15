import logo from "./logo.svg";
import "./App.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import PostList from "./features/post/PostList";
import AddPostForm from "./features/post/AddPostForm";
import SinglePagePost from "./features/post/SinglePagePost";
import { fetchUsers } from "./features/users/usersSlice";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
store.dispatch(fetchUsers());
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <AddPostForm></AddPostForm>
        <PostList></PostList>
        <Route path='/' element= {<SinglePagePost></SinglePagePost>}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
