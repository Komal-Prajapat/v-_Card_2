import React from "react";
import Contact_Icon from "../Contact_Icon";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Home = () => {
  return (
    <div className="text-center bg-black">
      <img
        src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
        alt=""
        className="h-[200px] sm:h-[300px] w-full object-cover"
      />

      <div className="profile flex">
        <div className="log relative -top-14   rounded-l-2xl w-[100px]  ml-10 z-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFb6FyQeCKb0i4kDlmB_qLNGWVwJ7msimfhA&usqp=CAU"
            alt=""
            className="rounded-full "
          />
        </div>
        <div className="name">
          <h1 className=" bg-white  h-[90px] w-[240px] relative -top-12 -left-14 ">
            Lorem, ipsum dolor.
          </h1>
        </div>
      </div>

      {/* <div className="w-full relative rounded-full overflow-hidden bg-white flex ml-4 sm:ml-0">
        <div className="div">
          <img
            className=" w-full object-cover rounded-full border-2 border-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFb6FyQeCKb0i4kDlmB_qLNGWVwJ7msimfhA&usqp=CAU"
            alt=""
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="800">
          <h1 className="mt-2 font-bold text-3xl sm:text-4xl text-blue-400 ml-4 sm:ml-14 text-center hover:scale-x-100">
            I-SoftZone
          </h1>
          <p className="text-sm sm:text-base mb-3 animate__animated mt-1 ml-4 sm:ml-16 hover:scale-10">
            Pranay Gupta
          </p>
        </div> */}
      {/* </div> */}

      <Contact_Icon />

      <div data-aos="zoom-in-up" data-aos-duration="800">
        <p className="mt-3 w-[85%] sm:w-[70%] m-auto text-white pb-3 text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          soluta, dolores odio eum saepe molestias.
        </p>
      </div>
    </div>
  );
};

export default Home;
