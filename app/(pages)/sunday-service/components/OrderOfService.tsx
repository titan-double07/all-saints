import React from 'react'
import { orderOfServiceData } from "@/app/data";

export default function OrderOfService() {
      const { title, theme, time, type, preacher, intercession, order } =
    orderOfServiceData;
  return (
    <section className="section">
      <header className="text-center font-semibold ">
        <h1 className="text-center">{title}</h1>
        <div className="flex items-center justify-between">
          <p>{type}</p>
          <p>time:&nbsp;{time}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>preacher:&nbsp;{preacher}</p>
          <p>intercession:&nbsp;{intercession}</p>
        </div>
      </header>

      <ul className=" order-list flex flex-col gap-5">
        {order.map((item) => {
          const { index, text } = item;
          if (index === 3) {
            const { OTreading, psalm, epistile, gradualHymn, gospel } =
              item.readings;
            return (
              <div key={index}>
                <li className=" border-b shadow shadow-primary border-primary text-xl rounded-lg bg-primary text-light ">
                  <div className="flex items-center gap-2 ">
                    <span className="bg-primary text-secondary w-10 py-1 font-black inline-flex items-center justify-center font-sans  text-2xl rounded-l-lg ">
                      {index}
                    </span>
                    <p className="">{text}</p>
                  </div>
                </li>
                <ul className="reading pl-3 flex flex-col gap-2 pb-2 text-light pt-2">
                  <li className=" list-disc w-fit bg-primary rounded py-1 shadow shadow-primary marker:text-secondary list-inside px-2 ">
                    <strong> O.T reading: </strong> &nbsp; {OTreading}
                  </li>
                  <li className=" list-disc w-fit bg-primary rounded py-1 shadow shadow-primary marker:text-secondary list-inside px-2 ">
                    <strong>psalm:</strong> &nbsp; {psalm}
                  </li>
                  <li className=" list-disc w-fit bg-primary rounded py-1 shadow shadow-primary marker:text-secondary list-inside px-2 ">
                    <strong>epistle:</strong> &nbsp;{epistile}
                  </li>
                  <li className=" list-disc w-fit bg-primary rounded py-1 shadow shadow-primary marker:text-secondary list-inside px-2 ">
                    <strong>gradual Hymn:</strong> &nbsp;{gradualHymn}
                  </li>
                  <li className=" list-disc w-fit bg-primary rounded py-1 shadow shadow-primary marker:text-secondary list-inside px-2">
                    <strong>gospel:</strong> &nbsp; {gospel}
                  </li>
                </ul>
              </div>
            );
          }
          return (
            <li
              key={index}
              className="flex items-center gap-2 border-b shadow shadow-primary border-primary text-xl rounded-lg bg-primary text-light ">
              <span className="bg-primary text-secondary w-10 py-1 font-black inline-flex items-center justify-center font-sans  text-2xl rounded-l-lg ">
                {index}
              </span>
              <p className="">{text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
