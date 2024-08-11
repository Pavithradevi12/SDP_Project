// src/components/GenreFilter.js
import React from 'react';

const GenreFilter = ({ genres, selectedGenres, toggleGenre }) => {
  return (
    <div className="filter-section">
      <h3>GENRE</h3>
      <ul className="filter-list">
        {genres.map((genre, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={`genre-${index}`}
              className="dummy"
              checked={selectedGenres.includes(genre)}
              onChange={() => toggleGenre(genre)}
            />
            <label htmlFor={`genre-${index}`}>{genre}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreFilter;
