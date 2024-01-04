import React from "react";
import Logo from "../lib/Logo";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer container bg-primary text-light py-5 flex flex-col justify-center items-center w-full ">
      <div className="flex items-center justify-center gap-1">
        <div className="logo flex items-end gap-5 ">
          <Logo className={`w-7`} />
        </div>
        <p className="  text-center uppercase text-sm ">
          {`All Saint's Anglican Church`}
        </p>
      </div>
      <div className="phone-no flex items-center gap-1">
        <p className="text-center text-sm">+91 9999999999</p>
        <FaPhone />
      </div>
      <div className="email flex items-center gap-1">
        <p className="text-center text-sm">asaceikorodu@gmail.com</p>
        <FaEnvelope />
      </div>
    </div>
  );
}
