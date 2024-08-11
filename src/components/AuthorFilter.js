import React from 'react';

const AuthorFilter = ({ authors, selectedAuthor, setAuthor }) => {
  return (
    <div className="filter">
      <h3>Authors</h3>
      <select
        value={selectedAuthor}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option value="">All Authors</option>
        {authors.map((author, index) => (
          <option key={index} value={author}>
            {author}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AuthorFilter;
