import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layouts/ScrollAnimationWrapper";

const socials = [
  { id: 1, src: "/assets/Icon/twitter.svg" },

  { id: 2, src: "/assets/Icon/instagram.svg" },
];

const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/ktabout1.png"
              alt="about-image"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
              className="rounded-md object-contain"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              Bio
            </h3>
            <p className="my-2 text-black-500">
              Kaity Modesto is an Afro-Dominicana from Washington Heights, New
              York City. As a Writer, Published Author and Intuitive
              Communicator, her mission is to deliver messages that will inspire
              and elevate your human experience. She is a proud graduate from
              Union College and holds a Masters in Organizational Leadership
              from Lehman college. More recently, Kaity earned certifications
              from Soul Teacher and Ready Set Coach in 2022.
            </p>

            <p className="my-2 text-black-500">
              As a communications coach, she teaches clients how to embrace
              their inner voice so they can feel more equipped to speak up for
              themselves, follow their true calling, and find mindful practices
              to live a more joyful lifestyle. Kaity loves spending time in
              nature and curating events which evoke stimulating conversations,
              promote community building, and healing.
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
