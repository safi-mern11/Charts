// "use client";
// import { Chart } from "react-chartjs-2";
// import moment from "moment";
// import { useState } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   Filler,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// );
// const NewChart = () => {
//   const dates = [
//     "2023",
//     "2022",
//     "2021",
//     "2020",
//     "2019",
//     "2018",
//     "2017",
//     "2016",
//     "2015",
//     "2014",
//     "2013",
//     "2012",
//     "2011",
//     "2010",
//     "2009",
//     "2008",
//     "2007",
//     "2006",
//     "2005",
//     "2004",
//     "2003",
//     "2002",
//     "2001",
//     "2000",
//   ];

//   const timeAndDate = [
//     "",
//     "Mon 26-jan-2023 , 1:04 PM",
//     "Mon 26-jan-2023 , 4:04 PM",
//     "Mon 26-jan-2023 , 7:04 PM",
//     "Mon 26-jan-2023 , 10:04 PM",
//     "Mon 27-jan-2023 , 9:04 AM",
//     "Mon 27-jan-2023 , 10:04 AM",
//     "Mon 27-jan-2023 , 1:04 PM",
//     "",
//   ];

//   const getDateTimeInfo = (dateTimeString) => {
//     const timestamp = moment(dateTimeString);
//     const datePart = timestamp.format("MMM DD, YYYY");
//     const timePart = timestamp.format("hh:mmA");

//     return { date: datePart, time: timePart };
//   };

//   const dateTimeInfo = timeAndDate.map((dateTimeString) =>
//     getDateTimeInfo(dateTimeString)
//   );
//   const settingInvalid = dateTimeInfo.map((i) => {
//     if (i.time == "Invalid date") {
//       return { ...i, time: "" };
//     } else {
//       return i;
//     }
//   });
//   const time = settingInvalid.map((i) => i.time);
//   const date = settingInvalid.map((i) => i.date);
//   console.log(date);
//   const data = {
//     labels: time,
//     datasets: [
//       {
//         label: "",
//         data: [47, 48, 47.5, 49, 49.8, 51, 48, 50, 49],
//         borderColor: "#585858",
//         borderWidth: 1.5,
//         backgroundColor: ["rgba(88, 88, 88, 0.2)"],
//         pointBackgroundColor: "transparent",
//         pointHoverBackgroundColor: "rgba(88, 88, 88, 0.2)",
//         pointHoverBorderColor: "#FFFFFF",
//         pointBorderColor: "transparent",
//         pointHoverRadius: 12,
//         pointHoverBorderWidth: 8,
//         fill: true,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         // Disable the on-canvas tooltip
//         enabled: false,

//         external: function (context) {
//           let tooltipEl = document.getElementById("chartjs-tooltip");
//           let customDiv = document.getElementById("custom");
//           let customDiv2;
//           if (!tooltipEl) {
//             tooltipEl = document.createElement("div");
//             tooltipEl.id = "chartjs-tooltip";
//             tooltipEl.innerHTML =
//               "<div id='custom'></div><div id='custom2'></div>";
//             document.body.appendChild(tooltipEl);
//           }

//           const tooltipModel = context.tooltip;
//           if (tooltipModel.opacity === 0) {
//             tooltipEl.style.opacity = 0;
//             return;
//           }

//           function getBody(bodyItem) {
//             return bodyItem.lines;
//           }
//           tooltipEl.classList.remove("above", "below", "no-transform");
//           if (tooltipModel.yAlign) {
//             tooltipEl.classList.add(tooltipModel.yAlign);
//           } else {
//             tooltipEl.classList.add("no-transform");
//           }
//           const span1 = document.createElement("span");
//           //   span1.textContent = "$52.06k";
//           span1.style.fontSize = " 22px";
//           const span2 = document.createElement("span");
//           //   span2.textContent = "Jan26,2024";
//           span2.style.fontSize = "18px";
//           const span3 = document.createElement("span");
//           if (tooltipModel.body) {
//             const titleLines = tooltipModel.title || [];
//             const bodyLines = tooltipModel.body.map(getBody);
//             if (bodyLines.length > 0) {
//               const dataIndex = tooltipModel.dataPoints[0].dataIndex;
//               const hoveredDate = date[dataIndex];
//               span2.textContent = hoveredDate;
//             }
//             titleLines.forEach((element) => {
//               span3.textContent = element;
//             });
//             bodyLines.forEach((body) => {
//               span1.textContent = "$" + "" + body + "" + "k";
//             });
//           }
//           span1.style.fontWeight = "520";
//           // Append the span elements to the custom div
//           customDiv = document.getElementById("custom");
//           customDiv.innerHTML = ""; // Clear any existing content
//           customDiv.style.display = "flex";
//           customDiv.style.flexDirection = "column";
//           customDiv.style.gap = "13px";
//           customDiv.appendChild(span1);
//           customDiv.appendChild(span2);

//           span3.style.fontSize = "18px";

//           // Append span3 to customDiv2
//           customDiv2 = document.getElementById("custom2");
//           customDiv2.innerHTML = ""; // Clear any existing content
//           customDiv2.style.marginTop = "44px";
//           customDiv2.appendChild(span3);
//           const position = context.chart.canvas.getBoundingClientRect();
//           tooltipEl.style.justifyContent = "space-between";
//           tooltipEl.style.opacity = 1;
//           tooltipEl.style.position = "absolute";
//           tooltipEl.style.left =
//             position.left +
//             window.pageXOffset +
//             tooltipModel.caretX -
//             190 +
//             "px";
//           tooltipEl.style.display = "flex";
//           tooltipEl.style.top =
//             position.top + window.pageYOffset + tooltipModel.caretY + 40 + "px";
//           tooltipEl.style.padding = "30px";
//           tooltipEl.style.border = "1px solid #ffffff1a";
//           tooltipEl.style.color = "#ffffff";
//           tooltipEl.style.width = "380px";
//           tooltipEl.style.height = "120px";
//           tooltipEl.style.backgroundColor = "#000000";
//           tooltipEl.style.borderRadius = "15px";
//           tooltipEl.style.pointerEvents = "none";
//         },
//       },
//     },

//     interaction: {
//       intersect: false,
//       mode: "index",
//     },
//     scales: {
//       y: {
//         ticks: {
//           maxTicksLimit: 5,
//           font: {
//             size: 20,
//           },
//           padding: 16,
//           callback: (value) => {
//             return value + "k";
//           },
//         },
//         border: {
//           display: false,
//           // dash: [4, 4],
//         },
//         grid: {
//           color: "#585858",
//           drawTicks: false,
//         },
//       },
//       x: {
//         border: {
//           //   display: false,
//           //   dash: [4, 4],
//         },
//         ticks: {
//           //   labelOffset: 125,
//           font: {
//             size: 20,
//           },
//           padding: 22,
//         },
//         grid: {
//           color: "#585858",
//           //   display: false,
//           drawTicks: false,
//         },
//       },
//     },
//   };
//   return (
//     <div className="w-full h-full my-[100px]">
//       <div className="mx-auto max-w-[1560px] w-full h-fit bg-[#15151e1a] border-solid border-[1px] border-[#585858] rounded-[24px] shadow  pt-[51px] pb-[29px] pl-[52px] pr-[35px] ">
//         <div className="flex text-[#fff] text-[50px] tracking-[-1.5px] leading-[60px] pl-[30px] max-w-[1080px] relative">
//           <span className="pt-[60px] font-[400] PPNeue500">
//             If You Invested{" "}
//           </span>
//           <span className="pt-[60px] ml-[16px] mr-[16px] border-solid border-[#fff] border-b-[3.5px] h-fit denton">
//             $32,000
//           </span>
//           <span className="pt-[60px] font-[400] pr-[16px]">From</span>
//           <div className="flex flex-col font-[400] PPNeue500 max-h-[170px] gradient overflow-y-auto">
//             {dates.map((i) => (
//               <span >{i}</span>
//             ))}
//           </div>
//           <span className="pt-[60px] denton">Then Today's Value</span>
//           {/* <div className="w-[120px] h-[50px] absolute top-0 right-[355px] bg-gradient-to-b from-[#68585833] to-transparent"></div>
//           <div className="w-[120px] h-[50px] absolute bottom-0 right-[355px] bg-gradient-to-t from-[#68585833] to-transparent"></div> */}
//         </div>
//         <div className="mt-[52px] pl-[30px]  flex gap-[15px]">
//           <span className="PPNeue500 text-[#fff] font-[400] text-[33.333px] leading-[33.333px] tracking-[-0.666px] ">
//             Account Growth
//           </span>
//           <div className="py-[4px] pl-[11px] pr-[13px] rounded-[72.22px] bg-[#ffffff1a]">
//             <span className="text-[#53E894] text-[17px] font-[400] leading-[23.33px] PPNeue500 ">
//               + 1.5%
//             </span>
//           </div>
//         </div>
//         <div id="relative" className="h-fit w-full relative overflow-x-hidden">
//           <Chart
//             type={"line"}
//             data={data}
//             width={620}
//             height={200}
//             options={options}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewChart;
