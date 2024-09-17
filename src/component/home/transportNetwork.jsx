"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

function TransportNetwork() {
  return (
    <div className="lg:px-28 md:px-14  px-5 md:py-28 py-14 primary-bg font-sora">
      <div className=" bg-gradient-to-bl  from-[#222222] from-70% to-[#444444]  md:pl-16   flex md:justify-between justify-center rounded-2xl">
        <div className="flex flex-row justify-between p-5 mt-16 w-full h-auto md:h-[350px]">
            <motion.h1
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: 0,
              transition: { duration: 0.2 },
            }}
            className="md:text-6xl text-2xl md:text-left md:w-[50%] text-center font-bold   md:mx-0 mx-auto"
          >
            <span className="text-white ">
              Step into the spotlight and turn your dreams into reality. Begin
              your modeling journey today!"{" "}
            </span>
          </motion.h1>
          <div className="flex md:flex-row flex-col items-center gap-6 mb-16 mt-auto">
            <Link href={"/contactUs"}>
              <motion.button
                initial={{
                  x: "-100%",
                }}
                whileInView={{
                  x: 0,
                  transition: { duration: 0.5 },
                }}
                type="button"
                className="flex border-2 border-white primary-button md:mx-0 mx-auto w-[30px ]"
              >
                Let's Talk
                <BsArrowUpRight className="text-2xl icon" />

              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransportNetwork;
