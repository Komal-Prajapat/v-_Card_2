import React from "react";
import Contact_Icon from "../Contact_Icon";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Home = () => {
  return (
    <div className="text-center bg-black">
      <img
        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
        alt=""
        className="h-[200px] w-full"
      />

      <div className="w-full h-[100px] mt-[-70px] relative rounded-full overflow-hidden  bg-white flex ml-[100px]">
        <div className="div">
          <img
            className=" h-full object-cover rounded-full border-2  border-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFb6FyQeCKb0i4kDlmB_qLNGWVwJ7msimfhA&usqp=CAU"
            alt=""
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="800">
          <h1 className="mt-2 font-bold text-3xl-blue-400 ml-14 text-center hover:scale-x-100 ">
            I-SoftZone
          </h1>
          <p className="text-sm mb-3 animate__animated mt-1 ml-16 hover:scale-10 ">
            Pranay Gupta
          </p>
        </div>
      </div>

      <Contact_Icon />

      <div data-aos="zoom-in-up" data-aos-duration="800">
        <p className="mt-3 w-[85%] m-auto text-white pb-3 text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          soluta, dolores odio eum saepe molestias.
        </p>
      </div>
    </div>
  );
};

export default Home;
