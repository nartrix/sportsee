import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { getPerformanceDataValue } from "../../services/perfomanceModel";

function radarChart({ performanceData }) {
  let data = [];
  if (performanceData) {
    data = getPerformanceDataValue(performanceData);
  }

  const getKind = (data) => {
    let kind = data.kind;
    //data recovery for translation
    switch (kind) {
      case 1:
        return "Intensité";
      case 2:
        return "Vitesse";
      case 3:
        return "Force";
      case 4:
        return "Endurance";
      case 5:
        return "Energie";
      case 6:
        return "Cardio";
      default:
        return "Valeur inconnue";
    }
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey={getKind}
            axisLine={false}
            tickLine={false}
            stroke="#FFFFFF"
            style={{ fontSize: "12px" }}
          />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="rgba(255, 1, 1, 0.70)"
            fill="rgba(255, 1, 1, 0.70)"
            fillOpacity={0.6}
            dot={false}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}

export default radarChart;
