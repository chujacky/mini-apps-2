import React from 'react';
import ReactPaginate from 'react-paginate';
import ResultItem from './ResultItem.jsx';

const Result = ({ results, pageCount, pageClick }) => {
  return (
    <div>
      {results.map((result, index) => {
        return <ResultItem result={result} key={index} />
      })}
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={pageClick}
        activeClassName="active"
      />
    </div>
  )
}

export default Result;
