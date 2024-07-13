"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Charts from "../common/charts";
import { useState } from "react";
const roboto400 = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const roboto600 = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const roboto500 = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});
const PrimaryText = () => {
  const [product1Visiability, setproduct1Visiability] = useState(true);
  const [product2Visiability, setproduct2Visiability] = useState(true);
  const [product3Visiability, setproduct3Visiability] = useState(true);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mai"],
    datasets: [
      {
        label: "Product 1",
        data: [1.2, 4.15, 1.2, 2.3, 0.4],
        fill: false,
        backgroundColor: "#FFA5CB",
        borderColor: "#F765A3",
        borderWidth: 1,
        hidden: product1Visiability == true ? false : true,
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: "Product 2",
        data: [1.6, 4, 2.4, 1.6, 4.9],
        fill: false,
        backgroundColor: "#E697FF",
        borderColor: "#A155B9",
        borderWidth: 1,
        hidden: product2Visiability == true ? false : true,
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: "Product 3",
        data: [0.6, 1.5, 1.9, 3.2, 0.3, , 6],
        fill: false,
        backgroundColor: "#63ABFD",
        borderColor: "#165BAA",
        borderWidth: 1,
        hidden: product3Visiability == true ? false : true,
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };
  const options = {
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          tickLength: 0,
          drawBorder: false,
        },
        biginAtZero: true,
        ticks: {
          callback: (value) => {
            console.log(value);
            let response;
            if (value == 0) {
              response = 0;
            } else if (value == 1) {
              response = 20;
            } else if (value == 2) {
              response = 40;
            } else if (value == 3) {
              response = 60;
            } else if (value == 4) {
              response = 80;
            } else if (value == 5) {
              response = 100;
            } else if (value == 6) {
              response = 120;
            }
            return response;
          },
        },
      },
      y: {
        grid: {
          tickLength: 0,
          drawBorder: false,
        },
      },
    },
  };
  return (
    <div className="max-w-[430px] w-full  mx-auto">
      <div className="py-[27.5px] pl-[45px] pr-[37px] flex items-start justify-between">
        <div>
          <h1
            className={`${roboto600.className}  leading-normal  text-[#828282]`}
          >
            PRIMARY TEXT
          </h1>
          <h1
            className={`${roboto500.className} text-[40px] leading-normal tracking-[-1.5px] text-[#0B1354]`}
          >
            5.987,37
          </h1>
          <h1
            className={`${roboto400.className} text-[14px] leading-normal text-[#4F4F4F]`}
          >
            Secondary text
          </h1>
        </div>
        <Image src="/details.svg" width={24} height={24} />
      </div>
      <div className="border-[2px] border-solid border-[#ECECEC] pt-[18px] pl-[29px] pr-[9px] pb-[31px]">
        <Charts type="bar" data={data} options={options} />
        <div className="max-w-[305px] w-full flex justify-between ml-[25px] mt-[25px]">
          <button
            onClick={() => {
              setproduct1Visiability(!product1Visiability);
            }}
            className=" flex items-center justify-center gap-[9px]"
          >
            <div className="w-[24px] h-[8px] bg-[#FFA5CB]"></div>
            <span className="relative text-[12px] font-[400] leading-normal text-[#4F4F4F]">
              <div
                className={`absolute top-[8px] z-10 w-full ${
                  product1Visiability !== true && "border-[0.4px]"
                } border-solid border-[#4F4F4F]`}
              ></div>
              Product 1
            </span>
          </button>
          <button
            onClick={() => {
              setproduct2Visiability(!product2Visiability);
            }}
            className=" flex items-center justify-center gap-[9px]"
          >
            <div className="w-[24px] h-[8px] bg-[#E697FF]"></div>
            <span className="relative text-[12px] font-[400] leading-normal text-[#4F4F4F]">
              <div
                className={`absolute top-[8px] z-10 w-full ${
                  product2Visiability !== true && "border-[0.4px]"
                } border-solid border-[#4F4F4F]`}
              ></div>
              Product 2
            </span>
          </button>
          <button
            onClick={() => {
              setproduct3Visiability(!product3Visiability);
            }}
            className=" flex items-center justify-center gap-[9px]"
          >
            <div className="w-[24px] h-[8px] bg-[#63ABFD]"></div>
            <span className="relative text-[12px] font-[400] leading-normal text-[#4F4F4F]">
              <div
                className={`absolute top-[8px] z-10 w-full ${
                  product3Visiability !== true && "border-[0.4px]"
                } border-solid border-[#4F4F4F]`}
              ></div>
              Product 3
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimaryText;
