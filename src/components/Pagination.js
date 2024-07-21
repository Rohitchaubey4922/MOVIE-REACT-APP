import React from 'react';

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span>Page {page} of {totalPages}</span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
