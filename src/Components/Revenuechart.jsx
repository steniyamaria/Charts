import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer ,CartesianGrid} from "recharts";
import { BsChevronDown } from "react-icons/bs";
import "./revenue.css";

const data = [
  { name: "Jan", profit: 5000, loss: 3000 },
  { name: "Feb", profit: 10000, loss: 7000 },
  { name: "Mar", profit: 7000, loss: 5000 },
  { name: "Apr", profit: 18000, loss: 12000 },
  { name: "May", profit: 12000, loss: 10000 },
  { name: "Jun", profit: 6000, loss: 4000 },
];

const Revenuechart = () => {
  return (
    <div className="revenue-container">
      {/* Header */}
      <div className="revenue-header">
        <h5>Revenue</h5>
        <div className="dropdown-btn">
          Month <BsChevronDown />
        </div>
      </div>

      {/* Revenue Value */}
      <div className="revenue-value">
        <h2>$16,400.<span className="decimal">12</span></h2>
        <p className="growth">🔼 +10%</p>
      </div>
      <div className="legend-container">
  <span className="legend-item">
    <span className="dot profit-dot"></span> Profit
  </span>
  <span className="legend-item">
    <span className="dot loss-dot"></span> Loss
  </span>
</div>


      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" stroke="#888" />
          <YAxis
            stroke="#888"
            tickFormatter={(value) => `${value / 1000}k`} // Format numbers as in image
            domain={[0, 20000]} // Exact range as image (0 to 20k)
            ticks={[0, 5000, 10000, 15000, 20000]} // Exact Y-axis labels
          />
          <Tooltip cursor={{ fill: "#1e1e2f" }} />
          <Bar dataKey="profit" fill="#1e88e5" radius={[5, 5, 0, 0]} />
          <Bar dataKey="loss" fill="#ccc" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Revenuechart;
