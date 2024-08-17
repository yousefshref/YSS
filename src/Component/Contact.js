import React from "react";

const Contact = () => {
  return (
    <div className="mt-10 md:p-5 p-2">
      <div className="p-3 rounded-xl flex items-center gap-10">
        <h1 className="text md:text-3xl text-xl font-bold ms-32">
          تواصل مع فريق YSS لمساعدتك
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex justify-around gap-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
              alt="YSS contact"
              className="text w-10 h-10 cursor-pointer hover:scale-125 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
