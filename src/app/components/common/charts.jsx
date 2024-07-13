"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Charts = ({ type, data, options, width, height }) => {
  return (
    <>
      <Chart
        type={type}
        data={data}
        options={options}
        width={width}
        height={height}
      />
    </>
  );
};

export default Charts;
