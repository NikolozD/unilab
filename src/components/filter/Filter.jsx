import { useState } from "react";
import "./Filter.css";

function Filter({ setFilterData, filterData }) {
  const [showStudentStatus, setShowStudentStatus] = useState(false);
  const [showSex, setShowSex] = useState(false);

  function changeStudenStatusState() {
    setShowStudentStatus((curState) => !curState);
  }

  function changeSexState() {
    setShowSex((curState) => !curState);
  }

  const handleChange = (e) => {
    const newValue = e.target.checked;
    const name = e.target.id.toLowerCase();
    setFilterData((curState) => {
      return { ...curState, [name]: newValue };
    });
  };
  return (
    <div className="form_filter_Container">
      <ul>
        <li>
          <div onClick={changeStudenStatusState}>
            <img src="/assets/chevron-right.png" alt="" />
            სტუდენტის სტატუსი
          </div>
          <ul
            className={
              showStudentStatus
                ? "form_filter_status show"
                : "form_filter_status"
            }
          >
            <li>
              <input
                type="checkbox"
                id="active"
                onChange={handleChange}
                checked={filterData.active}
              />
              <label htmlFor="active">ACTIVE</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="inactive"
                onChange={handleChange}
                checked={filterData.inactive}
              />
              <label htmlFor="inactive">INACTIVE</label>
            </li>
          </ul>
        </li>
        <li>
          <div onClick={changeSexState}>
            <img src="/assets/chevron-right.png" alt="" />
            სქესი
          </div>
          <ul className={showSex ? "form_filter_sex shows" : "form_filter_sex"}>
            <li>
              <input
                type="checkbox"
                id="male"
                onChange={handleChange}
                checked={filterData.male}
              />
              <label htmlFor="male">Male</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="female"
                onChange={handleChange}
                checked={filterData.female}
              />
              <label htmlFor="female">Female</label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
