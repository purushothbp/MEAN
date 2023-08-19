import React from 'react';

const PostList = ({ posts, onEditClick, onDeleteClick }) => {
  return (
    <div>
      <h2>Posts List</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="post">
            <div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
            <div className="post-actions">
              <button
                className="post-action"
                onClick={() => onEditClick(post)}
              >
                Edit
              </button>
              <button
                className="post-action"
                onClick={() => onDeleteClick(post.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
