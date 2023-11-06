import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const palette = ["orange", "blue", "black"];

export default function ToggleChart({ chartData }) {
  return (
    <PieChart
      colors={palette}
      series={[
        {
          data: chartData,
          innerRadius: 75,
          outerRadius: 125,
          paddingAngle: 1,
          cornerRadius: 5,
          startAngle: -145,
          endAngle: 215
        }
      ]}
      margin={20}
      height={300}
      an
    />
  );
}
