import CaloriesImg from "../../assets/calories-icon.png";

function dashboardCard() {
  return (
    <div className="dashboard-card">
      <img src={CaloriesImg} alt=""></img>
      <div className="">
        <p className="data-content">1,930kCal</p>
        <p className="data-title">Calories</p>
      </div>
    </div>
  );
}

export default dashboardCard;
