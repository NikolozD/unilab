import { useEffect, useState } from "react";
import "./Api.css";
import Pagination from "../../components/pagination/pagination";

function Api() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 9;
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };

  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  return (
    <div className="api_background">
      <div className="api_container">
        {currentUsers.map((user) => (
          <div key={user.id} className="api_card">
            <h2>{user.title}</h2>
            <span>{user.body}</span>
          </div>
        ))}
      </div>
      <div>
        <Pagination
          totalStudents={users.length}
          studentsPerPage={usersPerPage}
          paginate={paginate}
          curPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Api;
