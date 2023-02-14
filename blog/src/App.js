import logo from './logo.svg';
import './App.css';
import { store } from './app/store';
import {Provider} from 'react-redux';
import PostList from './features/post/PostList';
import AddPostForm from './features/post/AddPostForm';
function App() {
  return (
    <Provider store={store}>
      <AddPostForm></AddPostForm>
      <PostList></PostList>
    </Provider>
  );
}

export default App;
