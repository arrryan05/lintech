"use client";
import Image from "next/image";
import React from "react";
import { PiDiamondBold } from "react-icons/pi";
import { motion } from "framer-motion";
import CheckingGlobe from "../checkingGlobe/checkingGlobe";
import Link from "next/link";
import logoImage from "../../../assets/Frame 1618868450.png";
import promotion_image from "../../../assets/promotion-image.png";
import globe from "../../../assets/globe.svg";
import check_circle from "../../../assets/Check Circle.svg";

function ImageGrid() {
  return (
    <div className="lg:px-28 md:px-14  px-5 md:py-28 py-14 primary-bg bg-black grid grid-cols-3 gap-6 font-sora ">
      <motion.div
        initial={{
          x: "-100%",
        }}
        className="md:col-span-1 col-span-3"
        whileInView={{
          x: 0,
          transition: { duration: 0.2 },
        }}
      >
        <Image
          src={logoImage}
          alt=""
          height={280}
          width={384}
          className="object-cover rounded-2xl xl:max-h-[280px] lg:max-h-[300px] md:max-h-[287px] max-h-[20  4px]  w-full"
        />
      </motion.div>
      <motion.div
        initial={{
          x: "-100%",
        }}
        whileInView={{
          x: 0,
          transition: { duration: 0.5 },
        }}
        className="xl:p-6 lg:p-4 p-4 gradient-color-card flex flex-col md:flex-row md:justify-between gap-3 rounded-2xl md:col-span-2 col-span-3 xl:max-h-[280px] h-full"
        style={{
          background:
            "linear-gradient(225.55deg, rgba(193, 179, 129, 0) -9.83%, #F4F1EC -9.83%)",
        }}
      >
        <div className="xl:p-10 lg:p-6 p-2 flex flex-col gap-3 rounded-2xl md:col-span-2 col-span-3 xl:max-h-[280px] h-full w-[70%]">
          <div className="md:text-3xl text-xl font-semibold">
            Pose Promotions
          </div>
          <div className="paragraph-color text-md">
            Global Event Hostesses & Modelling Agency specializes in providing
            top-tier talent for events, fashion shows, and brand campaigns
            worldwide. With a focus on professionalism, elegance, and style, we
            offer a diverse roster of models and event hostesses, ensuring a
            seamless blend of beauty and expertise for any occasion.
          </div>
        </div>
        <div className="w-[30%] h-auto overflow-hidden">
          <Image src={promotion_image} className=" w-auto h-full" />
        </div>
      </motion.div>
      {/* <motion.div initial={{
        x: "-100%",
      }}
      whileInView={{
        x: 0,
        transition: { duration: 0.8 },
      }} className="xl:p-10 lg:p-6 p-6 gradient-color-card flex flex-col gap-3 rounded-2xl md:col-span-1 col-span-3 xl:max-h-[280px] h-full">
        <div className="lg:text-[32px] text-[34px] font-semibold">88M</div>
        <div className="lg:text-2xl text-xl font-semibold">Generate Revenue</div>
        <div className="paragraph-color lg:text-sm text-xs">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero hic eaque amet incidunt, earum atque, ad voluptatum placeat totam nihil eum doloremque assumenda at excepturi impedit facilis repellendus tempore dolor perferendis vel deleniti quibusdam. Fuga necessitatibus officiis modi rerum soluta!
        </div>
      </motion.div> */}

      {/* 2nd row  */}
      <motion.div
        initial={{
          x: "-100%",
        }}
        whileInView={{
          x: 0,
          transition: { duration: 0.4 },
        }}
        className=" gradient-color-card flex flex-col md:flex-row justify-between gap-3 rounded-2xl md:col-span-2 col-span-3 xl:max-h-[300px] lg:max-h-[305px] md:max-h-[307px] max-h-[224px] h-full"
      >
        <div className="mt-7 ml-7">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col md:gap-4 gap-5">
              <div className="font-semibold  text-sm">WORLDWIDE REACH </div>
              <div
                className="text-[34px] font-semibold md:block hidden"
                style={{ lineHeight: "42px", textAlign: "left" }}
              >
                <span className="card-text-primary text-[34px] leading-[20px]">
                  {" "}
                  GLOBAL
                </span>
                <br />{" "}
                <span className="card-text-secondary text-[34px]">
                  PRESENCE
                </span>
              </div>
              <div className="text-[32px] font-semibold md:hidden block">
                <span className="card-text-primary text-[28px] leading-[20px]">
                  Lorem, ipsum.
                </span>
              </div>
            </div>

            <Link href={"/contact"}>
              <button
                type="button"
                className="primary-button md:mb-10 mt-4 w-fit text-[14px]"
              >
                Contact us
              </button>
            </Link>
          </div>
          <div className="mt-auto ml-auto w h-fit rounded-br-2xl "></div>
        </div>
        <Image src={globe} className="h-full" />
      </motion.div>

      {/* Globe Rotate */}
      {/* <motion.div
        initial={{
          x: "-100%",
        }}
        whileInView={{
          x: 0,
          transition: { duration: 0.8 },
        }}
        className=" gradient-color-card  md:flex md:flex-col gap-4 rounded-2xl md:col-span-1 col-span-3 xl:max-h-[300px] lg:max-h-[305px] md:max-h-[307px] max-h-[400px]"
      >
        <div className="xl:max-h-[300px] lg:max-h-[305px] md:max-h-[307px] max-h-[494px]">
          <CheckingGlobe />
        </div>
      </motion.div> */}

      <motion.div
        initial={{
          x: "-100%",
        }}
        whileInView={{
          x: 0,
          transition: { duration: 0.8 },
        }}
        className="md:pt-[18px] pt-2 md:px-6 px-6 p bg-[#797979] from-70%   to-[#82A7C6] text-white flex flex-col xl:max-h-[300px] lg:max-h-[305px] md:max-h-[307px] max-h-[300px] md:gap-2 gap-2 rounded-2xl md:col-span-1 col-span-3"
      >
        <div className=" font-semibold md:text-[30px] text-[25px]">
          Benefits
        </div>
        <div className="flex flex-col gap-[10px] pb-3">
          {data.map((item) => (
            <div>
              <div className="flex gap-1 text-[20px] font-light ">
                <Image src={check_circle} className="my-auto font-light" />
                {item}
              </div>
              <div className="border-b border-white my-2" />{" "}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ImageGrid;

const data = ["Booth Build", "Hostesses", "Cameramen", "Dj's"];
