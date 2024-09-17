"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ScrollText from "../scrollText/scrolltext";
import aboutImage from "../../../assets/aboutImage.png"

function AboutUs() {
  return (
    <div className="lg:px-28 md:px-14  px-5 md:py-28 py-14 primary-bg grid grid-cols-3 md:grid-rows-2 md:gap-9 gap-6 font-sora">
      {/* <div className="flex flex-col"> */}
      <motion.div
        initial={{
          x: "-100%",
        }}
        whileInView={{
          x: 0,
          transition: { duration: 0.2 },
        }}
        className="md:text-4xl text-2xl  font-semibold md:col-span-1 col-span-3"
      >
        About Us
      </motion.div>
          <div className="md:col-span-2 col-span-3 md:text-3xl md:row-span-2 w-full">
            <p className="font-extrabold text-[28px]">Professional models and hostesses for global events and campaigns.</p>
            <ScrollText value=" Global Event Hostesses & Modelling Agency specializes in providing top-tier talent for events, fashion shows, and brand campaigns worldwide. With a focus on professionalism, elegance, and style, we offer a diverse roster of models and event hostesses, ensuring a seamless blend of beauty and expertise for any occasion. Our agency is committed to delivering exceptional service to help brands stand out on the global stage." />
          </div>
      <motion.div
        initial={{
          x: "-100%",
        }}
        whileInView={{
          x: 0,
          transition: { duration: 0.2 },
        }}
        className="md:col-span-1 col-span-3 "
      >
        <div className="md:-mt-16 ">
          <Image
            src={aboutImage}
            alt=""
            className="clipImageAbout max-h-[196px] md:max-w-[306px] round-2xl w-full object-cover"
          />
        </div>
      </motion.div>
      {/* </div> */}
    </div>
  );
}

export default AboutUs;
