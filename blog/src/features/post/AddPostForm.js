import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postSlice';
import { selectAllUsers } from '../users/usersSlice';

function AddPostForm() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers)

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const handleTitle = (text)=>{
    setTitle(text);
  }
  const handleContent = (text)=>{
    setContent(text);
  }
  const handleUser = (text)=>{
    setUserId(text);
  }
  const handleClick = ()=>{
    if(title && content){
      dispatch(postAdded(title, content, userId))
    }
    setTitle('');
    setContent('');
  }

  const userOptions = users.map(user=>(
    <option key={user.id} value={user.id}>{user.name}</option>
  ))

  let canSave = Boolean(title)&&Boolean(content)&&Boolean(userId);
  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input type="text" id='postTitle' name='postTitle' value={title} onChange={(e)=>handleTitle(e.target.value)} />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={(e)=>handleUser(e.target.value)}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea name="postContent" id="postContent" value={content} onChange={(e)=>handleContent(e.target.value)} cols="30" rows="10"></textarea>
        <button disabled={!canSave} type='button' onClick={handleClick}>Save post</button>
      </form>
    </section>
  )
}

export default AddPostForm