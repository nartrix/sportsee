import caloriesImg from "../../assets/calories-icon.png";
import proteinImg from "../../assets/protein-icon.png";
import glucidImg from "../../assets/carbs-icon.png";
import lipidImg from "../../assets/fat-icon.png";

function dashboardCard({ type, amount }) {
  // Create an object that contains the properties of each type of nutrition
  const TYPES = {
    calorieCount: {
      unit: "kCal",
      typeName: "Calories",
      icon: caloriesImg,
    },
    proteinCount: {
      unit: "g",
      typeName: "Protéines",
      icon: proteinImg,
    },
    carbohydrateCount: {
      unit: "g",
      typeName: "Glucides",
      icon: glucidImg,
    },
    lipidCount: {
      unit: "g",
      typeName: "Lipides",
      icon: lipidImg,
    },
  };

  // Create a variable nutritionType which retrieves the properties of TYPES depending on the type of nutrition
  const nutritionType = TYPES[type];

  return (
    <div className="dashboard-card">
      <img src={nutritionType.icon} alt={nutritionType}></img>
      <div className="">
        <p className="data-content">
          {amount}
          {nutritionType.unit}
        </p>
        <p className="data-title">{nutritionType.typeName}</p>
      </div>
    </div>
  );
}

export default dashboardCard;
