import zen from "../../assets/zen-icon.svg";
import swim from "../../assets/swim-icon.svg";
import bike from "../../assets/bike-icon.svg";
import weight from "../../assets/weight-icon.svg";

function NavigationBtn({ activity }) {
  // displays the image according to the name corresponding to the activities array in navigation
  let activityIcon;
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
