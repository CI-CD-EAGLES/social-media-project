import React from "react";
import { useState, useEffect } from 'react';
import PostCard from "./PostCard";

function Home() {

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const getPostsData = async () => {
    const response = await fetch(`http://localhost:8000/api/posts`); 
    const data = await response.json(); 

    console.log('postData: ', data.posts);
    setPosts(data.posts);
  }

  const retrieveUsers = async() => {
    const response = await fetch(``)
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
