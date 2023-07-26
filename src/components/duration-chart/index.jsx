import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from "recharts";

function durationChart() {
  const data = [
    {
      name: "S",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "V",
      uv: 1890,
      pv: 7800,
      amt: 2181,
    },
    {
      name: "D",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "L",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "M",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "M",
      uv: 2000,
      pv: 8800,
      amt: 2290,
    },
    {
      name: "J",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "V",
      uv: 1890,
      pv: 7800,
      amt: 2181,
    },
    {
      name: "S",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "D",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <ResponsiveContainer width="110%" height="66%">
        <LineChart width={300} height={100} data={data} margin={{ left: -65 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            stroke="rgba(255, 255, 255, 0.4)"
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default durationChart;
