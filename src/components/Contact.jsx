import React from "react";
import image from "../assets/contact.png";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex justify-center py-24">
        <hr className="w-196 max-w-full mx-8" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 pb-24">
        <div className="w-120 max-w-screen">
          <img src={image} alt="" />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-4">
            <hr className="w-24" />
            <p className="text-2xl font-black">Contact Me</p>
            <hr className="w-24" />
          </div>

          <input
            className="border outline-0 w-120 max-w-screen px-3 py-2"
            placeholder="Enter Your Name"
            type="text"
          />

          <input
            className="border outline-0 w-120 max-w-screen px-3 py-2"
            placeholder="Enter Your Email"
            type="email"
            name=""
            id=""
          />

          <textarea
            className="border resize-none outline-0 h-40 w-120 max-w-screen px-3 py-2"
            placeholder="Enter Your Message"
            name=""
            id=""
          ></textarea>

          <button className="my-4 py-2 px-4 border cursor-pointer w-fit">
            message.send()
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
