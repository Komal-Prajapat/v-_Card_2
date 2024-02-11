import React from "react";

const Appointment = () => {
  return (
    <>
      <div
        className="container  bg-black p-2"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="title flex">
          <hr className="bg-white h-1 w-[100px] mt-6 mr-auto  w-28 " />
          <h1 className="font-bold text-2xl bg-white p-2  ">
            Make An Appointment
          </h1>
        </div>

        <form action="" className="mt-4" data-aos="flip-down">
          <label htmlFor="date" className="text-left block ml-3">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-[95%] m-auto border p-2 rounded-sm"
          />

          <div className="time flex mt-4">
            <button className=" ml-3 p-2 rounded-sm text-white border-2 w-[200px] timebutton">
              8:10-20:00
            </button>
            <button className=" ml-3 p-2 rounded-sm text-white border-2 w-[200px] timebutton">
              8:10-20:00
            </button>
            <button className=" ml-3 p-2 rounded-sm text-white border-2 w-[200px] timebutton">
              8:10-20:00
            </button>
            <button className=" ml-3 p-2 rounded-sm text-white border-2 w-[200px] timebutton">
              8:10-20:00
            </button>
          </div>

          <button className="bg-white p-2 mt-3 w-[300px] rounded-xl m-auto">
            Make An Appointment
          </button>
        </form>
      </div>
    </>
  );
};

export default Appointment;
