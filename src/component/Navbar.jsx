import React, { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import Home from "./home/Home";
import Appointment from "./Appointment";
import Service from "./Service";
import Gallery from "./gallery/Gallery";
import Products from "./products/Products";
import Blog from "./Blog/Blog";
import Contact_Icon from "./Contact_Icon";
import PersonalInformation from "./personal_data/Personal_information";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Enquiry from "./enquiry/Enquiry";
import PaymentOnline from "./Payment/PaymentOnline";

const Navbar = () => {
  return (
    <div>
      <nav className="flex  w-full fixed bottom-0 justify-between items-center bg-gray-800 p-4">
        
        <ul className="flex space-x-4">
          <li className="bg-black p-3">
            <a href="#home" className="text-white">
              Home
            </a>
          </li>
          <li className="bg-black p-3">
            <a href="#Contact" className="text-white">
              Contact
            </a>
          </li>
          <li className="bg-black p-3">
            <a href="#Appointment" className="text-white">
              Appointment
            </a>
          </li>
          <li className="bg-black p-3">
            <a href="#Gallery" className="text-white">
              Gallery
            </a>
          </li>
          <li className="bg-black p-3">
            <a href="#Blog" className="text-white">
              Blog
            </a>
          </li>
          <li className="bg-black p-3">
            <a href="#Enquiry" className="text-white">
              Enquiry
            </a>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="container Home w-full sm:w-[40%] h-[400px] sm:m-auto shadow-2xl border-2 ">
        {/* Button to toggle navigation */}

        {/* Navigation bar */}

        <div className="homepage m-0" id="home">
          <Home></Home>
        </div>

        <div className="appointment border-2 shadow-2xl" id="Contact">
          <PersonalInformation></PersonalInformation>
        </div>

        <div className="appointment" id="Appointment">
          <Appointment></Appointment>
        </div>
        <div className="Service border-2 shadow-2xl " id="service">
          <Service></Service>
        </div>

        <div className="gallery" id="Gallery">
          <Gallery></Gallery>
        </div>

        {/* 
        <div className="blog"  id='Blog'>
          <Blog></Blog>
        </div> */}
        <div className="payment border-2 shadow-2xl" id="Enquiry">
          <PaymentOnline></PaymentOnline>
        </div>

        <div className="blog bg-black" id="Enquiry">
          <Enquiry></Enquiry>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
