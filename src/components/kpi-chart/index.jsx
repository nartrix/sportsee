import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function kpiChart() {
  const data = [
    {
      name: "12%",
      uv: 12,
      pv: 2400,
      fill: "#E60000",
    },
  ];

  const renderColorLegendText = (value) => {
    return (
      <span
        style={{
          width: "95px",
          color: "#282D30",
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        {value}
      </span>
    );
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="75%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="85%"
          barSize={16}
          data={data}
          startAngle={190}
          endAngle={-190}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            dataKey="uv"
            background
            clockWise={true}
            cornerRadius={30 / 2}
          />
          <Legend
            formatter={renderColorLegendText}
            iconSize={0}
            layout="vertical"
            verticalAlign="middle"
            stroke="#020203"
          />
          <text>votre objectif</text>
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  );
}

export default kpiChart;
