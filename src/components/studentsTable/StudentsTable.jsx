import { useEffect, useState } from "react";
import StudentData from "../../../StudentData";
function StudentsTable({ filterData }) {
  const [filtereStudentInfo, setFilteredStudentInfo] = useState(StudentData);
  const [page, setPage] = useState(1);
  const [curPageStudentInfo, setCurPageStudentInfo] = useState([]);
  useEffect(() => {
    setCurPageStudentInfo(() => {
      const newState = [];
      for (let i = (page - 1) * 10; i < (page - 1) * 10 + 10; i++) {
        if (filtereStudentInfo[i]) {
          newState.push(filtereStudentInfo[i]);
        }
      }

      return newState;
    });
  }, [page, filtereStudentInfo]);

  useEffect(() => {
    setFilteredStudentInfo(
      StudentData.filter(
        (studentInfo) =>
          filterData[studentInfo.sex.toLowerCase()] &&
          filterData[studentInfo.status.toLowerCase()]
      )
    );

    setPage(1);
  }, [filterData]);
  return (
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
  );
}

export default StudentsTable;
