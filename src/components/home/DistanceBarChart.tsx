import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function DistanceBarChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Distance (km)",
        data: [120, 150, 110, 180, 160, 190, 200],
        backgroundColor: "#10b981",
      },
    ],
  };

  return <Bar data={data} />;
}
