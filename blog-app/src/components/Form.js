import React, { useState } from 'react';
import './Form.css';

const Form = ({ addPost, archive }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, category, author, content });
    setTitle('');
    setCategory('');
    setAuthor('');
    setContent('');
  };

  return (
    <aside className="form-container">
      <form onSubmit={handleSubmit} className="post-form">
        <h2 className="form-header">Создать запись</h2>
        <label>Автор</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        <label>Заголовок</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Категория</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} />
        <label>Содержание</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button type="submit" className="create-button">Создать</button>
      </form>
      <div className="archive">
        <h2 className="archive-header">Архив</h2>
        <ul className="text">
          {archive.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Form;
