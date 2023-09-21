import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import Blog from "./Blog";
import ScrollAnimationWrapper from "./Layouts/ScrollAnimationWrapper";
import ButtonOutline from "./misc/ButtonOutline";
import Subscribe from "./Subscribe";

const MyWork = () => {
  //Animation for scroll
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="mywork"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Uptown Girls Hike
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              This event will provide participants with mindful practices to
              connect with Mother Earth and their intuition through forest
              bathing, meditation, and journaling.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="flex justify-center mx-auto w-full mt-10">
            <ScrollAnimationWrapper className="flex justify-center w-1/2 mx-auto">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 hover:border-green-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 w-[50vw] flex-shrink-0" // Added flex-shrink-0 and ensured w-[50vw]
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/sun.png"
                    width={145}
                    height={165}
                    alt="Energy Reading"
                  />
                </div>
                <p className="text-lg text-black-600 justify-start items-start font-medium capitalize my-2 sm:my-7">
                  What you’ll gain from this experience:{" "}
                </p>
                <ul className="flex flex-col list-inside xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2 icon-forest-bath">
                    Forest Bath Experience (Sound Healing)
                  </li>
                  <li className="relative check custom-list my-2 icon-journaling">
                    Practice intention-setting through Journaling
                  </li>
                  <li className="relative check custom-list my-2 icon-mother-nature">
                    Learn practices for connecting to Mother Nature and your
                    intuition
                  </li>
                  <li className="relative check custom-list my-2 icon-meditation">
                    Guided Meditation
                  </li>
                </ul>

                <div className="flex flex-col w-1/2 justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 "></p>
                  <ButtonOutline className="w-1/2 mx-auto">
                    Schedule
                  </ButtonOutline>{" "}
                  {/* Added w-1/2 and mx-auto to center the button */}
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        <div className="flex flex-col w-full my-16" id="blog">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              My Magical Messages{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Blog />
            </motion.div>
          </ScrollAnimationWrapper>

          <Subscribe />
        </div>
        <Image
          className="z-40 absolute bottom-0 left-[25%]"
          src="/assets/Icon/ktsub.png"
          alt="Subscribe to my newsletter"
          width={55}
          height={144}
        />
      </div>
    </div>
  );
};

export default MyWork;
