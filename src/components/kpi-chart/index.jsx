import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function kpiChart({ score }) {
  const scoreValue = parseInt(score * 100);

  const data = [
    {
      score: scoreValue,
      fill: "#ff0000",
    },
  ];

  return (
    <>
      <p
        style={{
          width: "95px",
          position: "absolute",
          top: "35%",
          left: "39%",
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        {scoreValue}%
      </p>
      <p
        style={{
          width: "95px",
          position: "absolute",
          top: "50%",
          left: "39%",
          color: "#74798C",
          fontSize: "16px",
        }}
      >
        de votre objectif
      </p>
      <ResponsiveContainer width="100%" height="75%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="85%"
          barSize={16}
          data={data}
          startAngle={190}
          endAngle={-360}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar dataKey="score" cornerRadius={5} />
          <Legend
            iconSize={0}
            layout="vertical"
            verticalAlign="middle"
            stroke="#020203"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  );
}

export default kpiChart;
