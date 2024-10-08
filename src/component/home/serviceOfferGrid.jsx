import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import logo_service from "../../../assets/card-logo.svg";
import logo_service_dark from "../../../assets/card-logo-dark.svg";
import Image from "next/image";

function ServiceOfferGrid({ data }) {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Function to toggle showing all items
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    // Check screen size on mount and on resize
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkIsMobile();

    const handleResize = () => {
      checkIsMobile();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate number of items to display based on screen size
  const displayCount =
    showAll || !isMobile ? data.length : Math.min(4, data.length);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
      {data?.slice(0, displayCount).map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ x: "-100%" }}
          whileInView={{
            x: 0,
            transition: { duration: parseFloat(`0.${index}`) },
          }}
        >
          <Link href={item.href}>
            <div
              className={`rounded-2xl hover:bg-black hover:text-white flex flex-col items-center hover:ring-1 hover:ring-[#2684FB] homecardHover md:p-8 p-6 h-[220px]`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex justify-between mb-8">
                <div
                  className={`text-white hover:text-white flex h-[60px] w-[60px] rounded-full`}
                >
                  <Image
                    src={isHovered ? logo_service_dark : logo_service}
                    alt={item?.title}
                  />
                </div>
              </div>
              <div className="font-semibold mb-2 md:text-base text-xs ">
                {item.label}
              </div>
              <div className="flex ">
                <span>Learn more</span>
                <BsArrowUpRight className="text-2xl icon" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
      {/* Show button to toggle displaying more items if not already showing all */}
      {isMobile && !showAll && data.length > 4 && (
        <button className="secondary-button " onClick={toggleShowAll}>
          See all
        </button>
      )}
    </div>
  );
}

export default ServiceOfferGrid;
