import Navbar from "../../components/navbar";
import Navigation from "../../components/navigation";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Navigation />
        <h1>Choix de l'utilisateur</h1>
        <ul>
          <li className="user-selection" onClick={() => navigate("/user/12")}>
            <span className="userName">Karl</span>
          </li>
          <li className="user-selection" onClick={() => navigate("/user/18")}>
            <span className="userName">Cecilia</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
