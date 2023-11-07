import { useEffect, useState } from "react";
import "./Form.css";
import StudentsTable from "../../components/studentsTable/StudentsTable";
import Filter from "../../components/filter/Filter";
import PopUp from "../../components/pop-up/PopUp";
import { useNavigate } from "react-router-dom";
function Form() {
  const [photo, setPhoto] = useState();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [popUp, setPopUp] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterData, setFilterData] = useState({
    active: true,
    inactive: true,
    male: true,
    female: true,
  });
  useEffect(() => {
    if (localStorage.getItem("image") && localStorage.getItem("name")) {
      setPhoto(localStorage.getItem("image"));
      setName(localStorage.getItem("name"));
    } else {
      navigate("/", { replace: true });
    }
  }, []);

  const toggleFilters = () => {
    setShowFilter((curState) => !curState);
  };

  const togglePopUp = (boolean) => {
    setPopUp(boolean);
  };
  const logOut = () => {
    localStorage.removeItem("image");
    localStorage.removeItem("name");
    togglePopUp(false);
    navigate("/", { replace: true });
  };

  return (
    <div className="form_background">
      {popUp ? <PopUp logOut={logOut} togglePopup={togglePopUp} /> : null}
      <div className="form_container">
        <div className="form_navbar">
          <div>
            <h2>Form</h2>
            <h2>API</h2>
          </div>
          <div className="form_userInfo">
            <p>{name}</p>
            <img onClick={() => togglePopUp(true)} src={photo} alt="" />
          </div>
        </div>
        <div className="form_secondaryNavbar">
          <button className="form_filter" onClick={toggleFilters}>
            <img src="public/assets/filter-svgrepo-com (1) 1.png" alt="" />
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
