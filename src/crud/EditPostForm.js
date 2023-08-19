import React, { useState } from 'react';

const EditPostForm = ({ post, onPostEdited }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: post.id,
          title,
          body,
          userId: post.userId,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        onPostEdited(post.id, data);
      } else {
        console.error('Error updating post:', data);
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPostForm;
