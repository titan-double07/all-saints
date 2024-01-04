import React from "react";
import Programs from "./components/Programs";
import BirthdayList from "./components/BirthdayList";

export default function page() {
  return (
    <div className="container pb-10 pt-5 flex flex-col gap-8 justify-center items-center">
      <section className="section  ">
        <h1>programs</h1>
        <div className="overflow-x-auto">
          <Programs />
        </div>
      </section>
      <section className="section  ">
        <div className="flex flex-col gap-1">
          <h1>prayer focus</h1>
          <h3 className="text-dark/60">march birthday</h3>
        </div>
        <BirthdayList />
      </section>
      <section className="section  ">
        <h1>{`women's corner`}</h1>
        <div className="bg-secondary/20 rounded-lg py-3 pr-1 pl-3 text-dark shadow-sm shadow-dark">
          <div className="border-l-4 border-primary pr-1 pl-3 flex flex-col">
            <p className="uppercase ">PARISH MONTHLY PRAYER MEETING</p>
            <p className=" ">
              Every 2nd Saturday of the of the month by 9:00am
            </p>
          </div>
        </div>
        <div className="bg-secondary/20 rounded-lg py-3 pr-1 pl-3 text-dark shadow-sm shadow-dark">
          <div className="border-l-4 border-primary pr-1 pl-3 flex flex-col">
            <p className="uppercase ">PARISH MONTHLY PRAYER MEETING</p>
            <p className=" ">
              Every 2nd Saturday of the of the month by 9:00am
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
