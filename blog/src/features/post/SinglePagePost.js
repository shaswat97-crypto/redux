import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

function SinglePagePost({post}) {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId}></PostAuthor>
        <TimeAgo timestamp={post.date}></TimeAgo>
      </p>
      <ReactionButtons post={post}></ReactionButtons>
    </article>
  )
}

export default SinglePagePost