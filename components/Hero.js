import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layouts/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <div
      className="relative w-full top-0 bg-white-300 mt-20 z-1 px-8 xl:px-16 mx-auto h-[500px] md:h-[700px] lg:h-[900px]"
      id="home"
    >
      <Image
        src="/assets/Icon/kthero1.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}
          >
            <div className=" flex flex-col justify-center col-start-1 col-end-2 row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-Lora font-bold text-white-500 leading-normal">
                Hola, I am <strong>Kaity</strong>.
              </h1>
              <p className="text-white-500 mt-4 mb-6">
                Find balance in your peronsal and spiritual life. Learn to
                communicate<br></br> with your authentic voice intuitively.
              </p>
              <LinkScroll
                className="mr-64"
                activeClass="active"
                to="mywork"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("mywork");
                }}
              >
                <ButtonPrimary
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Learn More
                </ButtonPrimary>
              </LinkScroll>
            </div>
            <div className="flex w-full">
              <motion.div
                className="h-full w-full"
                variants={scrollAnimation}
              ></motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>

      <div
        className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
        style={{ filter: "blur(114px)" }}
      ></div>
    </div>
  );
};

export default Hero;
