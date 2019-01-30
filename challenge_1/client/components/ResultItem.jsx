import React from 'react';

const ResultItem = ({ result }) => {
  return (
    <div className="result">
      <div>
        <label>Date: </label>
        <span>{result.date}</span>
      </div>
      <div>
        <label>Description: </label>
        <span>{result.description}</span>
      </div>
      <div>
        <label>Language: </label>
        <span>{result.lang}</span>
      </div>
    </div>
  );
};

export default ResultItem;
