import React from "react";

export default function Scheme() {
  return (
    <div className="rounded-lg border-2 border-dark  divide-y divide-dark/70 flex flex-col items-center justify-center px-5 w-[90%] mx-auto">
      <section className="flex flex-col gap-1  py-2 w-full">
        <h3 className="day">sunday</h3>
        <div className="programs flex flex-col gap-1 w-full ">
          <div className="flex items-center justify-between">
            <p className="text-lg title">1st Service</p>
            <p className="text-lg time">7:00am - 9:00am</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg title">2nd Service</p>
            <p className="text-lg time">9:00am - 11:00am</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-1  py-2 w-full">
        <h3 className="day">tuesday</h3>
        <div className="programs flex flex-col gap-1 w-full ">
          <div className="flex items-center justify-between">
            <p className="text-lg title">Bible Study</p>
            <p className="text-lg time">6:00pm</p>
          </div>
        </div>
      </section>
    </div>
  );
}
