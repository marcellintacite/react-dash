import React from "react";
import { Bar } from "react-chartjs-2";

const state = {
  labels: ["janvier", "Fevrier", "Mars", "Avril", "Mai"],
  datasets: [
    {
      label: "Les gens",
      background: "red",
      borderColor: "grey",
      borderWidth: 3,
      data: [65, 50, 80, 70, 20, 30],
    },
  ],
};

export default function Graph() {
  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Consommation moyenne",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
