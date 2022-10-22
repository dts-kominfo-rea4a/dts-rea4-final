import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "react-feather";

const Paginate = ({ totalItems, query }) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    setPageCount(Math.ceil(totalItems / itemsPerPage));
  }, [itemOffset, itemsPerPage, query]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalItems;
    setItemOffset(newOffset);
    navigate(`?q=${query}&page=${event.selected + 1}`);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ChevronRight className="h-5 w-5" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<ChevronLeft className="h-5 w-5" />}
        renderOnZeroPageCount={null}
        breakClassName="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        // breakLinkClassName="page-link"
        marginPagesDisplayed={2}
        containerClassName="inline-flex items-center -space-x-px"
        pageClassName="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        // pageLinkClassName="page-link"
        previousClassName="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        // previousLinkClassName="page-link"
        nextClassName="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        nextLinkClassName="page-link"
        activeClassName="bg-slate-300"
      />
    </>
  );
};

export default Paginate;
