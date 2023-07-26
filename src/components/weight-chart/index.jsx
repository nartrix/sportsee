import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function weightChart() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const renderColorfulLegendText = (value) => {
    return <span style={{ color: "#74798C", fontSize: "14px" }}>{value}</span>;
  };

  return (
    <>
      <ResponsiveContainer
        width="98%"
        height="80%"
        wrapperStyle={{ backgroundColor: "#FBFBFB" }}
      >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={10}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" tickLine={false} />
          <YAxis
            tickLine={false}
            orientation="right"
            axisLine={false}
            tickMargin={40}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#E60000",
              color: "#FFFFFF",
              fontSize: "7px",
            }}
            itemStyle={{ color: "#FFFFFF" }}
          />
          <Legend
            formatter={renderColorfulLegendText}
            align="right"
            verticalAlign="top"
            wrapperStyle={{ top: -42, right: 0 }}
          />
          <Bar
            name="Poids (kg)"
            legendType="circle"
            dataKey="pv"
            fill="#282D30"
            barSize={10}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            legendType="circle"
            dataKey="uv"
            fill="#E60000"
            barSize={10}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default weightChart;
