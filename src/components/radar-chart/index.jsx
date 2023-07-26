import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function radarChart() {
  const data = [
    {
      subject: "Math",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Chinese",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "English",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Geography",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Physics",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "History",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
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
