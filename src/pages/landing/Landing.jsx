import { useNavigate } from "react-router-dom";
import "./Landing.css";
function Landing() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/registration", { replace: true });
  };
  return (
    <div className="landing_background">
      <div className="landing_container">
        <div className="logo">
          <img src="assets/pngegg 1.png" />
        </div>
        <h3>Get Started Today</h3>
        <button onClick={handleClick}>Get Started</button>
      </div>
    </div>
  );
}

export default Landing;
