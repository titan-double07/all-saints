import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import BankAccounts from "./components/BankAccounts";

export default function Give() {
  return (
    <div className="container flex flex-col gap-8 justify-center items-center text-center ">
      <section className="section text-center">
        <header className="">
          <h3>luke 6:38</h3>

          <p className="relative  flex w-full mb-4">
            <FaQuoteLeft className="w-1/3" />
            <span className=" font-bold ">
              give, and it will be given to you. Good measure, pressed down,
              shaken together, running over, will be put into your lap. For with
              the measure you use it will be measured back to you.
            </span>
            <FaQuoteRight className=" w-1/3 " />
          </p>
        </header>
        <BankAccounts />
      </section>
      <section className="section">
        <h1>Church needs</h1>
        <p className="pb-3">
          We at All Saints truly appreciate you all for the support you have given us, and continue to hope for your continued support. 

        </p>
        <div className="church-needs flex flex-col gap-5">
        <div className="bg-secondary/20 rounded-lg py-3 pr-1 pl-3 text-dark shadow-sm shadow-dark">
          <p className="border-l-4 border-primary pl-3 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            dignissimos quisquam iste repudiandae sunt officia at autem, velit
            commodi, iure natus!
          </p>
        </div>
        <div className="bg-secondary/20 rounded-lg py-3 pr-1 pl-3 text-dark shadow-sm shadow-dark">
          <p className="border-l-4 border-primary pl-3 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            dignissimos quisquam iste repudiandae sunt officia at autem, velit
            commodi, iure natus!
          </p>
        </div>
        <div className="bg-secondary/20 rounded-lg py-3 pr-1 pl-3 text-dark shadow-sm shadow-dark">
          <p className="border-l-4 border-primary pl-3 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            dignissimos quisquam iste repudiandae sunt officia at autem, velit
            commodi, iure natus!
          </p>
        </div>

        </div>
      </section>
    </div>
  );
}
