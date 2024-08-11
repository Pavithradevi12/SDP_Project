// src/components/LanguageFilter.js
import React from 'react';

const LanguageFilter = ({ languages, selectedLanguage, setLanguage }) => {
  return (
    <div className="filter-section">
      <h3>LANGUAGE</h3>
      <select value={selectedLanguage} onChange={(e) => setLanguage(e.target.value)}>
        <option value="">All</option>
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageFilter;
