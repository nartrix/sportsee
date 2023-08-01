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
import { monthTickFormatter } from "../../services/activityModel";

function weightChart({ activitySessions }) {
  const renderColorfulLegendText = (value) => {
    return <span style={{ color: "#74798C", fontSize: "14px" }}>{value}</span>;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#E60000",
            color: "#FFFFFF",
            fontSize: "7px",
            width: "39px",
            height: "63px",
            textAlign: "center",
          }}
        >
          <p className="label">{`${payload[0].value}kg`}</p>
          <p className="desc">{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }

    return null;
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
          data={activitySessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tickFormatter={monthTickFormatter}
            tickLine={false}
            dy={10}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#8884d8"
            hide={true}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#9B9EAC"
            domain={["dataMin - 1", "dataMax"]}
            allowDecimals={false}
            axisLine={false}
            tickLine={false}
            dx={15}
            dy={-4}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={renderColorfulLegendText}
            align="right"
            verticalAlign="top"
            wrapperStyle={{ top: -42, right: 0 }}
          />
          <Bar
            yAxisId="right"
            name="Poids (kg)"
            legendType="circle"
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            yAxisId="left"
            name="Calories brûlées (kCal)"
            legendType="circle"
            dataKey="calories"
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
