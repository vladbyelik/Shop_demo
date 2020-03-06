import React, {useMemo} from 'react';
import './Pagin.css';

interface PaginProps {
    postsPerPage: number,
    totalPosts: number,
    paginate: (arg: number) => void
}

const Pagin = ({ postsPerPage, totalPosts, paginate }: PaginProps) => {
    const pageNumbers = useMemo(() => {
      return Array(Math.ceil(totalPosts / postsPerPage))
        .fill(null)
        .map((_, i) => i + 1);
    }, [totalPosts, postsPerPage]);
  
    const pageNum = useMemo(() => {
      return pageNumbers.map(number => (
      <div className="a page-item" key={number}>
        <a className="page-num" onClick={() => paginate(number)}>
            {number}
        </a>
      </div>
      ))
    }, [pageNumbers, paginate]);
  
    return <div className="pagin">{pageNum}</div>;
  };

export default Pagin;