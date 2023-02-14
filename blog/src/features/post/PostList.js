import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts } from './postSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

function PostList() {
  // const posts = useSelector((state) => state.posts);
  const posts = useSelector(selectAllPosts);
  //use selector ko pura store milta hai, vaha se vo args me store deta hai,

  //uske baad hume batana hota hai ke usme me se konsa state chiye
  //ab selector ko slice me hi bana diye, agar ab state ko hum change karde, yaani 
  //array se usko object bana de, to humko ek hi jaga change karna padega,
  //naaki har us component me jaha pe ye state ka use hua hai
  //select all posts ek function hai jo import hua hai
  let orderedPosts = posts.slice().sort((a, b)=>b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId}></PostAuthor>
        <TimeAgo timestamp={post.date}></TimeAgo>
      </p>
      <ReactionButtons post={post}></ReactionButtons>
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostList