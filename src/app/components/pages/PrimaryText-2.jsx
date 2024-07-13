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

export default function PrimaryText2() {
  const [product1Visiability, setproduct1Visiability] = useState(true);
  const [product2Visiability, setproduct2Visiability] = useState(true);
  const [product3Visiability, setproduct3Visiability] = useState(true);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", ""],
    datasets: [
      {
        label: "Product 1",
        data: [1, 2, 1, 5, 3, 4, 1],
        fill: false,
        borderColor: "#165BAA",
        hidden: product1Visiability == true ? false : true,
        pointBackgroundColor: [
          "#165BAA",
          "#165BAA",
          "transparent",
          "#165BAA",
          "#165BAA ",
          "#165BAA ",
          "#165BAA",
        ],
        pointBorderColor: [
          "#165BAA",
          "#165BAA",
          "transparent",
          "#165BAA",
          "#165BAA ",
          "#165BAA ",
          "#165BAA",
        ],
      },
      {
        label: "Product 2",
        data: [2, 1, 2, 1, 0, 1, 2],
        fill: false,
        borderColor: "#F765A3",
        hidden: product2Visiability == true ? false : true,
        pointBackgroundColor: "#F765A3",
        pointBackgroundColor: [
          "#F765A3",
          "#F765A3",
          "transparent",
          "#F765A3",
          "#F765A3",
          "#F765A3",
          "#F765A3",
        ],
        pointBorderColor: [
          "#F765A3",
          "#F765A3",
          "transparent",
          "#F765A3",
          "#F765A3",
          "#F765A3",
          "#F765A3",
        ],
      },
      {
        label: "Product 3",
        data: [3, 4, 3, 2, 1, 2, 3, 6],
        fill: false,
        borderColor: "#A155B9",
        hidden: product3Visiability == true ? false : true,
        pointBackgroundColor: "#A155B9",
        pointBackgroundColor: [
          "#A155B9",
          "#A155B9",
          "transparent",
          "#A155B9",
          "#A155B9 ",
          "#A155B9 ",
          "#A155B9",
        ],
        pointBorderColor: [
          "#A155B9",
          "#A155B9",
          "transparent",
          "#A155B9",
          "#A155B9 ",
          "#A155B9 ",
          "#A155B9",
        ],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          align: "start",
          labelOffset: 55,
        },
        grid: {
          tickLength: 0,
          drawBorder: false,
        },
      },
      y: {
        grid: {
          tickLength: 0,
          drawBorder: false,
        },
        biginAtZero: true,
        ticks: {
          padding: 14,
          callback: (value) => {
            console.log(value);
            let response;
            if (value == 0) {
              response = -100;
            } else if (value == 1) {
              response = -60;
            } else if (value == 2) {
              response = -20;
            } else if (value == 3) {
              response = 0;
            } else if (value == 4) {
              response = 20;
            } else if (value == 5) {
              response = 60;
            } else if (value == 6) {
              response = 100;
            }
            return response;
          },
        },
      },
    },
  };

  return (
    <>
      <div className="max-w-[882px] w-full mx-auto ">
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
        <div className="border-[2px] border-solid border-[#ECECEC] pt-[18px] pl-[29px] pr-[37px] pb-[31px]">
          <Charts
            type="line"
            data={data}
            options={options}
            width={816}
            height={197}
          />
          <div className="max-w-[305px] w-full flex justify-between ml-[53px] mt-[25px]">
            <button
              onClick={() => {
                setproduct1Visiability(!product1Visiability);
              }}
              className=" flex items-center justify-center gap-[9px]"
            >
              <div className="w-[24px] h-[8px] bg-[#165BAA]"></div>
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
                setproduct3Visiability(!product3Visiability);
              }}
              className=" flex items-center justify-center gap-[9px]"
            >
              <div className="w-[24px] h-[8px] bg-[#A155B9]"></div>
              <span className="relative text-[12px] font-[400] leading-normal text-[#4F4F4F]">
                <div
                  className={`absolute top-[8px] z-10 w-full ${
                    product3Visiability !== true && "border-[0.4px]"
                  } border-solid border-[#4F4F4F]`}
                ></div>
                Product 2
              </span>
            </button>
            <button
              onClick={() => {
                setproduct2Visiability(!product2Visiability);
              }}
              className=" flex items-center justify-center gap-[9px]"
            >
              <div className="w-[24px] h-[8px] bg-[#F765A3]"></div>
              <span className="relative text-[12px] font-[400] leading-normal text-[#4F4F4F]">
                <div
                  className={`absolute top-[8px] z-10 w-full ${
                    product2Visiability !== true && "border-[0.4px]"
                  } border-solid border-[#4F4F4F]`}
                ></div>
                Product 3
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
