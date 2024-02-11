import React from "react";
import PhoneNumberQRCode from "./PhoneNumberQRCode";
// import QRCode from 'qrcode.react';
import "./payment.css";

const PaymentOnline = () => {
  const phoneNumber = "+91 9893785834";
  const paytmNumber = "+91 74156-64456";
  const phonePeNumber = "+91 74156-64456";
  const googlePayNumber = "+91 74156-64456";

  // Bank information
  const bankName = "ICICI BANK";
  const ifscCode = "ICIC000094";
  const accountHolderName = "Mr. Pranay Gupta";
  const accountNumber = "09450500070";
  const accountType = "Current Account";

  return (
    <div className="payment_container" data-aos="flip-down">
      <div className="div flex">
        <hr className="w-16 mb-3 bg-black h-1 mt-7 mr-auto w-[200px]"></hr>
        <h1 className="mt-5 mb-2 bg-black text-white font-bold text-center text-2xl pl-2 pr-2 ">
          OR Code
        </h1>
      </div>

      <div className=" w-[96%] m-auto text-black rounded p-2 flex">
        {/* <div className="payment-numbers-container">
          <div className="payment-number flex mb-4">
            <h3 className="font-bold">Paytm Number:</h3>
            <p className="ml-10">{paytmNumber}</p>
          </div>
          <div className="payment-number flex mb-4">
            <h3 className="font-bold">Phone Pe Number:</h3>
            <p className="ml-5">{phonePeNumber}</p>
          </div>
          <div className="payment-number flex mb-4">
            <h3 className="font-bold">Google Pay Number:</h3>
            <p className="ml-3">{googlePayNumber}</p>
          </div>
        </div> */}

        <div className="button bg-black p-3  rounded-2xl m-auto text-white">
          {" "}
          Downlod My OR Code
        </div>
        <div className="ml-auto ">
          <PhoneNumberQRCode phoneNumber={phoneNumber} />
        </div>
      </div>
    </div>
  );
};

export default PaymentOnline;
