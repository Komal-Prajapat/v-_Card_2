import React from "react";

const Enquiry = () => {
  return (
    <>
      <div className="enquirycontainer">
        <div className="tittle flex mb-3">
          <h1 className="mt-3 font-bold text-3xl text-center bg-white pl-2 pr-2">
            Contact US
          </h1>
          <hr className="mt-7 bg-white h-1 w-[200px] ml-auto" />
        </div>
        <div className="form   bg-white p-4 m-4">
          <form
            className="   mt-2 "
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <div className="data flex">
              <div className="input w-[50%] mr-3">
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full mb-4 p-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full mb-4 p-2 border rounded mr-1 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full mb-4 p-2 border rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div
                className="
       "
              >
                <textarea
                  name="message"
                  placeholder="Enter Message"
                  className="w-full mb-4 p-2 border rounded focus:outline-none focus:border-blue-500"
                  rows="5"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-[50%] m-auto p-2 enquiryfrom color4 focus:outline-none text-white  bg-black shadow-2xl  hover:text-black hover:scale-110 p-2"
            >
              {/* <span className="text-white bg-black p-2">Send</span> */}
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
