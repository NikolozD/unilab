import { useEffect, useState } from "react";
import StudentData from "../../../StudentData";
import Pagination from "../pagination/pagination";
function StudentsTable({ filterData }) {
  const [filteredStudentInfo, setFilteredStudentInfo] = useState(StudentData);
  const [curPageStudentInfo, setCurPageStudentInfo] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [studentsPerPage, setStudentsPerPage] = useState(10);

  const paginate = (pageNumber) => {
    setCurPage(pageNumber);
  };

  useEffect(() => {
    setCurPageStudentInfo(() =>
      filteredStudentInfo.slice(
        (curPage - 1) * studentsPerPage,
        curPage * studentsPerPage
      )
    );
  }, [curPage, filteredStudentInfo]);

  useEffect(() => {
    setFilteredStudentInfo(
      StudentData.filter(
        (studentInfo) =>
          filterData[studentInfo.sex.toLowerCase()] &&
          filterData[studentInfo.status.toLowerCase()]
      )
    );

    setCurPage(1);
  }, [filterData]);

  return (
    <>
      <table className="form_table">
        <thead className="form_table_header">
          <th>სტუდენტის სახელი და გვარი</th>
          <th>სტატუსი</th>
          <th>სქესი</th>
          <th>ქულები</th>
          <th>პირადი ნომერი</th>
        </thead>
        <tbody>
          {curPageStudentInfo.map((student) => (
            <tr className="form_table_body">
              <td>{student.name}</td>
              <td>{student.status}</td>
              <td>{student.sex}</td>
              <td>{student.score}</td>
              <td>{student.pnumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Pagination
          totalStudents={filteredStudentInfo.length}
          studentsPerPage={studentsPerPage}
          paginate={paginate}
          curPage={curPage}
        />
      </div>
    </>
  );
}

export default StudentsTable;
