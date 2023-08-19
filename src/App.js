import React, { useState, useEffect } from 'react';

const PostTable = () => {
  const [posts, setPosts] = useState([]);
  const [editingPostId, editPostId] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const postDataDelete=(id,index)=>{
    console.log(id)
    const filterData = [...posts]
    filterData.splice(index,1);
    setPosts(filterData)
  }
  const handleEditClick = postId => {
    editPostId(postId);
  };

  const handleEditFormSubmit = (postId, updatedData) => {
    editPostId(null);
  };
 

  return (
    <table className='tableStyles'>
      <thead>
        <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
        <th>Actions</th>
        </tr>
      </thead>
        <tbody>
          {posts.map((post, index)  => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{editingPostId === post.id ? <input type="text" value={post.title} /> : post.title}</td>
              <td>{editingPostId === post.id ? <textarea value={post.body} /> : post.body}</td>
              <td>
                {editingPostId === post.id ? (
                  <button onClick={() => handleEditFormSubmit(post.id, post.title, post.body )}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(post.id)}>Edit</button>
                )}
              </td>
              <td><button onClick={()=>postDataDelete(post._id,index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default PostTable;
