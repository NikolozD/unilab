import { useNavigate } from "react-router-dom";
import PopUp from "../pop-up/PopUp";
import { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);
  const [photo, setPhoto] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    if (localStorage.getItem("image") && localStorage.getItem("name")) {
      setPhoto(localStorage.getItem("image"));
      setName(localStorage.getItem("name"));
    } else {
      navigate("/", { replace: true });
    }
  }, []);

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
    <>
      {popUp ? (
        <PopUp
          logOut={logOut}
          togglePopup={togglePopUp}
          user={{ name, photo }}
        />
      ) : null}
      <div className="form_navbar">
        <div>
          <h2 onClick={() => navigate("/form", { replace: true })}>Form</h2>
          <h2 onClick={() => navigate("/api", { replace: true })}>API</h2>
        </div>
        <div className="form_userInfo">
          <p>{name}</p>
          <img onClick={() => togglePopUp(true)} src={photo} alt="" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
