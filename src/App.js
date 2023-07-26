import "./style/main.scss";
import Navbar from "./components/navbar";
import Navigation from "./components/navigation";
import WeightChart from "./components/weight-chart";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ display: "flex" }}>
        <Navigation />
        <div className="dashboard" style={{ margin: "68px 109px 0px 109px" }}>
          <div
            className="title"
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              marginBottom: "41px",
            }}
          >
            Bonjour{" "}
            <span style={{ color: "#E60000", fontSize: "48px" }}>nom</span>
          </div>
          <p style={{ fontSize: "18px", marginBottom: "77px" }}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
          <div
            className="weight-chart"
            style={{
              width: "835px",
              height: "320px",
              backgroundColor: "#FBFBFB",
            }}
          >
            <p style={{ padding: "24px 0px 0 32px", fontSize: "18px" }}>
              Activité quotidienne
            </p>
            <WeightChart />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
