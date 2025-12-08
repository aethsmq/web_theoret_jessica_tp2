import Chart from "https://esm.sh/chart.js/auto";

new Chart(document.querySelector("#a").getContext("2d"), {
  type: "bar",
  data: {
    labels: ["shooting stars", "Is this love", "LEFT RIGHT", "WOKE UP"],
    datasets: [
      {
        label: "number of streams",
        data: [184, 77, 177, 133],
        backgroundColor: ["#ffff"],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "popularity of albums",
        color: "#fff",
        font: {
          family: "jura",
          size: 16,
          weight: "700",
        },
        padding: { top: 15, bottom: 10 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,

        title: {
          display: true,
          text: "% of streams",
        },
        grid: {
          color: "rgba(222, 222, 222, 0.1)",
          lineWidth: 1,
        },
        border: {
          color: "rgba(222, 222, 222, 0.1)",
          width: 2,
          dash: [10, 10],
        },
        ticks: {
          display: true,
          color: "#fff",
          font: {
            family: "jura",
            size: 11,
            weight: "500",
          },
          maxTicksLimit: 6,
          mirror: false,
          z: 1,
          callback: (v) => v + "M",
        },
      },

      x: {
        title: {
          text: "names of the songs",
          display: true,
        },
        ticks: {
          display: true,
          color: "#fff",
          font: {
            family: "Arial",
            size: 11,
            weight: "500",
          },
          mirror: false,
        },
        grid: {
          color: "rgba(222, 222, 222, 0.1)",
          lineWidth: 1,
        },
        border: {
          color: "rgba(222, 222, 222, 0.1)",
          width: 2,
          dash: [10, 10],
        },
      },
    },
  },
});
