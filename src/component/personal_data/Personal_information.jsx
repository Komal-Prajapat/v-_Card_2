import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faEnvelope,
  faLocation,
  faPerson,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css"; // Make sure to adjust the path if needed

AOS.init();

const PersonalInformation = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:jackie@gmail.com";
  };

  const handleMobileClick = () => {
    window.location.href = "tel:+9178541254789";
  };

  const handleBirthdayClick = () => {
    window.location.href = "/birthday-details";
  };

  const handleLocationClick = () => {
    window.location.href = "/location-details";
  };

  return (
    <div>
      <div data-aos="zoom-in-up" className="flex" data-aos-duration="800">
        <h1 className="font-bold text-2xl mt-5 bg-black w-[150px] p-2 h-11 text-white">
          Contact US
        </h1>
        <hr className="bg-black h-1 w-[200px] ml-auto mt-8" />
      </div>

      <div className="container  w-full flex  mt-16">
        <div className="image">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.XkXvqSVJfVLD3RV978K8IAHaLI&pid=Api&P=0&h=180"
            alt="Person image "
          />
        </div>
        <div className="data ml-auto max">
          <div
            className="email w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-pink-400 mt-2"
            onClick={handleEmailClick}
            data-aos="zoom-in-down"
            data-aos-duration="800"
          >
            <div className="icon bg-pink-500 w-6 pl-1 rounded-full">
              <FontAwesomeIcon icon={faPerson} className="mr-2" />
            </div>
            <p className="text-black">Name</p>
            <p className="font-bold text-black">Komal</p>
          </div>

          <div
            className="email w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-pink-400 mt-2"
            onClick={handleEmailClick}
            data-aos="zoom-in-down"
            data-aos-duration="800"
          >
            <div className="icon bg-pink-500 w-6 pl-1 rounded-full">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            </div>
            <p className="text-black">E-mail address</p>
            <p className="font-bold text-black">jackie@gmail.com</p>
          </div>

          <div
            className="email w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-orange-300"
            onClick={handleMobileClick}
            data-aos="zoom-in-down"
            data-aos-duration="800"
          >
            <div className="icon bg-orange-400 w-6 pl-1 rounded-full">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
            </div>
            <p className="text-black">Mobile number</p>
            <p className="font-bold text-black">+91 78541254789</p>
          </div>

          <div
            className="email w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-orange-300"
            onClick={handleMobileClick}
            data-aos="zoom-in-down"
            data-aos-duration="800"
          >
            <div className="icon bg-orange-400 w-6 pl-1 rounded-full">
              <FontAwesomeIcon icon={faLocation} className="mr-2" />
            </div>
            <p className="text-black">Address</p>
            <p className="font-bold text-black">Indore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
