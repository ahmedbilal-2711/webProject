import { useState } from "react";
import Chart from "react-apexcharts";
const CgpaGraph = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5],
      },
      markers: { size: 5 },
      stroke: { curve: "smooth" },
    },
    series: [
      {
        name: "series-1",
        data: [3.0, 4.0, 3.5, 2.9, 3.6],
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
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="500"
      />
    </div>
  );
};

export default CgpaGraph;
