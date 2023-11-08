import { useNavigate } from "react-router-dom";
import "./PopUp.css";

function PopUp({ togglePopup, logOut, user }) {
  return (
    <div className="popUp_background">
      <div className="popUp_container">
        <div className="pupUp_userInfo">
          <img src={user.photo} alt="" />
          <span>{user.name}</span>
        </div>

        <div className="popUp_actions">
          <button className="popUp_logout" onClick={logOut}>
            Log Out
          </button>
          <button className="popUp_close" onClick={() => togglePopup(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
