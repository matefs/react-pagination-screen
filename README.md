# react-pagination-screen
React pagination consumming json placeholder api with axios, useState and useEffect methods. 

![image](https://user-images.githubusercontent.com/30128774/209416649-a9536ad4-5e6d-427b-91c2-50b53a0c493e.png)

`
/* src/components/Pagination.jsx */

import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li onClick={() => paginate(number)} key={number} className='page-item'>
                        <a href="!#" className='page-link'>{number}</a>
                    </li>
                ))
                    
                }
            </ul>
        </nav>
        )
}

export default Pagination

`




