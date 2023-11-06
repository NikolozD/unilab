import { useEffect, useState } from "react";
import "./Form.css";
import StudentsTable from "../../components/studentsTable/StudentsTable";
import Filter from "../../components/filter/Filter";
function Form() {
  const [photo, setPhoto] = useState();
  const [showFilter, setShowFilter] = useState(false);
  const [filterData, setFilterData] = useState({
    active: true,
    inactive: true,
    male: true,
    female: true,
  });
  useEffect(() => {
    const newPhoto = localStorage.getItem("image");
    setPhoto(newPhoto);
  }, []);

  const toggleFilters = () => {
    setShowFilter((curState) => !curState);
  };
  return (
    <div className="form_background">
      <div className="form_container">
        <div className="form_navbar">
          <div>
            <h2>Form</h2>
            <h2>API</h2>
          </div>
          <div className="form_userInfo">
            <p>name</p>
            <img src={photo} alt="" />
          </div>
        </div>
        <div className="form_secondaryNavbar">
          <button className="form_filter" onClick={toggleFilters}>
            Filter
          </button>
          <input type="search" />
        </div>
        <div>
          {showFilter ? (
            <Filter setFilterData={setFilterData} filterData={filterData} />
          ) : null}
          <StudentsTable filterData={filterData} />
        </div>
      </div>
    </div>
  );
}

export default Form;
