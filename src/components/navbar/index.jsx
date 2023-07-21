import Logo from "../../assets/logo-app.svg";

function navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="navbar-menu">
        <div className="navbar-link">Accueil</div>
        <div className="navbar-link">Profil</div>
        <div className="navbar-link">Réglage</div>
        <div className="navbar-link">Communauté</div>
      </div>
    </nav>
  );
}

export default navbar;
