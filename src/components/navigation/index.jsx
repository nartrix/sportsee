import NavigationBtn from "../navigation-btn";

function navigation() {
  const activities = ["zen", "swim", "bike", "weight"];
  return (
    <div className="navigation">
      <div className="navigation-menu">
        {activities.map((activity, index) => {
          return <NavigationBtn key={index} activity={activity} />;
        })}
      </div>
      <div className="copiryght">Copiryght, SportSee 2020</div>
    </div>
  );
}

export default navigation;
