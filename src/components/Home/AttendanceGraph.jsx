import { useState } from "react";
import Chart from "react-apexcharts";
const AttendanceGraph = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["web", "SDA", "SDA", "TW", "PE"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 85, 90, 70],
      },
    ],
  });
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      }}
    >
      <h3>ATTENDANCE CHART</h3>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="500"
      />
    </div>
  );
};

export default AttendanceGraph;
