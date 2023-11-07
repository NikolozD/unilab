import { useNavigate } from "react-router-dom";
import "./PopUp.css";

function PopUp({ togglePopup, logOut }) {
  return (
    <div className="popUp_background">
      <div className="popUp_container">
        <button className="popUp_logout" onClick={logOut}>
          Log Out
        </button>
        <button className="popUp_close" onClick={() => togglePopup(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default PopUp;
