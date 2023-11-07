import "./Pagination.css";

function Pagination({ studentsPerPage, totalStudents, paginate, curPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="page_item">
        {pageNumbers.map((number) => (
          <li
            onClick={() => paginate(number)}
            className={curPage === number ? "page_link curpage" : "page_link"}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
