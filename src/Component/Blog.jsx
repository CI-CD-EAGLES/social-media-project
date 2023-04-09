import React, { useState } from 'react'
import { useAuth } from '../utils/UserContext';
// import '../CSS/BlogCSS.css';

export const Blog = () => {

  const [writtenContent, setWrittenContent] = useState('');
  const { authUser } = useAuth();

  const createNewUserPost = async (newPostData) => {
    try {
      const response = await fetch('http://localhost:8000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'SameSite': 'None'
        },
        body: JSON.stringify(newPostData)
      });

      const data = await response.json();

      console.log('Post Created!', data);
    } catch (error) {
      console.log("ERROR CREATING POST:", error.message);
    }
  }

  // HANDLE BUTTON SUBMISSION
  const handleSubmit = async (event) => {
    // PREVENT PAGE REFRESH AFTER FOR SUBMISSION
    event.preventDefault()

    const newUserPost = {
      user_name: authUser,
      written_content: writtenContent
    }
    createNewUserPost(newUserPost);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Say whats on your mind...' value={writtenContent} onChange={(e) => setWrittenContent(e.target.value)}></input>
        <button type='submit'>POST</button>
      </form>
    </div>
  )
}
