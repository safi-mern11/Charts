"use client";
import Charts from "../common/charts";
import { useState } from "react";
const StoreMetrics = () => {
  const [product1Visiability, setproduct1Visiability] = useState(true);
  const [product2Visiability, setproduct2Visiability] = useState(true);
  const [product3Visiability, setproduct3Visiability] = useState(true);
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: ["Product 1"],
        data: [1.8, 2.3, 1.5, 2.3, 1.4, 3, 2.1, 1.8, 4, 3.5, 2.5, 2],
        fill: false,
        backgroundColor: "#064E3B",
        borderColor: "#ffffff",
        borderWidth: 1,
        hidden: product1Visiability == true ? false : true,
        barPercentage: 0.8,
        categoryPercentage: 1,
      },
      {
        label: ["Product 2"],
        data: [2.4, 2.15, 2.2, 2.3, 1.4, 1, 3, 2.4, 1, 2, 1.2, 3],
        fill: false,
        backgroundColor: "#047857",
        borderColor: "#ffffff",
        borderWidth: 1,
        hidden: product2Visiability == true ? false : true,
        barPercentage: 0.8,
        categoryPercentage: 1,
      },
      {
        label: ["Product 2"],
        data: [1.6, 2.15, 1.8, 1, 1.4, 2, 3.6, 2, 2.3, 1.2, 2, 1.4],
        fill: false,
        backgroundColor: "#6EE7B7",
        borderColor: "#ffffff",
        borderWidth: 1,
        hidden: product3Visiability == true ? false : true,
        barPercentage: 0.8,
        categoryPercentage: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      chartAreaBorder: {
        borderColor: "red",
        borderWidth: 2,
        borderDash: [5, 5],
        borderDashOffset: 2,
      },
    },
    scales: {
      x: {
        ticks: {
          padding: 25,
        },
        stacked: true,
        border: {
          display: false,
        },
        grid: {
          display: false,
          lineWidth: 0,
          drawTicks: false,
        },
      },
      y: {
        stacked: true,
        border: {
          display: false,
        },
        grid: {
          drawTicks: false,
        },
        biginAtZero: true,
        ticks: {
          padding: 13,
          callback: (value) => {
            console.log(value);
            let response;
            if (value == 0) {
              response = "$0";
            } else if (value == 1) {
              response = "$5,000";
            } else if (value == 2) {
              response = "$10,000";
            } else if (value == 3) {
              response = "$15,000";
            } else if (value == 4) {
              response = "$20,000";
            } else if (value == 5) {
              response = "$25,000";
            } else if (value == 6) {
              response = "$30,000";
            } else if (value == 7) {
              response = "$35,000";
            } else if (value == 8) {
              response = "$40,000";
            } else if (value == 9) {
              response = "$45,000";
            }
            return response;
          },
        },
      },
    },
  };
  return (
    <>
      <div className="max-w-[857px] w-full mx-auto mt-[200px] flex">
        <Charts type="bar" data={data} options={options} />
        <div className="max-w-[305px] w-full  ml-[25px] mt-[12px]">
          <button
            onClick={() => {
              setproduct3Visiability(!product3Visiability);
            }}
            className=" flex  items-center justify-center gap-[12px]"
          >
            <div className="w-[8px] h-[8px]  rounded-full bg-[#6EE7B7]"></div>
            <span className="relative text-[12px] font-[400] leading-normal text-[#4F4F4F]">
              <div
                className={`absolute top-[8px] z-10 w-full ${
                  product3Visiability !== true && "border-[0.4px]"
                } border-solid border-[#4F4F4F]`}
              ></div>
              Credit
            </span>
          </button>
          <button
            onClick={() => {
              setproduct2Visiability(!product2Visiability);
            }}
            className=" flex items-center justify-center gap-[12px]"
          >
            <div className="w-[8px] h-[8px]  rounded-full bg-[#047857]"></div>
            <span className="relative text-[12px] font-[400] leading-normal text-[#4F4F4F]">
              <div
                className={`absolute top-[8px] z-10 w-full ${
                  product2Visiability !== true && "border-[0.4px]"
                } border-solid border-[#4F4F4F]`}
              ></div>
              Cash
            </span>
          </button>
          <button
            onClick={() => {
              setproduct1Visiability(!product1Visiability);
            }}
            className=" flex items-center justify-center gap-[12px]"
          >
            <div className="w-[8px] h-[8px] rounded-full bg-[#064E3B]"></div>
            <span className="relative text-[12px] font-[400] leading-normal text-[#4F4F4F]">
              <div
                className={`absolute top-[8px] z-10 w-full ${
                  product1Visiability !== true && "border-[0.4px]"
                } border-solid border-[#4F4F4F]`}
              ></div>
              Crypto
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default StoreMetrics;
