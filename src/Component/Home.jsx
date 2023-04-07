import React from "react";
import { useState, useEffect } from 'react';
import PostCard from "./PostCard";
import '../CSS/PostCardCSS.css';

function Home() {

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const getPostsData = async () => {
    const response = await fetch(`http://localhost:8000/api/posts`); 
    const data = await response.json(); 

    setPosts(data.posts);
    console.log(data.posts)
  }

  useEffect(() => {
    getPostsData();
  }, [])

  return (
    <div className="posts-container">
      {
        posts.length ? posts.map((post) => <PostCard postsData={post} /> ): '..loading'
      }
    </div>
  );
}

export default Home;
