import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Outlet, Link } from "react-router-dom";
function PostExcerpt({post}) {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <Link to='/'>View Post</Link>
      <p className="postCredit">
        <PostAuthor userId={post.userId}></PostAuthor>
        <TimeAgo timestamp={post.date}></TimeAgo>
      </p>
      <ReactionButtons post={post}></ReactionButtons>
    </article>
  )
}

export default PostExcerpt