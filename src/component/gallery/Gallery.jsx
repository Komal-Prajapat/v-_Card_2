import React from "react";
import "./style.css";
const Gallery = () => {
  return (
    <>
      <div className="gallery bg-black text-white flex p-4">
        <div className="box">
          <div className="img1 border-2 border-white">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SeHzXONbVfFiswRkgtKn0XjWTMWVV9aAIhhmflFwI1mh9ivB9WHjFss_ROePUhuYOuA&usqp=CAU"
              alt=""
              className="img1  "
            />
          </div>

          <div className="img2 border-2 border-white mt-10">
            <img
              src="https://www.mooc.org/hubfs/applications-of-computer-programming.jpg"
              alt=""
              className=""
            />
          </div>
        </div>

        <div className="img1 border-2 border-white m-auto ml-3">
          <img
            src="https://www.mooc.org/hubfs/applications-of-computer-programming.jpg "
            alt=""
            className=""
          />
        </div>

        <div data-aos="zoom-in " className="flex">
          <hr className="w-11  bg-white mr-3 h-1 m-auto"></hr>
          <h1 className="m-auto  font-bold text-center text-white text-3xl ">
            Gallery
          </h1>
        </div>
      </div>
    </>
  );
};

export default Gallery;
