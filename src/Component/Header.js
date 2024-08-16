import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Header = () => {
  const projects = [
    {
      name: "سيستم ادارة CRM بتصميم خرافي",
      image:
        "https://cdn.dribbble.com/userupload/8791497/file/original-75f4fb5466dee0043a154398d74859e3.png?resize=1024x768",
    },
    {
      name: "سيستم لشركات الشحن يجعل العمل 130% افضل!",
      image:
        "https://cdn.dribbble.com/userupload/15267643/file/original-1dc8433cb877f79900c0107d0136c866.png?resize=752x",
    },
    {
      name: "موقع للتجارة الالكترونية او العادية وادارة المخزون والمنتجات",
      image:
        "https://cdn.dribbble.com/userupload/12295244/file/original-b5385d9d3ca35d3538883e4a06593c6d.jpg?resize=1024x768",
    },
  ];

  useGSAP(() => {
    gsap.from("#bg", {
      duration: 3,
      width: 0,
      height: 0,
      padding: 0,
    });

    gsap.from("#project", {
      height: 0,
      duration: 1,
    });
  }, "header");

  return (
    <header className="flex h-screen flex-col md:p-4 p-1">
      <div className="relative flex flex-col h-full gap-4 bg-slate-200 p-4 rounded-xl overflow-hidden">
        <div
          id="bg"
          className="absolute w-[600px] h-[700px] opacity-45 bg-blue-300 p-44 rotate-45 -right-[350px] -top-[170px]"
        />
        <nav className="flex gap-3 h-[10%] items-center z-10 justify-between">
          <span>
            <img
              src="/images/logo_nobg_dark.png"
              alt="YSS logo"
              className="w-10"
            />
          </span>
          <div className="flex gap-5">
            <button className="btn-black text-sm">تواصل معنا</button>
          </div>
        </nav>
        <div className="flex h-[90%] my-auto flex-col gap-4 z-10">
          <div className="flex md:h-[60%] justify-end w-full max-w-[700px] mx-auto flex-col">
            <p>لا احد يضمن المستقبل...</p>
            <h1 className="md:text-4xl text-3xl font-bold">
              تحول رقميا واجعل علامتك التجارية{" "}
              <span className="glow">تلمع</span> وسط الجميع بطريقتك واسلوبك انت
            </h1>
          </div>
          <div className="flex md:flex-row flex-col gap-5 h-[100%] w-full">
            {projects.map((project, index) => (
              <div
                id="project"
                key={index}
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
                className="relative max-md:h-1/3 md:w-1/3 w-full bg-cover"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
                <div className="flex flex-col text-white w-full h-full absolute z-10 text-wrap justify-center text-center">
                  <p className="text-xl">{project.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
