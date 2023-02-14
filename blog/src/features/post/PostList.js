import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostExcerpt from "./PostExcerpt";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postSlice";

function PostList() {
  // const posts = useSelector((state) => state.posts);
  const posts = useSelector(selectAllPosts);
  //use selector ko pura store milta hai, vaha se vo args me store deta hai,

  //uske baad hume batana hota hai ke usme me se konsa state chiye
  //ab selector ko slice me hi bana diye, agar ab state ko hum change karde, yaani
  //array se usko object bana de, to humko ek hi jaga change karna padega,
  //naaki har us component me jaha pe ye state ka use hua hai
  //select all posts ek function hai jo import hua hai

  const dispatch = useDispatch();
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus == "idle") {
      dispatch(fetchPosts());
      // console.log('dispatch')
    }
  }, [postsStatus, dispatch]);

  let content;
  // console.log(postsStatus)
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post}></PostExcerpt>
    ));
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
}

export default PostList;
