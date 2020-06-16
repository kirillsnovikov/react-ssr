import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setForms] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then((data) => {
      setForms(posts.concat(data.data.data));
    });
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post.id}
          _
          {post.title}
        </div>
      ))}
    </div>
  );
};

export default Posts;
