import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';

function App() {
  const [posts, setPosts] = useState([]);
  const [archive, setArchive] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  const archivePost = (index) => {
    const postToArchive = posts[index];
    setArchive([...archive, postToArchive.title]);
    deletePost(index);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="main-container">
          <Main posts={posts} deletePost={deletePost} archivePost={archivePost} />
        </div>
        <div className="form-container-wrapper">
          <Form addPost={addPost} archive={archive} />
        </div>
      </div>
    </div>
  );
}

export default App;
