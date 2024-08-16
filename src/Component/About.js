import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.from("#img", {
      duration: 1,
      opacity: 0,
      width: 3,
      rotate: 0,
      stagger: 0.4,
      scrollTrigger: {
        trigger: "#img",
        start: "top 80%", // animation starts when the element reaches 80% from the top of the viewport
        end: "top 20%", // animation ends when the element reaches 20% from the top of the viewport
        scrub: true, // smooth animation on scroll
      },
    });

    gsap.from("#system", {
      duration: 1,
      opacity: 0,
      marginTop: "100px",
      scrollTrigger: {
        trigger: "#system",
        start: "top 80%", // animation starts when the element reaches 80% from the top of the viewport
        end: "top 20%", // animation ends when the element reaches 20% from the top of the viewport
        scrub: true, // smooth animation on scroll
      },
    });

    gsap.from("#whitebg", {
      duration: 1,
      height: 0,
      marginTop: "100px",
      scrollTrigger: {
        trigger: "#system",
        start: "top 100%", // animation starts when the element reaches 80% from the top of the viewport
        end: "top 60%", // animation ends when the element reaches 20% from the top of the viewport
        scrub: true, // smooth animation on scroll
      },
    });
  });
  return (
    <div className="md:p-4 p-2 mt-20">
      <div className="p-4 relative rounded-2xl md:h-screen bg-zinc-800 text-white flex flex-col">
        <div className="w-full h-full absolute top-0 right-0 overflow-hidden">
          <div
            id="whitebg"
            className="flex justify-center items-center flex-col h-[100px] absolute left-4 w-full text-black overflow-hidden max-w-[300px] top-0 bg-white"
          >
            <p>حول جميع ما في مخيلتم الي حقيقة</p>
          </div>
        </div>
        <h1 className="text-xl font-bold text-zinc-300 sm:block hidden">
          ما الذي يمكن استفادته من YSS ؟
        </h1>
        <div className="w-full flex flex-col gap-4 md:mt-10 mt-20">
          <div className="ms-5 flex items-center w-fit relative">
            <h1 className="text-4xl font-bold mt-10 z-10">
              تطوير برامح الويب والهواتف
            </h1>
            <div className="flex flex-col">
              <img
                id="img"
                src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
                alt=""
                className="w-10 -rotate-45 absolute left-0 top-0 -ms-4"
              />
              <img
                id="img"
                src="https://cdn-icons-png.flaticon.com/512/7991/7991055.png"
                alt=""
                className="w-14 rotate-12 absolute left-0 top-20 -ms-0"
              />
              <img
                id="img"
                src="https://cdn-icons-png.flaticon.com/512/226/226770.png"
                alt=""
                className="w-10 -rotate-45 absolute left-20 top-20 -ms-8"
              />
            </div>
          </div>
          <div className="flex mt-10 w-full justify-end">
            <div className="flex flex-col me-10">
              <h1
                id="system"
                className="md:text-4xl text-2xl font-bold mt-10 z-10 w-full"
              >
                انظمة ادارة الشركات / المشاريع (SYSTEM)
              </h1>
              <img
                src="https://cdn-icons-png.flaticon.com/512/6858/6858097.png"
                alt=""
                className="w-full mt-0"
                id="system"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
