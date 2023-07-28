import "./style/main.scss";
import Navbar from "./components/navbar";
import Navigation from "./components/navigation";
import WeightChart from "./components/weight-chart";
import DurationChart from "./components/duration-chart";
import RadarChart from "./components/radar-chart";
import KpiChart from "./components/kpi-chart";

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
            <span
              style={{ color: "#E60000", fontSize: "48px", fontWeight: "bold" }}
            >
              Thomas
            </span>
          </div>
          <p style={{ fontSize: "18px", marginBottom: "47px" }}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
          <div className="charts">
            <div
              className="weight-chart"
              style={{
                width: "835px",
                height: "320px",
                backgroundColor: "#FBFBFB",
                borderRadius: "5px",
                marginBottom: "30px",
              }}
            >
              <p style={{ padding: "24px 0px 0 32px", fontSize: "18px" }}>
                Activité quotidienne
              </p>
              <WeightChart />
            </div>
            <div
              className="card-chart"
              style={{ display: "flex", gap: "36px" }}
            >
              <div
                className="duration-chart"
                style={{
                  width: "258px",
                  height: "263px",
                  backgroundColor: "#FF0000",
                  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.02)",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <p
                  style={{
                    width: "147px",
                    color: "#FFF",
                    fontSize: "15px",
                    opacity: "0.5",
                    marginLeft: "29px",
                    marginTop: "24px",
                  }}
                >
                  Durée moyenne des sessions
                </p>
                <DurationChart />
              </div>
              <div
                className="radar-chart"
                style={{
                  width: "258px",
                  height: "263px",
                  backgroundColor: "#282D30",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <RadarChart />
              </div>
              <div
                className="Kpi-chart"
                style={{
                  width: "258px",
                  height: "263px",
                  backgroundColor: "#FBFBFB",
                  borderRadius: "5px",
                  position: "relative",
                }}
              >
                <p
                  style={{
                    margin: "20px 0px 0px 34px",
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: "#20253A",
                  }}
                >
                  Score
                </p>
                <KpiChart />
                <p
                  style={{
                    width: "95px",
                    position: "absolute",
                    top: "52%",
                    left: "39%",
                    color: "#74798C",
                    fontSize: "16px",
                  }}
                >
                  de votre objectifs
                </p>
              </div>
            </div>
            <div className="cards"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
