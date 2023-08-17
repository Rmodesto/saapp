import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layouts/ScrollAnimationWrapper";

const socials = [
  { id: 1, src: "/assets/Icon/instagram.svg" },
  { id: 2, src: "/assets/Icon/twitter.svg" },
  { id: 3, src: "/assets/Icon/facebook.svg" },
  { id: 4, src: "/assets/Icon/instagram.svg" },
];

const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/About.jpeg"
              alt="about-image"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
              className="rounded-md"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              I've worked with many people in the past
            </h3>
            <p className="my-2 text-black-500">
              My work is about creating a space for you to feel safe and
              supported. I am here to help you find your voice and to help you
              find your way back to yourself. I am here to help you find your
              voice and to help you find your way back to yourself.Lorem Ipsum
              is simply dummy text industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
            </p>

            <div className="text-black-500 self-start flex gap-3 pt-8 ml-0 list-inside">
              {socials.map((social, index) => (
                <motion.div
                  className="relative flex-row cursor-pointer"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={social}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="flex">
                    <Image
                      src={social.src}
                      alt="social-icons"
                      width={24}
                      height={24}
                      className="flex flex-row justify-between items-center"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default About;
