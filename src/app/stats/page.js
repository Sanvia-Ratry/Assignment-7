"use client";
import React, { useContext } from "react";
import { Pie, PieChart, Sector, Tooltip, ResponsiveContainer } from "recharts";
import { AppContext } from "../context/AppContext";

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="font-bold">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />

      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
        {`Count: ${value}`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#64748b">
        {`${((percent ?? 0) * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

export default function StatsPage() {
  const { logs } = useContext(AppContext);

  const callCount = logs.filter((item) => item.activity?.toLowerCase() === "call").length;
  const textCount = logs.filter((item) => item.activity?.toLowerCase() === "text").length;
  const videoCount = logs.filter((item) => item.activity?.toLowerCase() === "video").length;

  const data = [
    { name: "Calls", value: callCount, fill: "#15803d" },
    { name: "Text", value: textCount, fill: "#1d4ed8" },
    { name: "Video", value: videoCount, fill: "#6d28d9" },
  ];

  if (logs.length === 0) {
    return (
      <div className="bg-[#f8fafc] flex flex-col gap-5 px-60 py-20">
        <div className="bg-white py-6 px-6 border border-gray-50 rounded-lg">
          <p className="text-gray-500">No logs recorded yet. Log a Call, Text, or Video first!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen px-60 py-20 flex flex-col items-center">
      <div className="bg-white p-6 rounded-xl shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] flex flex-col justify-center w-full max-w-lg">
        <h1 className="font-bold text-xl text-font-green mb-2">By Interaction Type</h1>

        {/* Explicit height container + ResponsiveContainer fixes the invisible chart */}
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 10, right: 80, bottom: 10, left: 80 }}>
              <Pie
                activeShape={renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="55%"
                outerRadius="78%"
                dataKey="value"
              />
              <Tooltip content={() => null} defaultIndex={0} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center gap-6 mt-2">
          <p className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
            <span className="inline-block rounded-full bg-[#15803d] w-3 h-3"></span>Calls
          </p>
          <p className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
            <span className="inline-block rounded-full bg-[#1d4ed8] w-3 h-3"></span>Text
          </p>
          <p className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
            <span className="inline-block rounded-full bg-[#6d28d9] w-3 h-3"></span>Video
          </p>
        </div>
      </div>
    </div>
  );
}
