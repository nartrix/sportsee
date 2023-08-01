import zen from "../../assets/zen-icon.svg";
import swim from "../../assets/swim-icon.svg";
import bike from "../../assets/bike-icon.svg";
import weight from "../../assets/weight-icon.svg";

function NavigationBtn({ activity }) {
  let activityIcon;
  // Je crée une condition pour afficher l'icône correspondant à l'activité
  if (activity === "zen") {
    activityIcon = zen;
  } else if (activity === "swim") {
    activityIcon = swim;
  } else if (activity === "bike") {
    activityIcon = bike;
  } else if (activity === "weight") {
    activityIcon = weight;
  }

  return (
    <div
      className="activity-button"
      style={{
        width: "64px",
        height: "64px",
        borderRadius: "6px",
        background: "#FFF",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={activityIcon} alt={activity} />
    </div>
  );
}

export default NavigationBtn;
