import { useEffect, useState } from "react";
import "./Form.css";
import StudentsTable from "../../components/studentsTable/StudentsTable";
import Filter from "../../components/filter/Filter";
import PopUp from "../../components/pop-up/PopUp";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
function Form() {
  const [showFilter, setShowFilter] = useState(false);
  const [filterData, setFilterData] = useState({
    active: true,
    inactive: true,
    male: true,
    female: true,
  });

  const toggleFilters = () => {
    setShowFilter((curState) => !curState);
  };

  return (
    <div className="form_background">
      <div className="form_container">
        <NavBar />
        <div className="form_secondaryNavbar">
          <button className="form_filter" onClick={toggleFilters}>
            <img src="/assets/filter-svgrepo-com (1) 1.png" alt="" />
            <span>Filter</span>
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
