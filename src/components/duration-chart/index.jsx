import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import { getWeekDays } from "../../services/sessionModel";

function durationChart({ sessionLength }) {
  const formatedSessions = getWeekDays(sessionLength);

  const CustomizedCursor = ({ points }) => {
    return (
      <Rectangle
        fill="#000000"
        opacity={0.1}
        x={points[0].x}
        width={258}
        height={263}
      />
    );
  };

  const CustomTooltipSessions = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div
          className="custom-tooltip-sessions"
          style={{ background: "#FFFFFF" }}
        >
          <p
            className="label"
            style={{ fontSize: "8px", fontWeight: "bold", margin: "5px" }}
          >{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <ResponsiveContainer width="110%" height="66%">
        <LineChart width={300} height={100} data={formatedSessions}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="rgba(255, 255, 255, 0.4)"
            padding={{ left: -19 }}
          />
          <YAxis
            type="number"
            domain={["dataMin - 10", "dataMax"]}
            hide={true}
          />
          <Tooltip
            content={<CustomTooltipSessions />}
            cursor={<CustomizedCursor />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
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
