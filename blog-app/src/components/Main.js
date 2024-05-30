import React from 'react';
import './Main.css';

const Main = ({ posts, deletePost, archivePost }) => {
  return (
    <main className="main">
      <h2 className="main-header">Записи</h2>
      {posts.map((post, index) => (
        <article className="post" key={index}>
          <h1>{post.title}</h1>
          <p>Категория: {post.category}</p>
          <p>Автор: {post.author}</p>
          <p>Содержание: {post.content}</p>
          <button className="delete-button" onClick={() => deletePost(index)}>Удалить</button>
          <button className="archive-button" onClick={() => archivePost(index)}>Архив</button>
        </article>
      ))}
    </main>
  );
};

export default Main;
