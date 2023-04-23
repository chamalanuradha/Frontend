import React from 'react';
import './Pagination.css';

const Pagination = ({ studentPerPage, totalStudents, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalStudents / studentPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagi'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? 'page-item active' : 'page-item'}>
            <a onClick={() => paginate(number)} href="!#" className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
