"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { ThemeContext } from "../layout/layout";
import v1 from "../../../assets/TrustCompany/Logoes-01.png"; 
import v2 from "../../../assets/TrustCompany/Logoes-02.png"; 
import v3 from "../../../assets/TrustCompany/Logoes-03.png"; 
import v4 from "../../../assets/TrustCompany/Logoes-04.png"; // Added .png extension
import v5 from "../../../assets/TrustCompany/Logoes-05.png"; // Added .png extension
import v6 from "../../../assets/TrustCompany/Logoes-06.png"; // Added .png extension
import v7 from "../../../assets/TrustCompany/Logoes-07.png"; // Added .png extension
import v8 from "../../../assets/TrustCompany/Logoes-08.png"; // Added .png extension
import v9 from "../../../assets/TrustCompany/Logoes-09.png"; // Added .png extension
import v10 from "../../../assets/TrustCompany/Logoes-10.png"; // Added .png extension
import v11 from "../../../assets/TrustCompany/Logoes-11.png"; // Added .png extension
import v12 from "../../../assets/TrustCompany/Logoes-12.png"; // Added .png extension
import v13 from "../../../assets/TrustCompany/Logoes-13.png"; // Added .png extension
import v14 from "../../../assets/TrustCompany/Logoes-14.png"; // Added .png extension
import v15 from "../../../assets/TrustCompany/Logoes-15.png"; // Added .png extension
import v16 from "../../../assets/TrustCompany/Logoes-16.png"; // Added .png extension
import v17 from "../../../assets/TrustCompany/Logoes-17.png"; // Added .png extension
import v18 from "../../../assets/TrustCompany/Logoes-18.png"; // Added .png extension
import v19 from "../../../assets/TrustCompany/Logoes-19.png"; // Added .png extension
import v20 from "../../../assets/TrustCompany/Logoes-20.png"; // Added .png extension
import v21 from "../../../assets/TrustCompany/Logoes-21.png"; // Added .png extension
import v22 from "../../../assets/TrustCompany/Logoes-22.png"; // Added .png extension
import v23 from "../../../assets/TrustCompany/Logoes-23.png"; // Added .png extension
import v24 from "../../../assets/TrustCompany/Logoes-24.png"; // Added .png extension
import v25 from "../../../assets/TrustCompany/Logoes-25.png"; // Added .png extension


function TrustCompany() {
  const [images, setImages] = useState(imagesLight);

  return (
    <div className="lg:py-28 md:py-20 py-14" style={{ backgroundColor: '#020708' }}>
      <h1 className="md:text-4xl text-white text-2xl font-semibold md:mb-16 mb-10 m-auto lg:w-1/2 w-4/5 font-sora text-center">
        Trusted by top global brands for decades.
      </h1>
      <Marquee className="md:mb-[20px] mb-[8px] relative overflow-x-hidden">
        {images?.map((item, index) => {
          return (
            <div
              key={index.toString()}
              className=" md:mr-5 mr-2 flex md:max-w-full max-w-[110px] "
            >
              {/* <div className=''> */}

              <Image
                src={item}
                alt=""
                height={108}
                width={200}
                className="m-auto md:max-h-[100px] max-h-[60px]"
              />
              {/* </div> */}
            </div>
          );
        })}
      </Marquee>
      <Marquee
        className="mb-[20px] relative  overflow-x-hidden"
        direction="right"
      >
        {images?.reverse()?.map((item, index) => {
          return (
            <div
              key={index.toString()}
              className="md:mr-5 mr-2 flex md:max-w-full max-w-[110px]"
            >
              <Image
                src={item}
                alt=""
                height={108}
                width={200}
                className="m-auto md:max-h-[100px] max-h-[60px]"
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default TrustCompany;

const imagesLight = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25];
