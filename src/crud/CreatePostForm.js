import React, { useState } from 'react';

const CreatePostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          body,
          userId: 1, // Specify the user ID here (you can customize this)
        }),
      });

      const data = await response.json();
      if (response.ok) {
        onPostCreated(data);
        setTitle('');
        setBody('');
      } else {
        console.error('Error creating post:', data);
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
