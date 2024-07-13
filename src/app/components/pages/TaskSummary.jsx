"use client";

import { Line } from "react-chartjs-2";
import Charts from "../common/charts";
import { useState } from "react";

const TaskSummary = () => {
  const [product1Visiability, setproduct1Visiability] = useState(true);
  const [product2Visiability, setproduct2Visiability] = useState(true);
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "july",
      "Aug",
      "Sep",
      "",
    ],
    datasets: [
      {
        label: "Product 1",
        data: [2, 1.95, 2.6, 4, 4.8, 4.8, 4.77, 4.77, 4.81, 3.9],
        borderColor: "#1D4ED8",
        borderWidth: 2,
        backgroundColor: "#EFF6FF",
        hidden: product1Visiability == true ? false : true,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "#1D4ED8",
        pointHoverBorderColor: "#FFFFFF",
        tension: 0.4,
        pointBorderColor: "transparent",
        pointHoverRadius: 3.5,
        pointHoverBorderWidth: 2.5,
        fill: 1,
        order: 1,
      },
      {
        label: "Product 2",
        data: [0.9, 0.8, 0.78, 1.2, 2, 2.1, 2.1, 2.1, 2.1, 1.1, 6],
        backgroundColor: "#FEE2E2",
        borderColor: "#DC2626",
        borderWidth: 2,
        hidden: product2Visiability == true ? false : true,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "#DC2626",
        pointHoverBorderColor: "#FFFFFF",
        tension: 0.4,
        pointBorderColor: "transparent",
        pointHoverRadius: 3.5,
        pointHoverBorderWidth: 2.5,
        fill: true,
      },
    ],
  };
  const hoverLine = {
    id: "hoverLine",
  };
  const options = {
    // plugins: {
    //   tooltip: {
    //     // Disable the on-canvas tooltip
    //     enabled: false,

    //     external: function (context) {
    //       // Tooltip Element
    //       let tooltipEl = document.getElementById("chartjs-tooltip");

    //       // Create element on first render
    //       if (!tooltipEl) {
    //         tooltipEl = document.createElement("div");
    //         tooltipEl.id = "chartjs-tooltip";
    //         tooltipEl.innerHTML = "<table></table>";
    //         document.body.appendChild(tooltipEl);
    //       }

    //       // Hide if no tooltip
    //       const tooltipModel = context.tooltip;
    //       if (tooltipModel.opacity === 0) {
    //         tooltipEl.style.opacity = 0;
    //         return;
    //       }

    //       // Set caret Position
    //       tooltipEl.classList.remove("above", "below", "no-transform");
    //       if (tooltipModel.yAlign) {
    //         tooltipEl.classList.add(tooltipModel.yAlign);
    //       } else {
    //         tooltipEl.classList.add("no-transform");
    //       }

    //       function getBody(bodyItem) {
    //         return bodyItem.lines;
    //       }

    //       // Set Text
    //       if (tooltipModel.body) {
    //         const titleLines = tooltipModel.title || [];
    //         const bodyLines = tooltipModel.body.map(getBody);

    //         let innerHtml = "<thead>";

    //         titleLines.forEach(function (title) {
    //           innerHtml += "<tr><th>" + title + "</th></tr>";
    //         });
    //         innerHtml += "</thead><tbody>";

    //         bodyLines.forEach(function (body, i) {
    //           const colors = tooltipModel.labelColors[i];
    //           let style = "background:" + colors.backgroundColor;
    //           style += "; border-color:" + colors.borderColor;
    //           style += "; border-width: 2px";
    //           const span = '<span style="' + style + '">' + body + "</span>";
    //           innerHtml += "<tr><td>" + span + "</td></tr>";
    //         });
    //         innerHtml += "</tbody>";

    //         let tableRoot = tooltipEl.querySelector("table");
    //         tableRoot.innerHTML = innerHtml;
    //       }

    //       const position = context.chart.canvas.getBoundingClientRect();
    //       //   const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

    //       // Display, position, and set styles for font
    //       tooltipEl.style.opacity = 1;
    //       tooltipEl.style.position = "absolute";
    //       tooltipEl.style.left =
    //         position.left + window.pageXOffset + tooltipModel.caretX + "px";
    //       tooltipEl.style.top =
    //         position.top + window.pageYOffset + tooltipModel.caretY + "px";
    //       //   tooltipEl.style.font = bodyFont.string;
    //       tooltipEl.style.padding =
    //         tooltipModel.padding + "px " + tooltipModel.padding + "px";
    //       tooltipEl.style.pointerEvents = "none";
    //     },
    //   },
    // },
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: [hoverLine],
    scales: {
      y: {
        ticks: {
          padding: 16,
          callback: (value) => {
            let response;
            if (value == 0) {
              response = 50;
            } else if (value == 1) {
              response = 60;
            } else if (value == 2) {
              response = 70;
            } else if (value == 3) {
              response = 80;
            } else if (value == 4) {
              response = 90;
            } else if (value == 5) {
              response = 100;
            } else if (value == 6) {
              response = 110;
            }
            return response;
          },
        },
        border: {
          display: false,
          dash: [4, 4],
        },
        grid: {
          drawTicks: false,
        },
      },
      x: {
        border: {
          display: false,
          //   dash: [4, 4],
        },
        ticks: {
          labelOffset: 25,
          padding: 22,
        },
        grid: {
          display: false,
          drawTicks: false,
        },
      },
    },
  };
  return (
    <>
      <div className="mx-auto max-w-[550px] w-full ">
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default TaskSummary;
