import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useRef } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layouts/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";

const Subscribe = () => {
  // scroll animation

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const firstNameRef = useRef(null);
  const emailRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where the mailchimp request is made

    const res = await fetch("/api/subscribeUser", {
      body: JSON.stringify({
        firstName: firstNameRef.current.value,
        email: emailRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
  };

  return (
    <div className="relative mb-44">
      <ScrollAnimationWrapper className="relative w-full mt-16">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
            <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
              <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                Subscribe to my newsletter
                <br />{" "}
              </h5>
              <p className="pb-8">I look foward to connecting with you soon</p>
              <Image
                className="z-40 absolute bottom-[-44] left-0 object-contain flex justify-center"
                src="/assets/Icon/ktsub.png"
                alt="Subscribe to my newsletter"
                width={144}
                height={233}
              />
            </div>
            <div className="flex flex-col justify-end">
              <form onSubmit={subscribeUser} className="flex flex-col">
                <div className="flex flex-col">
                  <label
                    htmlFor="name-input"
                    className="mb-3 text-sm leading-none text-gray-800"
                  ></label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    tabIndex={0}
                    ref={firstNameRef}
                    required
                    aria-label="Enter first name"
                    className="w-54 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                    defaultValue="First Name"
                  />

                  <div className="flex flex-col">
                    <label
                      htmlFor="email-input"
                      className="mb-3 relative text-sm leading-none text-gray-800"
                    ></label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      ref={emailRef}
                      required
                      tabIndex={0}
                      aria-label="Enter email Address"
                      className="w-54 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 mb-4 border rounded border-gray-200"
                      defaultValue="Email Address"
                    />

                    <ButtonPrimary
                      className="mt-4"
                      onClick={() => {
                        console.log("clicked");
                      }}
                    >
                      Subscribe
                    </ButtonPrimary>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Subscribe;
