import Image from "next/image";
import React, { useState } from "react";
import FAQs from "../../components/FAQs";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import Terms from "../../components/Terms";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Logo from "/public/assets/ktmm.svg";

const Footer = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isFAQsOpen, setIsFAQsOpen] = useState(false);

  const handleClick = (type) => {
    if (type === "Terms") {
      setIsTermsOpen(!isTermsOpen);
    } else if (type === "PrivacyPolicy") {
      setIsPrivacyPolicyOpen(!isPrivacyPolicyOpen);
    } else if (type === "FAQs") {
      setIsFAQsOpen(!isFAQsOpen);
    }
  };

  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image src={Logo} className="h-4 w-auto mb-4" />
          <p className="mb-4">
            <strong className="font-medium">Kaity's Magical Passage</strong> is
            a spiritual coaching program that helps you communicate intuitively.
          </p>

          <div className="flex w-full mt-2 mb-8 -mx-2">
            <a href="https://www.facebook.com/soulamiga/">
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md hover:shadow-xl cursor-pointer">
                <Image src={Facebook} className="h-6 w-6" />
              </div>
            </a>

            <a href="https://www.facebook.com/soulamiga/">
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md hover:shadow-xl cursor-pointer">
                <Image src={Twitter} className="h-6 w-6" />
              </div>
            </a>

            <a href="https://www.facebook.com/soulamiga/">
              <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md hover:shadow-xl cursor-pointer ">
                <Image src={Instagram} className="h-6 w-6" />
              </div>
            </a>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Kaity's Magical Passage LLC
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Services</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              My Work{" "}
            </li>

            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              Store{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
            <li
              className="my-2 hover:text-green-500 cursor-pointer transition-all"
              onClick={() => handleClick("FAQs")}
            >
              FAQs
            </li>
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              Resources{" "}
            </li>
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              About{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Legal</p>
          <ul className="text-black-500">
            <li
              className="my-2 hover:text-green-500 cursor-pointer transition-all"
              onClick={() => handleClick("PrivacyPolicy")}
            >
              Privacy Policy{" "}
            </li>

            <li
              className="my-2 hover:text-green-500 cursor-pointer transition-all"
              onClick={() => handleClick("Terms")}
            >
              Terms of Service{" "}
            </li>
          </ul>

          <div>
            {isFAQsOpen && <FAQs />}
            {isPrivacyPolicyOpen && <PrivacyPolicy />}
            {isTermsOpen && <Terms />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
