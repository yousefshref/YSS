import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Projects = () => {
  useGSAP(() => {
    gsap.from("#element", {
      duration: 1,
      opacity: 0,
      marginTop: "100px",
      scrollTrigger: {
        trigger: "#element",
        start: "top 80%", // animation starts when the element reaches 80% from the top of the viewport
        end: "top 20%", // animation ends when the element reaches 20% from the top of the viewport
        scrub: true, // smooth animation on scroll
      },
    });
    gsap.from("#element2", {
      duration: 1,
      opacity: 0,
      marginTop: "100px",
      scrollTrigger: {
        trigger: "#element2",
        start: "top 100%", // animation starts when the element reaches 80% from the top of the viewport
        end: "top 0%", // animation ends when the element reaches 20% from the top of the viewport
        scrub: true, // smooth animation on scroll
      },
    });
  });
  return (
    <div className="md:p-4 p-2 mt-52 flex flex-col">
      <div className="flex flex-col">
        <p id="element" className="tracking-wider">
          نملك مشاريع كبيرة
        </p>
        <p id="element" className="text-3xl">
          ولكن لدينا افضل مشروع حتى الأن
        </p>
      </div>
      <div className="mt-20 flex flex-col">
        <div className="flex md:flex-row flex-col items-center">
          <img
            id="element"
            src="https://cdn.dribbble.com/userupload/9643919/file/original-964e7c7ed9c77cfa90cf565645804613.png?resize=1504x1128"
            alt=""
            className="md:w-[60%]"
          />
          <div className="flex flex-col gap-4 max-md:mt-1 md:-ms-3">
            <h2 id="element" className="text-3xl font-bold">
              سيستم متاجر بيع وشراء اي شئ!
            </h2>
            <p id="element">مثل الملابس, السوبر ماركت او اي شئ يباع حرفيًا🤷‍♂️</p>
          </div>
        </div>
        <div className="flex md:flex-row-reverse flex-col items-center mt-5">
          <img
            src="https://cdn.dribbble.com/userupload/15813510/file/original-b6aa12fa97fc8c3e619dad9bae0558de.png?resize=752x564"
            alt=""
            id="element2"
            className="md:w-[60%]"
          />
          <div className="flex flex-col gap-4 -me-3 z-10">
            <h2 id="element2" className="text-3xl font-bold">
              يمكنك تغييره حسب رؤيتك
            </h2>
            <p id="element2">
              اجعل الناس تراك برؤيتك وشخصية علامتك التجارية باحتراف
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-around w-full max-w-[80%] mx-auto gap-3 mt-10">
          <div className="flex flex-col p-3 md:w-[47%] w-full bg-black text-white px-2 justify-center items-center">
            <strong>تتبع المخزون</strong>
            <p>تتبع المنتجات لحظة بلحظة</p>
          </div>
          <div className="flex flex-col p-3 md:w-[47%] w-full bg-white text-black px-2 justify-center items-center">
            <strong>تقارير بأفضل المنتجات</strong>
            <p>يساعدك في اتخاذ قراراتك, هل تشتري المزيد ام لا؟</p>
          </div>
          <div className="flex flex-col p-3 md:w-[47%] w-full bg-white text-black px-2 justify-center items-center">
            <strong>متجر الكتروني</strong>
            <p>ستكون قادرًا علي الظهور علي الانترنت بطريقتك!</p>
          </div>
          <div className="flex flex-col p-3 md:w-[47%] w-full bg-black text-white px-2 justify-center items-center">
            <strong>انسى الورق والقلم</strong>
            <p>
              لن تحتاج الي التعامل بالورق والقلام, فهذا غير مجدي وستضيع وقتك...
              كل ما تحتاجة هو هاتفك
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
